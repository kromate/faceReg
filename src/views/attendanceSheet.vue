<template>
	<DefaultLayout>
		<div class="p-4 mt-12">
			<h1 class="text-2xl uppercase mb-12">database</h1>

			<div
				class="wrapper border-b-2 bg-white overflow-hidden mx-auto max-w-lg rounded shadow-lg"
				v-if="savedUsers.length"
			>
				<div class="question-wrap mx-8 mt-2">
					<details
						class="question py-4 border-b border-grey-lighter"
						v-for="people in savedUsers"
						:key="people"
					>
						<summary class="flex items-center font-">
							<img
								:src="people.img"
								alt="registered picture"
								class="w-12 h-12 rounded-full mr-4 object-cover"
							/>
							{{ people.name }}

							<button class="ml-auto">
								<svg
									class="fill-current opacity-75 w-4 h-4 -mr-1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
									/>
								</svg>
							</button>
						</summary>
						<div class="flex mt-2 font-bold">
							Stats:
							<span class="badge bg-blue-200 text-blue-700 mx-3">{{
								people.detection
							}}</span>
							<span class="badge bg-green-200 text-green-700 mx-3">{{
								people.mood
							}}</span>
						</div>
						<div v-if="people.date.length" class="mb-3">
							<span class="block w-full text-left mb-1 font-normal"
								>Days present
							</span>
							<div
								class="flex flex-wrap justify-center md:justify-start mt-2 gap-3"
							>
								<span
									class="badge bg-black text-white"
									v-for="n in people.date"
									:key="n"
									>{{ n }}</span
								>
							</div>
						</div>

						<div v-else class="mt-4">
							<h1 class="text-lg">
								This user hasn't taken any attendance. <br />
								Go to the
								<router-link to="/takeAttendance" class="text-indigo-600"
									>Attendance Page</router-link
								>
								to take one
							</h1>
						</div>
					</details>
				</div>
			</div>

			<div class="mx-auto max-w-lg" v-else>
				<h1 class="text-lg">
					You have no registered users go to the
					<router-link to="/register" class="text-indigo-600"
						>Register Page</router-link
					>
					to create one
				</h1>
			</div>
		</div>
	</DefaultLayout>
</template>

<script setup>
import { savedUsers } from '../composibles/useState';

console.log(savedUsers);
</script>

<style scoped>
@charset "UTF-8";
details {
	user-select: none;
}
details summary svg {
	transform: rotate(90deg);
}

details[open] summary svg {
	transform: rotate(-90deg);
}

details[open] summary ~ * {
	animation: ease-opacity-t-b 0.5s ease;
}

summary {
	cursor: pointer;
}

svg {
	transition: all 0.3s;
}

summary::-webkit-details-marker {
	display: none;
}
</style>
