// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'

//Middleware
Vue.use(vueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false

const  routes = [
    {path:'/', component: Customers},
    {path: '/about', component: About},
];

const router = new VueRouter ({
  mode: 'history',
  base: __dirname,
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
   <div id= "app">
   <nav class="navbar navbar-expand-sm navbar-dark bg-dark ">
        <a class="navbar-brand" href="#">mCustomers</a>
   <div class="container">
     <div class="navbar-header">
       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
         <span class="sr-only">Toggle navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </button>
     </div>
     <div id="navbar" class="collapse navbar-collapse">
       <ul class="nav navbar-nav">
         <li><router-link to="/">Home</router-link></li>
         <li><router-link to="/about">About</router-link></li>
       </ul>
     </div><!--/.nav-collapse -->
   </div>
 </nav>
      <router-view></router-view>
   </div>
   `
}).$mount(`#app`)
