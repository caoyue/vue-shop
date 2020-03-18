<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div v-html="html"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Page } from '../types';
import { Action } from 'vuex-class';

@Component
export default class AboutView extends Vue {
    @Action loadPage!: (payload: { tag: string }) => Promise<Page>;

    private html = '';

    created() {
        this.loadPage({ tag: 'About' }).then(s => {
            this.html = s.content;
        });
    }
}
</script>
