export default {
    state: {
        animation: false
    },
    mutations: {
        changeAnimationStatus: (state, payload) => {
            state.animation = payload
        }
    },
    actions: {
        changeAnimationStatus: (context, payload) => {
            context.commit('changeAnimationStatus', payload);
        }
    },
    getters: {
        isAnimationCalled(state) {
            return state.animation;
        }
    }
}