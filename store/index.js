export const state = () => ({
  authUser: null
})

export const mutations = {
  setUser(state, authUser) {
    state.authUser = authUser
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session) {
      if (req.session.passport && req.session.passport.user) {
        commit('setUser', req.session.passport.user)
      }
    }
  }
}
