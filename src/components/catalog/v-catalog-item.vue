<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image )" alt="img_prod">
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} lei</p>
    <button class="v-catalog-item__add_to_cart_btn btn"
            @click="addToCart">
      Add to cart
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