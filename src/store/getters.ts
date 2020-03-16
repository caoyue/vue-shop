import { State } from '@/types';

const getters = {
    isAuthenticated(state: State) {
        return state.user.username && state.user.token ? true : false;
    },
};

export default getters;
