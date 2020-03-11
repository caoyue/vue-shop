import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: 'About',
        },
    },
    {
        path: '/products',
        name: 'ProductList',
        component: () => import('../views/ProductList.vue'),
        meta: {
            title: 'Product List',
        },
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue'),
        meta: {},
    },
    {
        path: '/shoppingcart',
        name: 'ShoppingCart',
        component: () => import('../views/ShoppingCart.vue'),
        meta: {
            title: 'ShoppingCart',
        },
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
        meta: {
            title: '404',
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
