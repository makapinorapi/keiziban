import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    comments: []
  },
  getters: {
    getCount:(state) => {
      return state.comments.length
    },
    getAll:(state) => {
      return state.comments
    }
  },
  mutations: {
    //コメントを保存する
    save (state, newcomment) {
      newcomment.id = ++state.count
      state.comments.unshift(newcomment)
    },

  },
  actions: {
    async save() {
      const data = await fetch('http://localhost:8080 ')
      const json = await data.json()
      this.save = json
    }
  },
  modules: {
  }
})
