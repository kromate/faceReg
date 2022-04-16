const faceapi = require('../helper/faceApi.min.js')

import { startVideo } from './useVideo'

export const loadModels = () => {
	const video = document.querySelector('#video')
	Promise.all([
		faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
		faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
		faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
		faceapi.nets.faceExpressionNet.loadFromUri('./models'),
		faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
	]).then(startVideo(video)).catch(
		(e) => console.log(e)
	)
}