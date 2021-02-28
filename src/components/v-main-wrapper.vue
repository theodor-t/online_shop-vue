<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
    <v-catalog/>
    <v-cart/>
    <v-catalog-item></v-catalog-item>
  </div>

</template>

<script>
  import vCatalog from './v-catalog'
  import vCart from './v-cart'

  export default {
    name:"v-main-wrapper",
    components: {
      vCatalog,
      vCart
    },
    props: {},
    data(){
      return {
        title: 'Main wrapper'
      }
    },
    computed:{},
    methods: {},
    watch: {},
    mounted() {
      console.log('Darova')
    }
  }
</script>

<style>
.v-main-wrapper{
  max-width: 900px;
  margin: 0 auto;
}
</style>