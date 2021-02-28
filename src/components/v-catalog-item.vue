<template>
  <div className='v-catalog-item'>
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

</style>