import { State, ShoppingCart, Product } from '@/types/index';
import types from './types';
import _ from '@/utils';

const aliveComponents = ['ProductListView'];
const addComponents = (state: State) => {
    _.addRangeToArray(state.keepAlive, aliveComponents);
};
const removeComponents = (state: State) => {
    state.keepAlive = _.removeRangeFromArray(
        state.keepAlive,
        (t: string) => aliveComponents.indexOf(t) < 0,
    );
};

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
    [types.USER_TOKEN]() {
        _.loadUser();
    },
    [types.USER_LOGIN](
        state: State,
        payload: { username: string; token: string },
    ) {
        state.user.username = payload.username;
        state.user.token = payload.token;
        _.saveToken(state.user);
        // keep component alive after login
        addComponents(state);
    },
    [types.USER_LOGOUT](state: State) {
        state.user.username = '';
        state.user.token = '';
        _.removeToken();
        // if logout, remove cached components
        removeComponents(state);
    },
    [types.USER_PROFILE](state: State, username: string) {
        state.user.username = username;
        addComponents(state);
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
        _.removeFromArray(
            state.shoppingCarts,
            (s: ShoppingCart) => s.product.id == cart.product.id,
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
            _.addToArray(state.shoppingCarts, payload);
        }
    },
};
