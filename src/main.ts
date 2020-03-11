import Vue from 'vue';

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

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
