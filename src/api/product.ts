import http from './index';

const productApi = {
    list(page: number) {
        return http.get(`/product/list/${page}`);
    },
    get(id: number) {
        return http.get(`/product/${id}`);
    },
};

export default productApi;
