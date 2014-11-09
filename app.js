var v = document.getElementById('experiment');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var play = document.getElementById('play');
var save = document.getElementById('save');
var saveLink = document.getElementById('save-link');
navigator.getUserMedia = navigator.mozGetUserMedia;

navigator.getUserMedia(
{
audio:true,
video:false
},
function(stream) {

var mediaRecorder = new MediaRecorder(stream);
start.addEventListener('click', function(){
mediaRecorder.start();
console.log(mediaRecorder.state);
});
stop.addEventListener('click', function(){
mediaRecorder.stop();
console.log(mediaRecorder.state);
});
mediaRecorder.addEventListener('dataavailable', function(media) {
console.log(media.data);
v.src = window.URL.createObjectURL(media.data);
saveLink.href = window.URL.createObjectURL(media.data);
});
play.addEventListener('click', function(){
v.play();
});
save.addEventListener('click', function(){
saveLink.download = prompt('File Name') + ".ogg";
saveLink.click();
});
},
function(error) {
alert('Something went wrong. (error code ' + error.code + ')');
}
);