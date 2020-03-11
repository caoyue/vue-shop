import { State, Product } from '@/types/index';

const product1: Product = {
    id: 1,
    name: 'Apple',
    detail: 'This is an apple',
    stock: 101,
    price: 3.11,
};

const product2: Product = {
    id: 2,
    name: 'Banana',
    detail: 'This is a banana',
    stock: 56,
    price: 2.19,
};

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
    products: [product1, product2],
    shoppingCarts: [
        {
            product: product1,
            number: 3,
        },
        {
            product: product2,
            number: 4,
        },
    ],
};

export default state;
