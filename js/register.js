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
    document.getElementById('snapShot').innerHTML +=
      `<img style='margin: 1rem;' src= '${data_uri}' width="70px" height="50px" />`;
  });
}

// DOWNLOAD THE IMAGE.
downloadImage = function (name, datauri) {
  var a = document.createElement('a');
  a.setAttribute('download', name + '.png');
  a.setAttribute('href', datauri);
  a.click();
}