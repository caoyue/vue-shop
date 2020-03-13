import { State, ShoppingCart, Product } from '@/types/index';

export default {
    /* login/register */
    register(state: State, payload: { username: string; password: string }) {
        state.user.username = payload.username;
    },
    login(state: State, username: string) {
        state.user.username = username;
    },
    logout(state: State) {
        state.user.username = '';
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
