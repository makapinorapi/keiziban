import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    koments: []
  },
  getters: {
    getCount:(state) => {
      return state.koments.length
    },
    getAll:(state) => {
      return state.koments
    }
  },
  mutations: {
    //コメントを保存する
    save (state, newkoment) {
      newkoment.id = ++state.count
      state.koments.unshift(newkoment)
    }
  },
  actions: {
  },
  modules: {
  }
})
