import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from 'src/components/v-catalog.vue'
import vCart from 'src/components/v-cart'

Vue.use(Router)

let router = new Router({
    routes: [{
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
        {
            path: '/cart',
            name: 'cart',
            component: vCart
        }
    ]
})