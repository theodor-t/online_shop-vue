<template>
  <div class='v-catalog'>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in products"
          :key="product.article"
          :product_data="product"
          @sendDataToParent="showChildArticleInConsole"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {

      products: [
      {
        image: "1.jpg",
        name: "T-shirt 1",
        price: 2100.234234234,
        article: "T1",
        available: true,
        category: "Мужские"
      },
        {
          image: "2.jpg",
          name: "T-shirt 2",
          price: 2100.234234234,
          article: "T2",
          available: true,
          category: "Мужские"
        },
        {
          image: "3.jpg",
          name: "T-shirt 3",
          price: 2100.234234234,
          article: "T3",
          available: true,
          category: "Мужские"
        }

    ]
    }
  },
  computed: {},
  methods:{
    showChildArticleInConsole(data) {
      console.log(data)
    }
  },
  mounted() {
    console.log('test')
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

</style>