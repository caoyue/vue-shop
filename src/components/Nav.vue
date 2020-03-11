<template>
    <div id="nav">
        <ul class="list">
            <router-link
                tag="li"
                v-for="menu in navMenu"
                :key="menu.title"
                :to="menu.path"
                ><a>{{ menu.title }}</a></router-link
            >
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

<style scoped lang="less">
#nav {
    display: flex;
    background-color: aliceblue;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 80%;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
}

.list li {
    width: 15%;
    margin: 0;
    padding: 0;
}

.list a {
    display: block;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 10px;
    color: white;
    background-color: cadetblue;
    text-decoration: none;
}

.list a:hover,
.router-link-exact-active a {
    background-color: aquamarine;
}
</style>
