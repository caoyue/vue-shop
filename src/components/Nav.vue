<template>
    <div id="nav">
        <ul class="list">
            <router-link
                tag="li"
                v-for="menu in navMenu"
                :key="menu.title"
                :to="menu.path"
            >
                <a>{{ menu.title }}</a>
            </router-link>
        </ul>
        <MiniCartView />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { NavMenu } from '@/types/index';
import MiniCartView from './MiniCart.vue';

@Component({
    components: {
        MiniCartView,
    },
})
export default class NavView extends Vue {
    @State private navMenu!: NavMenu;
}
</script>

<style lang="less" scoped>
#nav {
    display: flex;
    background-color: @backColor;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 5px;
}

.list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    flex: 2;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
}

.list li {
    min-width: 150px;
    max-width: 300px;
    margin: 0;
    padding: 0;
}

.list a {
    display: block;
    font-size: @normalFont;
    font-weight: bold;
    padding: 10px 10px;
    color: @menuFontColor;
    background-color: @menuColor;
    text-decoration: none;
}

.list a:hover,
.router-link-exact-active a {
    background-color: @menuHoverColor;
}
</style>
