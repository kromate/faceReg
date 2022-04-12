import { ref } from 'vue';


const alertState = {
	active: ref(false),
	message: ref(''),
};

export const loadingState = {
	active: ref(false),
	message: ref(''),
	cacheLoading: ref(true)
}

export const useAlert = () => {
	const openAlert = (msg: string) => {
		alertState.message.value = msg;
		alertState.active.value = true;
		setTimeout(closeAlert, 5000);
	};
	const closeAlert = () => {
		alertState.message.value = '';
		alertState.active.value = false;
	};

	return { ...alertState, openAlert, closeAlert };
};

export const closeCacheLoader = () => {
	document.querySelector<HTMLElement>('.cache-loader')!.style.display = 'none'
	loadingState.cacheLoading.value = false
}