const state = {
  trigger: false
}

const getters = {
  getTrigger (state) {
    return state.trigger
  }
}

const actions = {
  setTrigger ({ commit }, payload) {
    console.log('setTrigger', payload)
    commit('SET_TRIGGER', payload)
  }
}

const mutations = {
  SET_TRIGGER (state, payload) {
    switch (payload) {
      case true:
        console.log(payload)
        state.trigger = payload
        break
      case false:
        console.log(payload)
        state.trigger = payload
        break
      default:
        return state
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
