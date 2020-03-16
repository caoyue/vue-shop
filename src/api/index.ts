import axios from 'axios';
import store from '@/store';
import router from '@/router';
import _ from '@/utils';

const developmentBaseApi = 'https://localhost:5001';
const productBaseApi = 'https://localhost:5000';

const getBaseUrl = function() {
    if (process.env.NODE_ENV == 'development') {
        return developmentBaseApi;
    } else if (process.env.NODE_ENV == 'production') {
        return productBaseApi;
    }
};

const http = axios.create();

http.interceptors.request.use(
    config => {
        // set BaseUrl
        config.baseURL = getBaseUrl();

        // if token exists, add to request
        if (store.state.user && store.state.user.token) {
            config.headers.Authorization = `Bearer${store.state.user.token}`;
        }

        store.commit('startLoading');
        return config;
    },
    error => {
        store.commit('finishLoading');
        console.log(error);
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

        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // token expired
                    _.removeToken();
                    router.replace('/login');
                    break;
                default:
                    break;
            }
        } else {
            store.commit('alertMessage', 'Network Error.');
        }
        console.log(error);
        return Promise.reject(error);
    },
);

export default http;
