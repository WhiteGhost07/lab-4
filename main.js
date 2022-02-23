const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);





const audiot = document.querySelector('.audiot');
const playBtnt = document.querySelector('.play-btnt');
const pauseBtnt = document.querySelector('.pause-btnt');

playBtnt.addEventListener('click', playAudiot);
pauseBtnt.addEventListener('click', pauseAudiot);

function playAudiot() {
  audiot.currentTime = 0;
  audiot.play();
}

function pauseAudiot() {
  audiot.pause();
}