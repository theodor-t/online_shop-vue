<template>
  <div class='v-catalog'>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link__to_cart">
        Cart: {{ CART.length }}
      </div>
    </router-link>
    <h1>Catalog</h1>
    <v-select
        :options="categories"
        @select="sortByCategories"
        :selected="selected"

    />
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'
import vSelect from '../../components/v-select'
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect
  },
  props: {},
  data() {
    return {
      categories: [
        {name: 'Все', value: 'ALL'},
        {name: 'Мужские', value: 'м'},
        {name: 'Женские', value: 'ж'},
      ],
      selected: 'Все',
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
      messages: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'IS_MOBILE',
      'IS_DESKTOP'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (e) {
          vm.selected = category.name;
          return e.category === category.name
        })
      }
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if(response.data){
            console.log('Data arrived!')
          }
        })
  }
}
</script>

<style>
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.v-catalog__link__to_cart{
  position: absolute;
  top:10px;
  right: 10px;
  padding: 16px;
  border: solid 1px #aeaeae;
}
.btn{
}
</style>