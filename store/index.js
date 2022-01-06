export const getters = {
  authenticated(state) {
    state.auth.loggedIn
  },

  user(state) {
    return state.auth.user
  }
}
