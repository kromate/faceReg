<template>
	<h4 id="alert"></h4>
	<video id="video" ref="video" width="500" height="500" autoplay muted class=""></video>

	<div id="camera" ref="camera" class="h-auto w-auto text-center hidden"></div>
	<br>
	<p id="snapShot"></p>
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

