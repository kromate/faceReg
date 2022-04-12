// import { Webcam } from '../helper/webcam'
const Webcam = require('../helper/webcam')
import { globalState } from './useState';
import { success } from './useWebcam';
const faceapi = require('../helper/faceApi.min.js')


export const saveFace = function (faceData) {
	console.log(faceData);
	Webcam.snap(function (data_uri) {
		globalState.capturedFaces.value.push(
			{
				img: data_uri,
			}
		)
	});

	// console.log(globalState.capturedFaces.value)
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
			const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
			const resizedDetections = faceapi.resizeResults(detections, displaySize)
			canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
			faceapi.draw.drawDetections(canvas, resizedDetections)
			faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
			faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
			const count = globalState.capturedFaces.value.length
			if (resizedDetections.length == 1) {
				saveFace(resizedDetections)
				document.querySelector('#alert').style.color = 'green';
				document.querySelector('#alert').innerHTML = `Face found, Captured ${count} out of 3`
				if (count >= 3) {
					clearInterval(recog)
					success()
				}

			} else {
				document.querySelector('#alert').style.color= 'red';
				document.querySelector('#alert').innerHTML = `Can't find a Face, Please Adjust <br>  Captured ${count} out of 3`

			}
		}, 1000)
	});   
}