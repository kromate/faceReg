import {db, storageRef} from "../firebase/init";

const video = document.getElementById('video');
const labels = []
const student = {}


db.collection("students").get().then(function (querySnapshot) {
  console.log('hello')
  console.log(querySnapshot)
  querySnapshot.forEach(doc => {
    console.log('entered')
    console.log(doc)
      renderStudents(doc.data());
  })
  function renderStudents(data) {
    let studentImg = storageRef.child(`Students/${data.name}`);
    studentImg.getDownloadURL().then(function (url) {
      console.log(data);
      labels.push(data.name);
      student[data.name] = url;
      console.log(labels)
      console.log(student)
    });
  }
}).catch(err=> console.log(err))



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
      <img onLoad='scanImg()' class='' id='img' style='margin: 1rem;' src= '${data_uri}' max-width="100%" height="auto" />`;
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
      console.log(labels)
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
  const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.4)

  const canvas = faceapi.createCanvasFromMedia(image)
  document.body.append(canvas)
  const displaySize = { width: image.width, height: image.height }
  faceapi.matchDimensions(canvas, displaySize)
  const detection = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
  if (detection.length < 1) {
    location.reload()
  } else { 
    const resizedDetections = faceapi.resizeResults(detection, displaySize)
    const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box
      const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() })
      console.log(result._label)
      drawBox.draw(canvas)
      db.collection("students").doc(`${result._label}`).update({
        date: firebase.firestore.FieldValue.arrayUnion(`${new Date().toLocaleTimeString()} of ${new Date().toLocaleDateString()}`)
      }).then(() => { window.location.assign('./index.html')});
     
    })
  }
}



function loadLabeledImages() {
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 1; i <= 2; i++) {
        console.log(student[label])
        const img = await faceapi.fetchImage(student[label])
        const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        descriptions.push(detections.descriptor)
      }

      return new faceapi.LabeledFaceDescriptors(label, descriptions)
    })
  )
}




