// import { Webcam } from '../helper/webcam'
const Webcam = require('../helper/webcam')
// import { db, storageRef } from '../firebase/init';
import {useStorage} from '@vueuse/core'
const person = { name: '' }

useStorage()


export const mountWebcam = () => {
	Webcam.set({
		width: 350,
		height: 265,
		image_format: 'png',
		jpeg_quality: 100
	});

	Webcam.attach('#camera');
}




//called after the Images have been taken
export function success() {
	// setTimeout(home, 5000)
	const image = document.querySelectorAll('img');
	image.forEach((img, index) => {
		person[index] = img.src;
	})
	naming()
}


function naming(){


	upload()
}

function upload(){
	const ImageURL = person[0]
	console.log(person[0]);
	const block = ImageURL.split(';');
	const contentType = block[0].split(':')[1];
	const realData = block[1].split(',')[1];
	const blob = b64toBlob(realData, contentType, 512);

	document.querySelector('#upload').addEventListener('click', function(){
		const name = document.querySelector('#name').value
		person.name = name
   

		db.collection('students').doc(name).set({ name: name, date:[] }).then(function () {
			storageRef.child('Students/' + name).put(blob).on('state_changed', function (snapshot) {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				// console.log('Upload is ' + progress + '% done');
				document.getElementById('status').innerHTML = Math.floor(progress) + '%';
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
	location.assign('/')
}