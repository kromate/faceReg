const faceapi = require('../helper/faceApi.min.js')

import { startVideo } from "./useVideo"

export const loadModels = (videoRef) => {
    console.log(videoRef)
    Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(startVideo(videoRef)).catch(
    e => console.log(e)
)
}