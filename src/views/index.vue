<template>
	<DefaultLayout>
		<section class="w-full px-4 antialiased items-center min-h-screen flex bg">
			<div class="mx-auto container mt-12 md:mt-0">
				<section class="px-2 py-4 md:px-0">
					<div class="container items-center px-8 mx-auto xl:px-5">
						<div
							class="flex items-center justify-between sm:-mx-3 flex-col-reverse md:flex-row gap-12"
						>
							<div class="w-full md:w-1/2 md:px-3">
								<div
									class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
								>
									<h1
										class="text-4xl text-center sm:text-left font-extrabold sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl outline tracking-wide"
									>
										<span class="block xl:inline">
											<b class="font-bold text-slate-400">F</b>ace <br />
											<b class="font-bold text-slate-400">A</b>ttendance <br />
											<b class="font-bold text-slate-400">S</b>ystem</span
										>
									</h1>
									<p
										class="mx-auto text-base text-left text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl font-bold"
									>
										An Attendance system that works by using using facial
										recognition
									</p>
									<div
										class="relative flex flex-col sm:flex-row gap-4 flex-wrap font-extralight"
									>
										<router-link
											to="/About"
											class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
										>
											About FAS
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
											to="/register"
											target="_blank"
											class="flex items-center w-full px-6 py-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
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
											to="/takeAttendance"
											target="_blank"
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
											to="/attendanceSheet"
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
									class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl flex flex-col justify-center items-center"
								>
									<face class="mx-auto" />
								</div>
								<div
									class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-2xl flex flex-col justify-center items-center mt-5"
								>
									<div class="flex gap-4 text-3xl mt-5">
										<a
											href="https://github.com/kromate/faceReg"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i class="lab la-github"></i>
										</a>
										<a
											href="https://twitter.com/kromate_24"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i class="lab la-twitter"></i>
										</a>
										<a
											href="https://www.youtube.com/channel/UChUl2w6Nl_ckCYSPaTUBYRQ"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i class="lab la-youtube"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	</DefaultLayout>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import Face from '../components/Face.vue';
import DefaultLayout from '../layout/defaultLayout.vue';
</script>

<style>
.outline {
	line-height: 1.2;
	text-decoration: none;
	color: transparent;
	-webkit-text-stroke: 1.5px #301ea5;
}
</style>

// background: linear-gradient(to right, #F27121, #E94057, #8A2387);
