/**
 * Created by Admin on 2017/1/7.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selected: 'index'
  },
  mutations: {
    changeSelected: (state, data) => {
      state.selected = data;
    }
  }
});

export default store;
