import { ShoppingCart } from '@/types/index';

const utils = {
    calculate(carts: ShoppingCart[]) {
        return carts
            .reduce((sum, val) => sum + val.product.price * val.number, 0)
            .toFixed(2);
    },
};

export default utils;
