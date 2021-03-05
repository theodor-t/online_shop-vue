import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App.vue'
import store from './vuex/store'
import router from './components/src/router/router'
import 'material-design-icons-iconfont'

// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
}).$mount('#app')
