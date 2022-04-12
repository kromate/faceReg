<template>
	<transition appear name="slide">
		<div
			v-if="active"
			class="overflow-hidden max-w-[70%] rounded-md shadow-xl fixed top-8 left-4 p-4 bg-[aliceblue] z-[150] text w-[22rem]"
		>
		
			<svg
				@click="closeAlert"
				class="w-6 h-6 text-gray-700 absolute right-1 top-1 cursor-pointer text-xl ml-auto"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				></path>
			</svg>

			<p>{{ message }}</p>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import { useAlert } from '../composibles/useNotification';

const { active, message, closeAlert } = useAlert();
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-30rem);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
</style>
