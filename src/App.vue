<template>
    <div id="app">
        <NavView />
        <router-view class="wrap" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import NavView from './components/Nav.vue';

@Component({
    components: {
        NavView,
    },
})
export default class App extends Vue {
    @Watch('$route', { immediate: true, deep: true })
    onRouteChange(newVal: Route) {
        document.title = newVal.meta.title || 'Vue Shop';
    }
}
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.wrap {
    color: @fontColor;
    background-color: @backColor;
    padding: 30px 30px;
}
</style>
