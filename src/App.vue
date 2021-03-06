<template>
    <div id="app">
        <AlertView />
        <NavView />
        <keep-alive :include="keepAlive">
            <router-view class="wrap" />
        </keep-alive>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Mutation, Action, Getter, State } from 'vuex-class';
import { Route } from 'vue-router';
import NavView from '@/components/Nav.vue';
import AlertView from '@/components/Alert.vue';
import types from '@/store/types';

@Component({
    components: {
        NavView,
        AlertView,
    },
})
export default class App extends Vue {
    @Mutation(types.ALERT_MESSAGE) alertMessage!: (message: string) => void;
    @Getter isAuthenticated!: boolean;
    @Action profile!: () => Promise<void>;
    @State keepAlive!: string[];

    @Watch('$route', { immediate: true, deep: true })
    onRouteChange(newVal: Route) {
        this.alertMessage('');
        document.title = newVal.meta.title || 'Vue Shop';
    }

    created() {
        this.initialRequest();
    }

    private initialRequest() {
        if (this.isAuthenticated) {
            this.profile();
        }
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

#nprogress .bar {
    background: lighten(@errorColor, 10%) !important;
}
</style>
