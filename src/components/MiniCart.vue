<template>
    <div id="mini-cart" @click="goCart" v-show="show">
        <div>
            <IconFont iconClass="Shoppingcartfinancebusiness" />
            <span>{{ carts.num }}</span>
        </div>
        <div>
            <IconFont iconClass="money" />
            <span>{{ carts.count }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import _ from '@/utils/index';

@Component
export default class MiniCartView extends Vue {
    get carts() {
        const c = this.$store.state.shoppingCarts;
        return {
            num: c.length,
            count: _.calculate(c),
        };
    }

    get show() {
        return this.$route.name !== 'ShoppingCart';
    }

    goCart() {
        return this.$router.push('/shoppingcart');
    }
}
</script>

<style lang="less" scoped>
#mini-cart {
    width: 10%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

#mini-cart div,
#mini-cart span {
    padding: 5px;
}

#mini-cart:hover {
    cursor: pointer;
    color: white;
    background-color: cadetblue;
}
</style>
