import { ShoppingCart, User } from '@/types/index';

const tokenName = 'user';

const utils = {
    calculate(carts: ShoppingCart[]) {
        return carts
            .reduce((sum, val) => sum + val.product.price * val.number, 0)
            .toFixed(2);
    },
    parseUser(str: string | null): [boolean, User | null] {
        let success = true;
        let result: User | null = null;
        try {
            result = JSON.parse(str || '');
        } catch (e) {
            success = false;
        }
        return [success, result];
    },
    saveToken(user: User) {
        localStorage.setItem(tokenName, JSON.stringify(user));
    },
    removeToken() {
        localStorage.removeItem(tokenName);
    },
    getToken() {
        return localStorage.getItem(tokenName);
    },
    loadUser(): User {
        const [success, result] = this.parseUser(this.getToken());
        if (success && result) {
            return {
                username: result.username,
                token: result.token,
            };
        } else {
            this.removeToken();
            return {
                username: '',
                token: '',
            };
        }
    },
};

export default utils;
