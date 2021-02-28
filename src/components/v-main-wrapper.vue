<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name:"v-main-wrapper",
    components: {
    },
    props: {},
    data(){
      return {
        title: 'Main wrapper'
      }
    },
    computed: {
      ...mapGetters([
        'CART'
  ]),
    },
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