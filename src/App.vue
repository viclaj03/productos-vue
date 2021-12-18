<template>
<app-nav></app-nav>
<error-message v-for="(message, key) in messages" :key="key" :message="message" ></error-message>
<products-table></products-table>
<form-product></form-product>
</template>

<script>
import {store} from './service/store'
import AppNav from './components/AppNav.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import FormProduct from './components/FormProduct.vue'
import ProductsTable from './components/ProductsTable.vue'


export default {
  name: 'App',
  components: {
    AppNav,
    ProductsTable,
    FormProduct,
    ErrorMessage,
    
  },
  data(){
    return{
      messages: store.state.messages
    }
  }
}
</script>


<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
