<template>
  <h4 id="alert"></h4>
  <video id="video" width="720" height="560" autoplay muted></video>

  <div id="camera" style="height:auto;width:auto; text-align:center; display:none;"></div>
  <br>
  <p id="snapShot"></p>
</template>

<script setup>
import {  onMounted } from 'vue'
// import "../firebase/register"


onMounted(() => {
    let divScripts = document.querySelector('head');
    let newScript = document.createElement('script');
    newScript.src = "../firebase/register.js";
    divScripts.appendChild(newScript);
  })
</script>

<style>

</style>