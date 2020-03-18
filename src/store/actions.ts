import { ActionTree } from 'vuex';
import { State, User, Product, Page } from '@/types';
import userApi from '@/api/user';
import productApi from '@/api/product';
import types from './types';
import pageApi from '@/api/page';

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
            commit(types.USER_LOGIN, {
                username: res.result.username,
                token: res.result.token,
            });
            return '';
        } else {
            return res && res.message ? res.message : 'Network Error.';
        }
    },
    async login({ commit }, payload: { username: string; password: string }) {
        const res: Ajax.AjaxResponse<User> = await userApi
            .login(payload.username, payload.password)
            .then(res => res.data)
            .catch(e => e);

        if (res && res.success) {
            commit(types.USER_LOGIN, {
                username: res.result.username,
                token: res.result.token,
            });
            return '';
        } else {
            return res && res.message ? res.message : 'Network Error.';
        }
    },
    async logout({ commit }) {
        commit(types.USER_LOGOUT);
    },
    async profile({ commit }) {
        const res: Ajax.AjaxResponse<User> = await userApi
            .profile()
            .then(res => res.data)
            .catch(e => e);
        if (res && res.success) {
            commit(types.USER_PROFILE, res.result.username);
        } else {
            commit(types.USER_LOGOUT);
        }
    },

    /* page */
    async loadPage({ commit }, payload: { tag: string }) {
        const res: Ajax.AjaxResponse<Page> = await pageApi
            .get(payload.tag)
            .then(res => res.data)
            .catch(e => e);
        if (res && res.success) {
            // kee-alive after request success
            commit(types.ALIVE_ADD, `${payload.tag}View`);
            return res.result;
        } else {
            return {
                tag: payload.tag,
                content: '',
            };
        }
    },

    /* product */
    async loadProducts({ commit }, payload: { page: number }) {
        const res: Ajax.AjaxResponse<Product[]> = await productApi
            .list(payload.page)
            .then(res => res.data)
            .catch(e => e);
        if (res && res.success) {
            commit(types.PRODUC_LIST_LOAD, res.result);
        }
    },
    async getProductById({ commit }, payload: { id: number }) {
        const res: Ajax.AjaxResponse<Product> = await productApi
            .get(payload.id)
            .then(res => res.data)
            .catch(e => e);
        if (res && res.success) {
            commit(types.PRODUCT_LOAD, res.result);
        }
    },
};

export default actions;
