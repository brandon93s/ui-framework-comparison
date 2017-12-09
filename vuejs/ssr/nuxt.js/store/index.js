import Vuex from 'vuex'

// Stored is used to assist with displaying the `rendered on` hint in the header
const createStore = () => {
  return new Vuex.Store({
    state: {
      isServer: true
    },
    getters: {
      renderedMessage: state => {
        return `This page was rendered on the <b>${state.isServer ? 'server' : 'client'}.</b>`
      }
    },
    mutations: {
      rendered (state, isServer) {
        state.isServer = isServer
      }
    }
  })
}

export default createStore
