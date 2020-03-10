<template>
    <div class="about">
        <h1>{{ product.name }}</h1>
        <p>{{ product.detail }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { State } from 'vuex-class';
import { Product } from '@/types/index';

@Component
export default class ProductView extends Vue {
    @State products!: Product[];

    get id() {
        return this.$route.params.id;
    }

    get product() {
        const pd = this.products.find(
            p => p.id.toString() === this.$route.params.id,
        );
        if (pd) {
            document.title = pd.name;
            return pd;
        } else {
            return this.$router.push('/404');
        }
    }
}
</script>
