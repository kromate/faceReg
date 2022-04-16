// import { Webcam } from '../helper/webcam'
const Webcam = require('../helper/webcam')
import { globalState } from './useState';
const faceapi = require('../helper/faceApi.min.js')


const getMode = (objMood) => {
	let highestMood = ''
	let highest = 0
	Object.keys(objMood).map((mood) => {
		if (objMood[mood] > highest) {
			highest = objMood[mood]
			highestMood = mood
		} 
	})

	return highestMood
}
export const saveFace = (faceData)=> {
	Webcam.snap(function (data_uri) {
		if (faceData.detection.score.toFixed(2) > 0.7) {
			globalState.capturedFaces.value.push(
				{
					detection: faceData.detection.score.toFixed(2),
					img: data_uri,
					mood: getMode(faceData.expressions)
				}
			)
		}
	});

	console.log(globalState.capturedFaces.value)
}


export function startVideo(video) {
  
	navigator.getUserMedia(
		{ video: {} },
		(stream) => video.srcObject = stream,
		(err) => console.error(err)
	)
}

export const ScanFace = () => {
	const video = document.querySelector('#video')
	let recog
	video.addEventListener('play', () => {
		const canvas = faceapi.createCanvasFromMedia(video)
		
		document.body.append(canvas)
		const displaySize = { width: video.width, height: video.height }
		faceapi.matchDimensions(canvas, displaySize)
		recog = setInterval(async () => {
			const count = globalState.capturedFaces.value.length
			try {
				const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
				const resizedDetections = faceapi.resizeResults(detections, displaySize)
				canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
				faceapi.draw.drawDetections(canvas, resizedDetections)
				faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
				if (resizedDetections) {
					if(count < 3)saveFace(resizedDetections)
					document.querySelector('#alert').style.color = 'green';
					document.querySelector('#alert').innerHTML = `Face found, Captured ${count} out of 3`
					if (count >= 3) {
						await clearInterval(recog)
						canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
						globalState.registerState.value++
					}
				} 
			} catch {
				if (count < 3) {
					document.querySelector('#alert').style.color= 'red';
					document.querySelector('#alert').innerHTML = `Can't find a Face, Please Adjust <br>  Captured ${count} out of 3`
				}
				
			}
			
	
		}, 1000)
	});   
}