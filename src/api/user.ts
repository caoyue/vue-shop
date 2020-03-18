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
    profile() {
        return http.get('/user/profile');
    },
};

export default userApi;
