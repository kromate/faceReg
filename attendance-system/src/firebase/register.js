/* eslint-disable */

  
const faceapi = require('../helper/faceApi.min.js')

import { db, storageRef } from "../firebase/init";

import { b64toBlob } from "../composibles/useWebcam";
import { takeSnapShot } from "../composibles/useVideo";

const video = document.getElementById('video')
const person = {}


//Call the models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

//pass the camera stream to the video container
function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}



// SHOW THE SNAPSHOT.

var recog;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  var recog = setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    let count = document.getElementById('snapShot').childElementCount;
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


//called after the Images have been taken
function success() {
  // setTimeout(home, 5000)
  let image = document.querySelectorAll('img');
  image.forEach(pushImg)
  //push each src into an obj
  function pushImg(img, index){
    person[index] = img.src;
  }

  naming()
}

function naming(){
  document.querySelector('body').innerHTML = `
    <div class="content">
    <h2>Input Your Full Name Below and Click the Upload button to complete registration</h2>
    <input id='name' type='text'>
    <h5 id='status'></h5>
    <button id='upload'>Upload</button>
  </div>
  `

  upload()
}

function upload(){
  const ImageURL = person[0]
  console.log(person[0]);
  var block = ImageURL.split(";");
  var contentType = block[0].split(":")[1];
  var realData = block[1].split(",")[1];
  var blob = b64toBlob(realData, contentType, 512);

  document.querySelector('#upload').addEventListener('click', function(){
    const name = document.querySelector('#name').value
    person.name = name
   

    db.collection("students").doc(name).set({ name: name, date:[] }).then(function () {
      storageRef.child('Students/' + name).put(blob).on('state_changed', function (snapshot) {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');
        document.getElementById("status").innerHTML = Math.floor(progress) + '%';
      })
    })
      .then(function () {
        document.querySelector('body').innerHTML = `
    <div class="content">
    <h1>Registration Complete</h2>
    <h4>Redirecting to Homepage...</h4>
  </div>
  `
  setTimeout(home, 3000)
      })
      .catch(function (error) {
        console.log(error)
        document.querySelector('body').innerHTML = `
    <div class="content">
    <h1 style='color:red'>An error has occurred; please restart the process</h1>
  </div>
  `
      });
  })
}
function home() {
  window.location.assign('./index.html')
}



