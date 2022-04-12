import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useAlert } from './useNotification';
const Webcam = require('../helper/webcam')

export const globalState = {
	registerState: ref(0),
	capturedFaces: ref([]),
	CapturedUserName: ref('')
}

export const savedUsers = useStorage('savedUsers', []).value as any

export const highestDetection = () => {
	let highestDetection = 0, pos = 0
	globalState.capturedFaces.value.map((face:any, index) => {
		if (face.detection > highestDetection) {
			highestDetection = face.detection
			pos = index
		}
	})
    
	return globalState.capturedFaces.value[pos]
}

export const saveCapturedUser = () => {
	
	const choosen = highestDetection() as any
	 savedUsers.push({
		name: globalState.CapturedUserName.value,
		detection: choosen.detection,
		img: choosen.img,
		 mood: choosen.mood,
		date:[]
	 })
	useAlert().openAlert(`User: ${globalState.CapturedUserName.value} has been saved`)
	Webcam.reset()

}

