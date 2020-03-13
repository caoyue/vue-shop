<template>
    <div class="cart">
        <h1 v-if="empty">No products here.</h1>
        <div v-if="!empty" class="row">
            <div class="cell center">Product</div>
            <div class="cell center">Price</div>
            <div class="cell center">Number</div>
            <div class="cell center">Count</div>
            <div class="cell center"></div>
        </div>
        <div class="row" v-for="s in shoppingCarts" :key="s.product.id">
            <div class="cell center">
                <router-link
                    :to="{
                        name: 'Product',
                        params: { id: s.product.id.toString() },
                    }"
                    ><a>{{ s.product.name }}</a>
                </router-link>
            </div>
            <div class="cell center">{{ s.product.price }}</div>
            <div class="cell center">
                <button :disabled="deceaseDisabled(s)" @click="decrease(s)">
                    -
                </button>
                <input v-model.lazy="s.number" @change="onInputChange(s)" />
                <button :disabled="inceaseDisabled(s)" @click="increase(s)">
                    +
                </button>
            </div>
            <div class="cell center">
                {{ (s.product.price * s.number).toFixed(2) }}
            </div>
            <div class="cell center">
                <button @click="remove(s)">Remove</button>
            </div>
        </div>
        <div v-if="!empty" class="row count">
            <div class="cell center">
                <IconFont iconClass="money" /> {{ count }}
            </div>
            <div class="cell center">
                <button @click="checkout">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { ShoppingCart } from '@/types/index';
import _ from '@/utils/index';

@Component
export default class ShoppingCartView extends Vue {
    @State shoppingCarts!: ShoppingCart[];
    @Mutation removeCart!: (s: ShoppingCart) => void;
    @Mutation productChange!: (payload: {
        productId: number;
        num: number;
    }) => void;

    private increase(s: ShoppingCart) {
        if (s.number < s.product.stock) {
            s.number++;
        }
        this.productChange({ productId: s.product.id, num: s.number });
    }

    private decrease(s: ShoppingCart) {
        if (s.number > 1) {
            s.number--;
        }
        this.productChange({ productId: s.product.id, num: s.number });
    }

    private inceaseDisabled(s: ShoppingCart) {
        return s.number >= s.product.stock;
    }

    private deceaseDisabled(s: ShoppingCart) {
        return s.number <= 1;
    }

    private onInputChange(s: ShoppingCart) {
        const pn = parseInt(s.number.toString());
        s.number = pn ? pn : 1;

        if (s.number <= 0) {
            s.number = 1;
        }
        if (s.number > s.product.stock) {
            s.number = s.product.stock;
        }
        this.productChange({ productId: s.product.id, num: s.number });
    }

    private remove(s: ShoppingCart) {
        this.removeCart(s);
    }

    private checkout() {
        alert('Not implemented yet.');
    }

    get count() {
        return _.calculate(this.shoppingCarts);
    }

    get empty() {
        return this.shoppingCarts.length === 0;
    }
}
</script>

<style lang="less" scoped>
.row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

.cell {
    font-size: @normalFont;
    width: 20%;
    height: 50px;
}

.center {
    text-align: center;
}

.count {
    justify-content: flex-end;
}

input {
    font-size: @normalFont;
    width: 50px;
}

button {
    font-size: @normalFont;
}
</style>
