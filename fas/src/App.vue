<script setup >
import Loader from './components/Loader.vue'
import {loadingPage} from '@/composibles/useState'
</script>


<template>
<loader v-if="loadingPage"/>
  <router-view v-else></router-view>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
