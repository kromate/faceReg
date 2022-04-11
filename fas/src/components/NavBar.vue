<template>
	<nav class="relative z-30 h-24 select-none">
		<div
			class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 md:overflow-visible"
		>
			<div class="flex items-center justify-start w-1/4 h-full pr-4">
				<router-link to="/" class="py-4 md:py-0 flex items-center">
					<span class="p-1 text-2xl font-black leading-none text-gray-900"
					><span>FAS</span></span
					>
				</router-link>
			</div>


		</div>
	</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showMenu = ref(false);
</script>

<style scoped>
.slideUp-enter-from,
.slideUp-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 0.75s ease;
}
</style>
