import Vue from 'vue'
import VueRouter from 'vue-router'
import Pokemons from './components/Pokemons.vue'
import Home from './components/Home.vue'
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/pokemons",
      component: Pokemons
    },
    {
      path:"/home",
      component: Home
    }
  ],
  mode: "history"
});
