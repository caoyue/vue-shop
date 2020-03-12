import axios from 'axios';
import { ActionTree } from 'vuex';
import { State } from '@/types';

const BaseApi = 'https://localhost:5001';

const actions: ActionTree<State, State> = {
    async loadProducts({ commit }, data: { page: number }) {
        const res = await axios
            .get(`${BaseApi}/product/list/${data.page}`)
            .catch(e => console.log(e));
        if (res && res.status == 200) {
            commit('setProducts', res.data);
        }
    },
    async getProductById(_context, data: { id: number }) {
        const res = await axios
            .get(`${BaseApi}/product/${data.id}`)
            .catch(e => console.log(e));
        if (res && res.status == 200) {
            this.commit('setProduct', res.data);
        }
    },
};

export default actions;
