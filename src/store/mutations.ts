import { State, ShoppingCart, Product } from '@/types/index';

export default {
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
