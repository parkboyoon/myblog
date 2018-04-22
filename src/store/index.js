/**
 * Created by DQ on 2018-4-21.
 */
import Vue from 'vue'
import vuex from 'vuex'

import loginstate from './modules/loginState'

Vue.use(vuex)

export default new vuex.Store({
  state: {
  },
  modules: {
    login: loginstate
  }
})
