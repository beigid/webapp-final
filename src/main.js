
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use( VueRouter );

const About = { template: '<div>fooddddddd</div>' }
const Contact = { template: '<div>bar</div>' }

const routes = [
  { path: '/About', component: About },
  { path: '/Contact', component: Contact }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

