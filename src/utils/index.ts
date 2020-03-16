import { ShoppingCart, User, NavMenu } from '@/types/index';
import routes from './routes';

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
    loadNav(): NavMenu[] {
        return routes
            .filter(r => r.meta.show)
            .map(r => {
                const nav: NavMenu = {
                    title: r.meta.title || 'Vue Shop',
                    path: r.path,
                };
                return nav;
            });
    },
};

export default utils;
