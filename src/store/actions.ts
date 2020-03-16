import { ActionTree } from 'vuex';
import { State, User, Product } from '@/types';
import router from '@/router';
import userApi from '@/api/user';
import productApi from '@/api/product';

const actions: ActionTree<State, State> = {
    /* user */
    async register(
        { commit },
        payload: { username: string; password: string },
    ) {
        const res: Ajax.AjaxResponse<User> = await userApi
            .register(payload.username, payload.password)
            .then(res => res.data)
            .catch(e => e);

        if (res && res.success) {
            commit('login', {
                username: res.result.username,
                token: res.result.token,
            });
            router.replace('/user');
        } else {
            const error =
                res && res.code ? `Code ${res.code}` : 'Network Error.';
            commit('alertMessage', `Register Error: ${error}`);
        }
    },
    async login({ commit }, payload: { username: string; password: string }) {
        const res: Ajax.AjaxResponse<User> = await userApi
            .login(payload.username, payload.password)
            .then(res => res.data)
            .catch(e => e);

        if (res && res.success) {
            commit('login', {
                username: res.result.username,
                token: res.result.token,
            });
            router.replace('/user');
        } else {
            const error =
                res && res.code ? `Code ${res.code}` : 'Network Error.';
            commit('alertMessage', `Login Error: ${error}`);
        }
    },
    async logout({ commit }) {
        await userApi.logout().catch(e => e);
        commit('logout');
        router.replace('/');
    },

    /* product */
    async loadProducts({ commit }, payload: { page: number }) {
        const res: Ajax.AjaxResponse<Product[]> = await productApi
            .list(payload.page)
            .then(res => res.data)
            .catch(e => e);
        if (res && res.success) {
            commit('setProducts', res.result);
        }
    },
    async getProductById({ commit }, payload: { id: number }) {
        const res: Ajax.AjaxResponse<Product> = await productApi
            .get(payload.id)
            .then(res => res.data)
            .catch(e => e);
        if (res && res.success) {
            commit('setProduct', res.result);
        }
    },
};

export default actions;
