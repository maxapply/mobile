import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user') || '{}')
  },
  mutations: {
    updataUser: function (state, data) {
      state.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    clearUser: function (state) {
      state.user = {}
      localStorage.removeItem('user')
    }
  },
  actions: {},
  modules: {}
})
