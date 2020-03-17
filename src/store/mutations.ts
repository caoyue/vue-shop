import { State, ShoppingCart, Product } from '@/types/index';
import types from './types';
import _ from '@/utils';

export default {
    /* alert message */
    [types.ALERT_MESSAGE](state: State, message: string) {
        state.message = message;
    },
    [types.START_LOADING](state: State) {
        state.loading++;
    },
    [types.FINISH_LOADING](state: State) {
        state.loading--;
    },

    /* user */
    [types.USER_LOGIN](
        state: State,
        payload: { username: string; token: string },
    ) {
        state.user.username = payload.username;
        state.user.token = payload.token;

        _.saveToken(state.user);
    },
    [types.USER_LOGOUT](state: State) {
        state.user.username = '';
        state.user.token = '';

        _.removeToken();
    },

    /* product */
    [types.PRODUC_LIST_LOAD](state: State, products: Product[]) {
        state.products = products;
    },
    [types.PRODUCT_LOAD](state: State, product: Product) {
        state.product = product;
    },

    /* shopping cart */
    [types.CART_UPDATE](
        state: State,
        payload: { productId: number; num: number },
    ) {
        const p = state.shoppingCarts.find(
            s => s.product.id === payload.productId,
        );
        if (p) {
            p.number = payload.num;
        }
    },
    [types.CART_REMOVE](state: State, cart: ShoppingCart) {
        state.shoppingCarts.splice(
            state.shoppingCarts.findIndex(
                s => s.product.id === cart.product.id,
            ),
            1,
        );
    },
    [types.CART_ADD](
        state: State,
        payload: { product: Product; number: number },
    ) {
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
