<template>
  <div class="v-main-wrapper">
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name:"v-main-wrapper",
    components: {},
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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>