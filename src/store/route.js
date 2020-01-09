export default {
    state: {
        route: '',
        tableOfContentsBack: '/'
    },
    mutations: {
        updateLastRoute: (state, payload) => {
            state.route = payload;
        },
        updateTableOfContentsBack: (state, payload) => {
            state.tableOfContentsBack = payload;
        }
    },
    actions: {
        updateLastRoute: (context, payload) => {
            context.commit('updateLastRoute', payload);
        },
        updateTableOfContentsBack: (context, payload) => {
            context.commit('updateTableOfContentsBack', payload);

        }
    },
    getters: {
        getLastRoute(state) {
            return state.route;
        },
        getTableOfContentsBack(state){
            return state.tableOfContentsBack;
        }
    }
}