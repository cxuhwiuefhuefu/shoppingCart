import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

export default new vuex.Store({
  state:{
    goods:[
      {name:"笔记本",price:5.0},
      {name:"键盘",price:30.0},
      {name:"便利贴",price:2.0},
      {name:"柠檬茶",price:18.0},
      {name:"维他奶",price:16.5},
      {name:"矿泉水",price:3.5}
    ],
    list:[
      {name:"柠檬茶",price:18.0},
      {name:"维他奶",price:16.5},
      {name:"矿泉水",price:3.5}
    ]
  },
  mutations:{
    addGoods(state,index){
      state.list.push(state.goods[index]);
    },
    delGoods(state,index){
      state.list.splice(index,1);
    }
  }
});
