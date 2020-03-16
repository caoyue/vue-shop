import { State } from '@/types/index';
import _ from '@/utils';

const initialUser = _.loadUser();
const initialNav = _.loadNav();

const state: State = {
    user: initialUser,
    loading: 0,
    message: '',
    navMenu: initialNav,
    product: {
        id: 0,
        name: '',
        price: 0,
        stock: 0,
        detail: '',
    },
    products: [],
    shoppingCarts: [],
};

export default state;
