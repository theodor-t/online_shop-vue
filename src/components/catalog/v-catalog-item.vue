<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image )" alt="img_prod">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} lei</p>
    <button type="button" class="v-catalog-item__add_to_cart_btn btn btn-primary"
            @click="addToCart">
      Add to cart
      <svg xmlns="http://www.w3.org/2000/svg"
           width="16"
           height="16"
           fill="currentColor"
           class="bi bi-cart4"
           viewBox="0 0 16 16">
        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart',this.product_data)
    }
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1 )
  }
}
</script>

<style>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #aeaeae;
  padding: 16px;
  margin: 16px;
}

.v-catalog-item__image {
  width: 130px;
}
.btn{
  padding: 8px 16px;
  cursor: pointer;
  background: #0c8804;
  color: white;
  border: 0;
  border-radius: 4px;
}
</style>