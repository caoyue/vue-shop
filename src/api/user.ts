import http from './index';

const userApi = {
    register(username: string, password: string) {
        return http.post('/user/register', {
            username,
            password,
        });
    },
    login(username: string, password: string) {
        return http.post('/user/login', {
            username,
            password,
        });
    },
};

export default userApi;
