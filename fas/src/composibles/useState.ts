import { ref } from 'vue';

export const globalState = {
	registerState: ref(0),
	capturedFaces: ref([])
}

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