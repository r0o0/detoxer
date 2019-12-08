const state = {
  user: null,
  requestSignout: false
}

const getters = {
  getUser (state) {
    return state.user
  },
  getRequestSignout (state) {
    return state.requestSignout
  }
}

const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  REQUEST_USER_SIGNOUT (state, payload) {
    if (payload) state.requestSignout = payload
    return state.requestSignout
  }
}

const actions = {
  setUser ({ commit }, payload) {
    commit('SET_USER', payload)
  },
  requestUserSignout ({ commit }, payload) {
    commit('REQUEST_USER_SIGNOUT', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
