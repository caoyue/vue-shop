const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: 'Home',
            show: true,
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/User/Register.vue'),
        meta: {
            title: 'Register',
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/User/Login.vue'),
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () => import('../views/User/Logout.vue'),
        meta: {
            title: 'Logout',
            needLogin: true,
        },
    },
    {
        path: '/products',
        name: 'ProductList',
        component: () => import('../views/ProductList.vue'),
        meta: {
            title: 'Product List',
            show: true,
        },
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User/Profile.vue'),
        meta: {
            title: 'User Profile',
            needLogin: true,
            show: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: {
            title: 'About',
            show: true,
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

export default routes;
