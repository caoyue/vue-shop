<template>
    <div id="shopping-cart">
        <div>
            <icon-font iconClass="Shoppingcartfinancebusiness" />
            <span>{{ carts.num }}</span>
        </div>
        <div>
            <icon-font iconClass="money" />
            <span>{{ carts.count }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ShoppingCart } from '@/types/index';

@Component
export default class CartView extends Vue {
    get carts() {
        const c = this.$store.state.shoppingCarts;
        return {
            num: c.length,
            count: this.caculate(c),
        };
    }

    private caculate(carts: ShoppingCart[]) {
        return carts.reduce((sum, c) => sum + c.product.price * c.number, 0);
    }
}
</script>

<style lang="less" scoped>
#shopping-cart {
    width: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

#shopping-cart div,
#shopping-cart span {
    padding: 5px;
}
</style>
