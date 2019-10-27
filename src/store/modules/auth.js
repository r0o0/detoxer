const state = {
  user: null,
  requestSignout: false
}

const getters = {
  getUser (state) {
    console.log('getUser state', state)
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
    console.log('setUser', payload)
    commit('SET_USER', payload)
  },
  requestUserSignout ({ commit }, payload) {
    console.log('request user signout', payload)
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
