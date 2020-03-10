import { State, Product, ShoppingCart } from '@/types/index';

const product: Product = {
    id: 1,
    name: 'Apple',
    detail: 'This is an apple',
    stock: 101,
    price: 3.11,
};

const cart: ShoppingCart = {
    product: product,
    number: 3,
};

const state: State = {
    navMenu: [
        {
            title: 'Home',
            path: '/',
            children: [],
        },
        {
            title: 'Product 1',
            path: '/product/1',
            children: [],
        },
        {
            title: 'Product 2',
            path: '/product/2',
            children: [],
        },
        {
            title: 'About',
            path: '/about',
        },
    ],
    products: [],
    shoppingCarts: [],
};

state.products.push(product);
state.shoppingCarts.push(cart);

export default state;
