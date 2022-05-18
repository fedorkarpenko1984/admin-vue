import { createStore } from 'vuex'

export default createStore({

  state: {
    showMenu: false
  },

  mutations: {
    toggleMenu(state) {
      console.log('toggle menu')
      state.showMenu = !state.showMenu;
    }

  },

  actions: {
  },
  modules: {
  }
})
