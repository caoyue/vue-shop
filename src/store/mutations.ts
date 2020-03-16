import { State, ShoppingCart, Product } from '@/types/index';
import _ from '@/utils';

export default {
    /* user */
    login(state: State, payload: { username: string; token: string }) {
        state.user.username = payload.username;
        state.user.token = payload.token;
        _.saveToken(state.user);
    },
    logout(state: State) {
        state.user.username = '';
        state.user.token = '';
        _.removeToken();
    },

    /* alert message */
    alertMessage(state: State, message: string) {
        state.message = message;
    },
    startLoading(state: State) {
        state.loading++;
    },
    finishLoading(state: State) {
        state.loading--;
    },

    /* product */
    setProducts(state: State, products: Product[]) {
        state.products = products;
    },
    setProduct(state: State, product: Product) {
        state.product = product;
    },

    /* shopping cart */
    productChange(state: State, payload: { productId: number; num: number }) {
        const p = state.shoppingCarts.find(
            s => s.product.id === payload.productId,
        );
        if (p) {
            p.number = payload.num;
        }
    },
    removeCart(state: State, cart: ShoppingCart) {
        state.shoppingCarts.splice(
            state.shoppingCarts.findIndex(
                s => s.product.id === cart.product.id,
            ),
            1,
        );
    },
    addToCart(state: State, payload: { product: Product; number: number }) {
        const cart = state.shoppingCarts.find(
            c => c.product.id === payload.product.id,
        );
        if (cart) {
            cart.number += payload.number;
        } else {
            state.shoppingCarts.push(payload);
        }
    },
};
