<template>
	<form class="grid place-items-center place-content-center mt-24 w-full" 	@submit.prevent="save">
		<img :src="face.img" alt="userFace"  class="rounded-full w-72 h-72 border border-indigo-600 object-cover">
		<div class="border border-indigo-600 w-full p-5 max-w-[40rem] h-auto overflow-hidden md:text-lg rounded-md shadow-xl  flex flex-col justify-center items-center mt-5">
			Name: <input type="text" v-model="globalState.CapturedUserName.value" placeholder="Input your name" class="p-2 py-1 border-2 border-indigo-600 rounded bg-transparent z-50" required>
		</div>
		<div class="border border-indigo-600 w-full p-5 max-w-[40rem] h-auto overflow-hidden md:text-lg rounded-md shadow-xl  flex flex-col justify-center items-center mt-5">
			Face Certainty : {{face.detection}}
		</div>
		<div class="border border-indigo-600 w-full p-5 max-w-[40rem] h-auto overflow-hidden md:text-lg rounded-md shadow-xl  flex flex-col justify-center items-center mt-5">
			User's Mood : {{face.mood}}
		</div>
		<button
			type="submit"
		
			class="text-center w-full px-6 py-3 mt-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 "
		>
			Register
		</button>
	</form>
</template>

<script setup>
import { highestDetection, globalState, saveCapturedUser } from '../composibles/useState';
import { useRouter } from 'vue-router';

const router = useRouter()
const face = highestDetection()
const save = async()=>{
	await saveCapturedUser()
	router.push('/')
}
</script>

<style>

</style>