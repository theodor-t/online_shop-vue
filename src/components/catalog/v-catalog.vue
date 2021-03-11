<template>
  <div class='v-catalog'>
    <header>
      <nav class="navbar  navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </nav>
    </header>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link__to_cart btn btn-outline-danger">
        <i class="material-icons icon-size">shopping_cart</i>Cart: {{ CART.length }}

      </div>
    </router-link>
    <div class="v-catalog__content">

      <h1>Catalog</h1>
      <v-select
          :options="categories"
          @select="sortByCategories"
          :selected="selected"

      />

      <p class="selected_category btn btn-warning ">{{selected}}</p>
      <div class="v-catalog__list ">
        <v-catalog-item
            v-for="product in filteredProducts"
            :key="product.id"
            :product_data="product"
            @addToCart="addToCart"
        />
      </div>
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
        {name: 'All', value: 'ALL'},
        {name: 'Rolls', value: 'r'},
        {name: 'Sets', value: 's'},
      ],
      selected: 'All',
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
.btn-rounded {
  border-radius: 19px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
}
.v-catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.v-catalog__link__to_cart{
  position:fixed;
  bottom:5px;
  right:5px;
  margin:0;
  padding:5px 3px;
}
.selected_category{
  font-size: 25px;
}
.v-catalog__content{
  max-width: 1000px;
  margin: 0 auto;
}
.v-catalog{
  margin-top: -60px;
}


</style>
