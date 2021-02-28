<template>
  <div class='v-catalog-item'>
    <p class="v-catalog-item__name">{{}}</p>
    <p class="v-catalog-item__price">Price: 50</p>
    <button class="v-catalog-item__add_to_cart_btn">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {
    console.log('catalogitem')
  }
}
</script>

<style>
  .v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin: 16px;
}

</style>