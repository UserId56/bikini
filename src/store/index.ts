import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: false
  },
  getters: {
  },
  mutations: {
    ShowCloseMenu(state, data): void {
      state.showMenu = data
    }
  },
  actions: {
  },
  modules: {
  }
})
