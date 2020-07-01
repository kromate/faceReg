const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

// CAMERA SETTINGS.
Webcam.set({
  width: 350,
  height: 265,
  image_format: 'png',
  jpeg_quality: 100
});
Webcam.attach('#camera');

// SHOW THE SNAPSHOT.
takeSnapShot = function () {
  Webcam.snap(function (data_uri) {
    document.querySelector('body').innerHTML =
      `<h4 id="alert"></h4>
      <img onLoad='scanImg()' class='' id='img' style='margin: 1rem;' src= '${data_uri}' width="70%" height="70%" />`;
  });
}
var recog;
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
    if (resizedDetections.length > 0) {
      let img = document.querySelector('#img')
      takeSnapShot()
      if (!img) {
        console.log('snap')
        
        document.querySelector('#alert').style.color = 'green';
        document.querySelector('#alert').innerHTML = `Face Found Scaning`

        clearInterval(recog)
      } else {
        
        document.querySelector('#alert').style.color = 'red';
        document.querySelector('#alert').innerHTML = `Can't find a Face, Please Adjust`
      } 

    } else { console.log('adjust your face')}
  }, 1000)
});



// function success() {
//   document.querySelector('body').innerHTML = `
//     <div class="content">
//     <h1>Registration Completed</h1>
//     <h4>Navigating back to homePage</h4>
//   </div>
//   `
//   setTimeout(home, 5000)
// }
// function home() {
//   window.location.assign('./index.html')
// }

function scanImg(){
  console.log('snapped')
}
