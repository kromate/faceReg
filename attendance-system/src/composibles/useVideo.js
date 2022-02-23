import { Webcam } from '../helper/webcam'


export const takeSnapShot = function () {
  Webcam.snap(function (data_uri) {
    document.getElementById('snapShot').innerHTML +=
      `<img onClick='scanImg()' class='' style='margin: 1rem; display:none' src= '${data_uri}' width="200px" height="200px" />`;
  });
}