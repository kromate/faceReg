const Webcam = require('../helper/webcam')






export const mountWebcam = () => {
	Webcam.set({
		width: 350,
		height: 265,
		image_format: 'png',
		jpeg_quality: 100
	});

	Webcam.attach('#camera');
}


