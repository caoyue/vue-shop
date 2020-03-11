<template>
    <div>
        <ul>
            <router-link
                tag="li"
                v-for="p in products"
                :key="p.id"
                :to="{ name: 'Product', params: { id: p.id } }"
            >
                <a>{{ p.name }}</a>
            </router-link>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Product } from '@/types/index';

@Component
export default class ProductListView extends Vue {
    @State products!: Product[];
}
</script>
