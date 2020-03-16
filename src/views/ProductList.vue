<template>
    <div>
        <ul class="list">
            <router-link
                tag="li"
                v-for="p in products"
                :key="p.id"
                :to="{ name: 'Product', params: { id: p.id.toString() } }"
            >
                <a>{{ p.name }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { Product } from '@/types/index';

@Component
export default class ProductListView extends Vue {
    @State products!: Product[];
    @Action loadProducts!: (payload: { page: number }) => void;

    mounted() {
        this.loadProducts({ page: 1 });
    }
}
</script>

<style lang="less" scoped>
ul {
    list-style: none;
    font-size: @normalFont;
}

li {
    line-height: @lineHeight;
}
</style>
