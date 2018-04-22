/**
 * Created by DQ on 2018-4-21.
 */
export default {
  state: {
    islogin: false,
    userId: ''
  },
  mutations:{
    changelogin(state) {
      if (localStorage.getItem('userId')) {
        state.islogin = true
        state.userId = localStorage.getItem('userId')
      } else {
        state.islogin = false
      }
    }
  },
  actions:{
    switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('changelogin');
      //你还可以在这里触发其他的mutations方法
    },
  }
}
