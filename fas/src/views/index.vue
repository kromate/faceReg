<template>
	<DefaultLayout>
		<section class="w-full px-6 pb-12 antialiased  bg">
			<div class="mx-auto container">
				<NavBar />
				<section class="px-2 py-32 md:px-0">
					<div class="container items-center px-8 mx-auto xl:px-5">
						<div class="flex flex-wrap items-center justify-between sm:-mx-3">
							<div class="w-full md:w-1/2 md:px-3">
								<div
									class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
								>
									<h1
										class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
									>
										<span class="block xl:inline">Beautiful Pages to</span>
										<span class="block text-indigo-600 xl:inline"
										> Tell Your Story!</span
										>
									</h1>
									<p
										class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"
									>
										It's never been easier to build beautiful websites that convey
										your message and tell your story.
									</p>
									<div class="relative flex flex-col sm:flex-row sm:space-4 flex-wrap">
										<router-link
											to="#_"
											class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
										>
											Register
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="w-5 h-5 ml-1"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<line x1="5" y1="12" x2="19" y2="12"></line>
												<polyline points="12 5 19 12 12 19"></polyline>
											</svg>
										</router-link>
										<router-link
											to="#_"
											class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
										>
											Take Attendance
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="w-5 h-5 ml-1"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<line x1="5" y1="12" x2="19" y2="12"></line>
												<polyline points="12 5 19 12 12 19"></polyline>
											</svg>
										</router-link>
										<router-link
											to="#_"
											class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
										>
											Attendance sheet
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="w-5 h-5 ml-1"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											>
												<line x1="5" y1="12" x2="19" y2="12"></line>
												<polyline points="12 5 19 12 12 19"></polyline>
											</svg>
										</router-link>
									
									</div>
								</div>
							</div>
							<div class="w-full md:w-1/2">
								<div
									class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
								>
									<img
										src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	</DefaultLayout>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';

</script>

<style scoped>
.bg {
  background-blend-mode: lighten;
}

.gradient {
  text-align: center;
  color: #4f46e5;
  background-image: -webkit-linear-gradient(92deg, #3426f3, #feab3a);
  background-clip: text;
  text-fill-color: transparent;
  animation: hue 10s infinite linear;
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>

// background: linear-gradient(to right, #F27121, #E94057, #8A2387);
