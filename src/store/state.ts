import { State } from '@/types/index';

const state: State = {
    navMenu: [
        {
            title: 'Home',
            path: '/',
            children: [],
        },
        {
            title: 'Products',
            path: '/products',
            children: [],
        },
        {
            title: 'ShoppingCart',
            path: '/shoppingcart',
        },
        {
            title: 'About',
            path: '/about',
        },
    ],
    product: {
        id: 0,
        name: '',
        price: 0,
        stock: 0,
        detail: '',
    },
    products: [],
    shoppingCarts: [],
};

export default state;
