<template>
    <div class="product">
        <h1>{{ product.name }}</h1>
        <p>Price: {{ product.price }}</p>
        <p>Stock: {{ product.stock }}</p>
        <div class="cart">
            <div>
                <button :disabled="isDisabled(-1)" @click="changeNum(-1)">
                    -
                </button>
                <input type="text" v-model="num" @change="onInputChange" />
                <button :disabled="isDisabled(1)" @click="changeNum(1)">
                    +
                </button>
                <button class="add" @click="addCart">Add</button>
            </div>
        </div>
        <p>{{ product.detail }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { State, Mutation } from 'vuex-class';
import { Product } from '@/types/index';
import { Component, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class ProductView extends Vue {
    @State products!: Product[];
    @Mutation addToCart!: (payload: {
        product: Product;
        number: number;
    }) => void;

    private num = 1;
    private product = {} as Product;

    created() {
        this.load(this.$route.params.id);
    }

    private changeNum(n: number) {
        this.num += n;
    }

    private onInputChange() {
        const pn = parseInt(this.num.toString());
        this.num = pn ? pn : 1;
        if (this.num <= 0) {
            this.num = 1;
        }
        if (this.num > this.product.stock) {
            this.num = this.product.stock;
        }
    }

    private addCart() {
        this.addToCart({
            product: this.product,
            number: this.num,
        });
    }

    private isDisabled(n: number) {
        if (n > 0) {
            return this.num >= this.product.stock;
        } else {
            return this.num <= 1;
        }
    }

    @Watch('$route', { immediate: true, deep: true })
    private onRouteChange(newVal: Route) {
        this.load(newVal.params.id);
    }

    private load(idStr: string) {
        const p = this.getProduct(idStr);
        if (p) {
            document.title = p.name;
            this.product = p;
        } else {
            return this.$router.push('/404');
        }
    }

    private getProduct(idStr: string) {
        return this.products.find(p => p.id.toString() === idStr);
    }
}
</script>

<style lang="less" scoped>
button,
input,
p {
    font-size: 20px;
}

input {
    width: 50px;
    text-align: center;
}

.add {
    margin-left: 10px;
}
</style>
