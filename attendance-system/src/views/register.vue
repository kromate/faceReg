<template>
  <h4 id="alert"></h4>
  <video id="video" ref="video" width="720" height="560" autoplay muted></video>

  <div id="camera" ref="camera" style="height:auto;width:auto; text-align:center; display:none;"></div>
  <br>
  <p id="snapShot"></p>
</template>

<script setup>
import { onMounted } from 'vue'

import {mountWebcam} from '../composibles/useWebcam'


onMounted(mountWebcam)





</script>

<style>

</style>