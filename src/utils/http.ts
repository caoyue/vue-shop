import axios from 'axios';
import store from '@/store';

const http = axios.create();

http.interceptors.request.use(
    config => {
        store.commit('startLoading');
        return config;
    },
    error => {
        store.commit('finishLoading');
        store.commit('alertMessage', 'Network error.');
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    response => {
        store.commit('finishLoading');
        return response;
    },
    error => {
        store.commit('finishLoading');
        store.commit('alertMessage', 'Network error.');
        return Promise.reject(error);
    },
);

export default http;
