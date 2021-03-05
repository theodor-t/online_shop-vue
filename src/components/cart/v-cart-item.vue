<template>
  <div class='v-cart-item'>
    <div class="v-cart-item-sec1">
      <img class="v-cart-item__image" :src=" require('../../assets/images/' + cart_item_data.image )" alt="">

      <div class="v-cart-item__info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}} lei</p>
        <p>{{cart_item_data.weight}}</p>
      </div>
    </div>

    <div class="v-cart-item-sec2">
      <div class="v-cart-item__quantity">
        <p>Qty:</p>
        <i class="material-icons quantity__btn btn btn-secondary" @click="decrementItem">remove</i>
        <input v-model="cart_item_data.quantity">
        <i class="material-icons quantity__btn btn btn-success" @click="incrementItem">add</i>
      </div>

      <i
          @click="deleteFromCart"
          class="material-icons
           btn
           btn-outline-danger
      ">
        delete
      </i>
    </div>
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
  margin: 16px auto;

  width: 900px;
  justify-content: space-between;
  box-shadow: 0 0 8px 0 #aeaeae;
  padding: 16px;
  align-items: center;
}

.v-cart-item-sec1 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}

.v-cart-item-sec2 {
  display: flex;
  width: 50%;
  justify-content: space-around;
}

.v-cart-item__quantity {
  display: flex;
  align-items: center;
}

.v-cart-item__quantity p {
  font-size: 20px;
  margin: 0 10px;
  align-self: center;
}

.v-cart-item__quantity input {
  width: 38px;
  height: 38px;
  margin: 0 5px;
  border-radius: 5px;
  text-align: center;
}


.v-cart-item__image{
  max-width: 70px;

}
.quantity__btn{
  cursor: pointer;
}
</style>
