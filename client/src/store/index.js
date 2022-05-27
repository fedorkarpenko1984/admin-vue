import { createStore } from 'vuex'
import axios from "axios";

export const BASE_URL = 'http://localhost:5000/api'

export default createStore({

  state: {
    showMenu: false,
    categories: [],
    products: []
  },

  mutations: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu;
    },

    setCategories(state, payload) {
      state.categories = payload;
    },

    setProducts(state, payload) {
      state.products = payload;
    }
  },

  actions: {

    // экшены для категорий(получить весь список, создать и удалить) =============
    fetchCategories: async ({commit}) => {
      const response = await axios.get(BASE_URL + '/categories/list')
      commit('setCategories', response.data)
    },

    createCategory: async ({dispatch}, payload) => {
      const response = await axios.post( BASE_URL + '/categories/create', payload, {})
      if (response.status === 201) {
        dispatch('fetchCategories')
      }
    },

    deleteCategory: async ({dispatch}, payload) => {
      const response = await axios.post( BASE_URL + '/categories/remove', {name: payload}, {})
      if (response.status === 204) {
        dispatch('fetchCategories')
      }
    },


    // экшены для товаров (получить весь список, создать и удалить) =====================
    fetchProducts: async ({commit}) => {
      const response = await axios.get(BASE_URL + '/products/list')
      commit('setProducts', response.data)
    },

    createProduct: async ({dispatch}, payload) => {
      const response = await axios.post( BASE_URL + '/products/create', payload, {})
      if (response.status === 201) {
        dispatch('fetchProducts')
      }
    },
  },

})
