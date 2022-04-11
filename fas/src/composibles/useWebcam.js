// import { Webcam } from '../helper/webcam'
const Webcam = require('../helper/webcam')
import { db, storageRef } from '../firebase/init';

const person = { name: '' }

console.log(Webcam);


export const mountWebcam = () => {
	Webcam.set({
		width: 350,
		height: 265,
		image_format: 'png',
		jpeg_quality: 100
	});

	Webcam.attach('#camera');
}




export function b64toBlob(b64Data, contentType, sliceSize) {
	contentType = contentType || '';
	sliceSize = sliceSize || 512;

	const byteCharacters = atob(b64Data); // window.atob(b64Data)
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);

		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		const byteArray = new Uint8Array(byteNumbers);

		byteArrays.push(byteArray);
	}

	const blob = new Blob(byteArrays, { type: contentType });
	return blob;
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
	window.location.assign('./index.html')
}