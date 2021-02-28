<template>
  <div class='v-cart'>
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link__to_cart">
        Back to Catalog
      </div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">Cart is empty...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'
export default {
  name: "v-cart",
  components:{
    vCartItem
  },
  methods:{
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    console.log('carttest')
  }
}
</script>

<style>

</style>