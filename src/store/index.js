import Vue from 'vue';
import Vuex from 'vuex';

import animations from './animation';
import pages from './page';
import route from './route';
import chapters from './chapter';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        animations,
        pages,
        route,
        chapters
    }
})
