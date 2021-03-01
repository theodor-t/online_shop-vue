<template>
  <div class='v-cart-item'>
    <img class="v-cart-item__image" :src=" require('../../assets/images/' + cart_item_data.image )" alt="">
    <div class="v-cart-item__info">
      <p>{{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <p>{{cart_item_data.article}}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <button type="button" class="quantity__btn btn btn-secondary" @click="decrementItem">-</button>
      <span>
        {{cart_item_data.quantity}}
      </span>
      <button type="button" class="quantity__btn btn btn-success" @click="incrementItem">+</button>
    </div>
    <button @click="deleteFromCart" class="btn btn-outline-danger">
      Delete
      <svg xmlns="http://www.w3.org/2000/svg"
           width="16"
           height="16"
           fill="currentColor"
           class="bi
           bi-x-square-fill"
           viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
      </svg>
    </button>
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
    decrementItem(){
      this.$emit('decrement')
    },
    incrementItem(){
      this.$emit('increment')
    },
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
.quantity__btn{
  cursor: pointer;
}
</style>