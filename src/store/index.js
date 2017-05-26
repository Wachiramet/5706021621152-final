require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexOptions = {
  state: {
    data: [[
      {
        subject: '',
        credit: 0,
        grade: ''
      }
    ]]
  },
  mutations: {
    addData (state) {
      state.data.push([
        {
          subject: '',
          credit: 0,
          grade: ''
        }
      ])
    },
    addDataTerm (state, index) {
      state.data[index].push(
        {
          subject: '',
          credit: 0,
          grade: ''
        }
      )
    }
  },
  actions: {
    addData ({commit}) {
      commit('addData')
    },
    addDataTerm ({commit}, index) {
      commit('addDataTerm', index)
    }
  },
  getters: {
    data: state => state.data
  }
}

export default new Vuex.Store(vuexOptions)
export {vuexOptions}
