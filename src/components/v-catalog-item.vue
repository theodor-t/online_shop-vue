<template>
  <div class='v-catalog-item'>
    <p>Item 1</p>
    <p>Price: 50</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {},
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