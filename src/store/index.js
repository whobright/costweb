import Vue from 'vue';
import Vuex from 'vuex';
import allBank from './modules/allBank';
Vue.use(Vuex);
// 公共变量声明
export default new Vuex.Store({
  strict: false,
  modules: {
    allBank,
  }
});
