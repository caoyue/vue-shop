<template>
    <div id="mini-cart" @click="goCart">
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

    goCart() {
        return this.$router.push('/shoppingcart').catch(e => e);
    }
}
</script>

<style lang="less" scoped>
#mini-cart {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 150px;
}

#mini-cart div,
#mini-cart span {
    padding: 5px;
}

#mini-cart:hover {
    cursor: pointer;
    color: @menuFontColor;
    background-color: @menuColor;
}
</style>
