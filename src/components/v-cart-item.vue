<template>
  <div class='v-cart-item'>
    <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image )" alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span>

      </span>
      {{cart_item_data.quantity}}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods:{
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  computed: {},
  mounted() {

  }
}
</script>

<style>
.v-cart-item{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 #aeaeae;
  padding: 16px;
  margin: 16px;
  align-items: center;
}
.v-cart-item__image{
  max-width: 70px;

}
</style>