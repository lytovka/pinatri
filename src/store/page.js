export default {
    state: {
        page: true
    },
    mutations: {
        changePageStatus: (state, payload) => {
            state.page = payload
        }
    },
    actions: {
        changePageStatus: (context, payload) => {
            context.commit('changePageStatus', payload);
        }
    },
    getters: {
        isPageCalled(state) {
            return state.page;
        }
    }
}