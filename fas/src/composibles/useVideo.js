// import { Webcam } from '../helper/webcam'
const Webcam = require('../helper/webcam')
import { success } from './useWebcam';
const faceapi = require('../helper/faceApi.min.js')

export const takeSnapShot = function () {
	Webcam.snap(function (data_uri) {
		document.getElementById('snapShot').innerHTML +=
      `<img onClick='scanImg()' class='' style='margin: 1rem; display:none' src= '${data_uri}' width="200px" height="200px" />`;
	});
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
    
		console.log('working ooo')
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
			const count = document.getElementById('snapShot').childElementCount;
			if (resizedDetections.length == 1) {
				console.log('snap')
				takeSnapShot()
				console.log(count)
				document.querySelector('#alert').style.color = 'green';
				document.querySelector('#alert').innerHTML = `Face found, Captured ${count} out of 3`
				if (count == 1) {
					console.log('done')
					clearInterval(recog)
					success()
				}

			} else {
				console.log('adjust your face');
				document.querySelector('#alert').style.color= 'red';
				document.querySelector('#alert').innerHTML = `Can't find a Face, Please Adjust <br>  Captured ${count} out of 3`
				console.log(document.getElementById('snapShot').childElementCount);

      
			}
		}, 1000)
	});   
}