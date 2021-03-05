<template>
  <div class='v-catalog-item'>

    <v-popup
    v-if="isInfoPopupVisible"
    rightButtonTitle = "Add to cart"
    :popupTitle = " product_data.name"
    @closePopup="closeInfoPopup"
    @rightButtonAction="addToCart"
    >
    <div>
      <img class="v-catalog-item__image__popup" :src=" require('../../assets/images/' + product_data.image ) "  alt="img_prod">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Weight: {{ product_data.weight }}</li>
        <li class="list-group-item">Description: {{ product_data.description }}</li>
        <li class="list-group-item">Category: {{ product_data.category }}</li>
        <li class="list-group-item">Price: {{ product_data.price }} lei</li>
      </ul>
    </div>
    </v-popup>

    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image )" @click="showPopupInfo" alt="img_prod">
    <p class="v-catalog-item__name font-weight-bold">{{ product_data.name }}</p>
    <p class="v-catalog-item__weight font-weight-bold">Weight: {{ product_data.weight }}</p>
    <p class="v-catalog-item__price font-weight-bold">Price: {{ product_data.price }} lei</p>
<!--    <button
        class="v-catalog-item__show-info"
        @click="showPopupInfo"

    >
      Show info
    </button>-->
    <button type="button" class="
            v-catalog-item__add_to_cart_btn
            btn
            btn-outline-primary
            rounded-pill"
            @click="addToCart"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'
export default {
  name: "v-catalog-item",
  components:{
    vPopup
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isInfoPopupVisible :false
    }
  },
  computed: {},
  methods: {
    addToCart() {
      this.$emit('addToCart',this.product_data)
    },
    showPopupInfo(){
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false;
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
  width: 200px;
  cursor: pointer;
}
.v-catalog-item__image__popup{
  width: 200px;
}

.v-catalog-item__weight{
  color: #919191;
}


</style>
