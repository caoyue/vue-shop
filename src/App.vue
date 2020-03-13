<template>
    <div id="app">
        <AlertView />
        <NavView />
        <router-view class="wrap" />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Route } from 'vue-router';
import NavView from './components/Nav.vue';
import AlertView from './components/Alert.vue';

@Component({
    components: {
        NavView,
        AlertView,
    },
})
export default class App extends Vue {
    @Mutation alertMessage!: (message: string) => void;
    @Watch('$route', { immediate: true, deep: true })
    onRouteChange(newVal: Route) {
        this.alertMessage('');
        document.title = newVal.meta.title || 'Vue Shop';
    }
}
</script>

<style lang="less">
@import './styles/global.less';

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.wrap {
    color: @fontColor;
    background: linear-gradient(@backColor, @menuFontColor);
    padding: 30px 30px;
}
</style>
