import { ref } from 'vue';



const loadingState = {
	active: ref(false),
	message: ref('')
}

export const useLoading = () => {
	const openLoading = (msg:string) => {
		loadingState.message.value = msg
		loadingState.active.value = true
	}
	const closeLoading = () => {
		loadingState.message.value = ''
		loadingState.active.value = false
	}
	return {...loadingState, openLoading, closeLoading}
}

export const closeCacheLoader = () => {
	 document.querySelector<HTMLElement>('.cache-loader')!.style.display = 'none'
}