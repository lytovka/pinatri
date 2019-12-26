import Vue from 'vue';
import Vuex from 'vuex';

import animations from './animation';
import pages from './page';


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        animations,
        pages
    }
})
