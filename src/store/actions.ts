import { ActionTree } from 'vuex';
import { State } from '@/types';
import http from '@/utils/http';

const BaseApi = 'https://localhost:5001';

const actions: ActionTree<State, State> = {
    async loadProducts({ commit }, data: { page: number }) {
        const res = await http
            .get(`${BaseApi}/product/list/${data.page}`)
            .catch(e => {
                console.log(e);
            });
        if (res && res.status == 200) {
            commit('setProducts', res.data);
        }
    },
    async getProductById({ commit }, data: { id: number }) {
        const res = await http.get(`${BaseApi}/product/${data.id}`).catch(e => {
            console.log(e);
        });
        if (res && res.status == 200) {
            commit('setProduct', res.data);
        }
    },
};

export default actions;
