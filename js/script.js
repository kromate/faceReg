const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
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
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
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

    } else { console.log('adjust your face') }
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

async function scanImg() {

  let image = document.querySelector('#img');
  const container = document.createElement('div')
  container.style.position = 'relative'
  document.body.append(container)
  const labeledFaceDescriptors = await loadLabeledImages()
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6)

  const canvas = faceapi.createCanvasFromMedia(image)
  document.body.append(canvas)
  const displaySize = { width: image.width, height: image.height }
  faceapi.matchDimensions(canvas, displaySize)
  const detection = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
  if (detection.length < 1) {
    location.reload()
  } else { 
    console.log(detection.length)
    const resizedDetections = faceapi.resizeResults(detection, displaySize)
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      drawBox.draw(canvas)
    })
  }
}



function loadLabeledImages() {
  const labels = ['Black Widow', 'Captain America', 'Captain Marvel', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark']
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 2; i++) {
        const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/labeled_images/${label}/${i}.jpg`)
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor)
      }

      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}
