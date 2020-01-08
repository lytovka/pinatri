export default {
    state: {
        route: ''
    },
    mutations: {
        updateLastRoute: (state, payload) => {
            state.route = payload
        }
    },
    actions: {
        updateLastRoute: (context, payload) => {
            context.commit('updateLastRoute', payload);
        }
    },
    getters: {
        getLastRoute(state) {
            return state.route;
        }
    }
}