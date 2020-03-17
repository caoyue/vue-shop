import axios from 'axios';
import store from '@/store';
import router from '@/router';
import types from '@/store/types';
import _ from '@/utils';

const http = axios.create();

http.interceptors.request.use(
    config => {
        // set BaseUrl
        config.baseURL = process.env.VUE_APP_BASEAPI;

        // if token exists, add to request
        if (store.state.user && store.state.user.token) {
            config.headers.Authorization = `Bearer${store.state.user.token}`;
        }

        store.commit(types.START_LOADING);
        return config;
    },
    error => {
        store.commit(types.FINISH_LOADING);
        console.log(error);
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    response => {
        store.commit(types.FINISH_LOADING);
        return response;
    },
    error => {
        store.commit(types.FINISH_LOADING);

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
            store.commit(types.ALERT_MESSAGE, 'Network Error.');
        }
        console.log(error);
        return Promise.reject(error);
    },
);

export default http;
