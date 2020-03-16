import Vue from 'vue';

// register hook
import Component from 'vue-class-component';
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

import App from './App.vue';
import router from './router';
import store from './store';

// register icon font component
import './assets/iconfont.js';
import IconFont from '@/components/IconFont.vue';
Vue.component('IconFont', IconFont);

// use nprogress
import { State } from '@/types/index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3,
});

store.watch(
    (state: State) => state.loading,
    (newVal: number, oldVal: number) => {
        if (newVal === 0) return NProgress.done();
        if (oldVal === 0) return NProgress.start();
        NProgress.set(1.8 / Math.max(oldVal, newVal));
    },
);

// user login
router.beforeEach((to, from, next) => {
    if (to.meta.needLogin && !store.getters.isAuthenticated) {
        router.push({
            path: '/login',
            query: {
                // redirect to original path after login
                redirect: to.fullPath,
            },
        });
    }
    next();
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
