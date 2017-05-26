import Vue from 'vue'
import Vuex from 'vuex'
import inputGrade from '@/components/inputGrade'
import { options } from '../../store'
require('es6-promise').polyfill()

describe('inputGrade.vue', () => {
  it('should render correct contents', () => {
    const mockStore = new Vuex(options)
    const vm = new Vue({})
  })
})
