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
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
