<template>
<div class="popup_wrapper" ref="popup_wrapper">
  <div class="v-popup">
    <div class="v-popup__header">
      <span>{{popupTitle}}</span>
      <span>
      <i
          class="material-icons close_btn"
          @click="closePopup"
      >
        close
      </i>
    </span>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button class="btn
            btn-outline-danger
            rounded-pill"
            @click="closePopup"
      >
        Close
      </button>
      <button
          class="btn
            btn-outline-primary
            rounded-pill"
          @click="rightButtonAction"
      >
        {{ rightButtonTitle }}
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "v-popup",
  props:{
  popupTitle:{
    type:String,
    default: 'Popup name'
  },
  rightButtonTitle:{
    type: String,
    default: 'Ok'
  }
  },
  methods: {
    closePopup(){
      this.$emit('closePopup')
    },
    rightButtonAction(){
      this.$emit('rightButtonAction')
    }
  },
  mounted() {
  let vm = this;
    document.addEventListener('click', function (item){
      if (item.target === vm.$refs['popup_wrapper']){
        vm.closePopup()
      }
    })
  }
}
</script>

<style>
.popup_wrapper{
  display: flex;
  background: rgba(64,64,64, .4);
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top:0;
  bottom: 0;
}
.v-popup{
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}
.v-popup__header, .v-popup__footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup__content{
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit_btn{
  padding: 8px;
  color: #ffffff;
  background-color: #0c8804;
}
.close_modal{
  padding: 8px;
  color: #ffffff;
  background-color: red;
}
.close_btn{
  cursor: pointer;
}
</style>