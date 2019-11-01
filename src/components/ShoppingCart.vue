<template lang="html">
  <div>
    <table id="shopping-list">
      <thead>
        <tr>
          <th colspan="1">Cart</th>
        </tr>
        <tr>
          <th>Name</th><th>Quantity</th><th>Price</th><th>Sub-total</th><th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list">
          <td>{{item.name}}</td><td>{{item.qty}}</td><td>{{item.price}}</td><td>{{item.price * item.qty}}</td>
          <td @click="delGoods(index)" class="del-goods">删除</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td><td>{{totalPrice}}(USD{{counts}})</td>
        </tr>
      </tfoot>
    </table>
    <div class="goods-list">
      <h3>商品列表</h3>
      <ul>
        <li v-for="(item,index) in goods">{{item.name}}  {{item.price}} <a @click="addGoods(index)">加入购物车</a> </li>
      </ul>
    </div>
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
      goods:[
        {name:"Chicken Wing",price:10},
        {name:"Pizza",price:50},
        {name:"Hamburger",price:12},
        {name:"Coca Cola",price:5},
        {name:"Orange Juice",price:15},
        {name:"Potato Chips",price:8 }
      ]
    }
  },
  computed:{
    totalPrice(){
      var num = 0;
      for (var i = 0; i < this.list.length; i++) {
        num += this.list[i].price;
      }
      return num.toFixed(1);
    },
    counts(){
      return this.list.length;
    }
  },
  methods:{
    delGoods(index){
      this.list.splice(index,1);
    },
    addGoods(index){
      this.list.push(this.goods[index]);
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
