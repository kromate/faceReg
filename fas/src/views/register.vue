<template>
	<div>
		<h4 id="alert"></h4>

	
		<div class="web-cam">
			<video id="video" ref="video" width="500" height="500" autoplay muted class=""></video>
		</div>
		<div id="camera" ref="camera" class="h-auto w-auto text-center hidden"></div>
		<br>
		<p id="snapShot"></p>

	</div>
</template>

<script setup>
import {  onMounted } from 'vue'

import {mountWebcam} from '../composibles/useWebcam'
import {loadModels} from '../composibles/useFaceapi'
import {ScanFace} from '../composibles/useVideo'

onMounted(mountWebcam)
onMounted(loadModels)
onMounted(ScanFace)

</script>

<style scoped>
/* .web-cam { 
	margin-inline: auto;
  width: 450px;
  height: 450px;
  border-radius: 999999px;
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
} */
</style>