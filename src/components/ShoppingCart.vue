<template lang="html">
  <div>
    <h1>Cart</h1>
    <table id="shopping-list">
      <thead>
        <tr>
          <th>Name</th><th>Quantity</th><th>(Standard)Price(USD)</th><th>Sub-total(USD)</th><th colspan="3">操作</th>
        </tr>
      </thead>  
      <tbody>
        <tr v-for="(item,index) in list" align="right">
          <td align="left">{{item.name}}</td><td align="center">{{item.qty}}</td><td>{{item.price}}</td><td>{{item.price * item.qty}}</td>
          <td @click="addGoods(item, index)" class="del-goods">添加</td>
          <td @click="reduceGoods(item, index)" class="del-goods">减少</td>
          <td @click="delGoods(item, index)" class="del-goods">删除</td>
        </tr>
      </tbody>
      <tfoot>
        <tr align="right">
          <td colspan="3">Total</td><td>{{totalPrice}}(USD)</td>
        </tr>
      </tfoot>
    </table>
    
  </div>
</template>

<script>
export default {
  name:"ShoppingCart",
  data(){
    return{
      list: [
        { id: 1, name: "Chicken Wing", category: "Food", qty: 3, price: 10 },
        { id: 2, name: "Pizza", category: "Food", qty: 1, price: 50 },
        { id: 3, name: "Hamburger", category: "Food", qty: 1, price: 12 },
        { id: 4, name: "Coca Cola", category: "Drink", qty: 2, price: 5 },
        { id: 5, name: "Orange Juice", category: "Drink", qty: 1, price: 15 },
        { id: 6, name: "Potato Chips", category: "Snack", qty: 1, price: 8 },
      ],
    }
  },
  computed:{
    totalPrice(){
      var num = 0;
      for (var i = 0; i < this.list.length; i++) {
        num += this.list[i].price * this.list[i].qty;
      }
      return num.toFixed(1);
    },
  },
  methods:{
    // 減少商品
    reduceGoods(item, index){
      var newItem = item;
      if(newItem.qty === 0) {
        return;
      }
      newItem.qty -= 1;
      this.list.splice(index, 1, newItem); 
    },
    // 添加商品
    addGoods(item, index){
      var newItem = item;
      newItem.qty += 1;
      this.list.splice(index, 1, newItem); 
    },
    // 删除商品
    delGoods(item, index) {
      this.list.splice(index, 1);
    }
  }
}
</script>

<style lang="css">
 .del-goods,a{
   cursor: pointer;
 }
 ul{
   list-style-type: none;
 }

  table{
 border-collapse: collapse; 
/*表格的边框合并为一个单一的边框*/
}
table, table tr th,  table tr td { 
border:1px solid #ccc; 
}
</style>
