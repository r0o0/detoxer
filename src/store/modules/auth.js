const state = {
  user: null
}

const getters = {
  getUser (state) {
    return state.user
  }
}

const mutations = {
  SET_USER (state, payload) {
    console.log(payload)
    switch (payload.role) {
      case 'guest':
        console.log(payload)
        state.user = payload
        break
      case 'user':
        console.log(payload)
        state.user = payload
        break
      default:
        return state
    }
  }
}

const actions = {
  setUser ({ commit }, payload) {
    console.log('setUser', payload)
    commit('SET_USER', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
