<template>
	<DefaultLayout>
		<div>
			<h4 id="alert" class="shadow-2xl w-auto mx-auto outline"></h4>
			<div class="web-cam flex justify-center items-center">
				<h2 class="mt-20 text-3xl absolute mx-auto">Loading...</h2>
				<video
					id="video"
					ref="video"
					width="500"
					height="500"
					autoplay
					muted
					class="z-50"
				></video>
			</div>
			<div
				id="camera"
				ref="camera"
				class="h-auto w-auto text-center hidden"
			></div>
			<br />
			<p id="snapShot"></p>
		</div>
	</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layout/defaultLayout.vue';
import { onMounted, onUpdated } from 'vue';
import { mountWebcam } from '../composibles/useWebcam';
import { loadModels } from '../composibles/useFaceapi';
import { SnapFace } from '../composibles/useAttendance';
import { globalState } from '../composibles/useState';

onMounted(() => {
	globalState.registerState.value = 0;
});
onMounted(mountWebcam);
onMounted(loadModels);
onMounted(SnapFace);
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
