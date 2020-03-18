import http from './index';

const pageApi = {
    get(tag: string) {
        return http.get(`/page/tag/${tag}`);
    },
};

export default pageApi;
