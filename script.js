const needle = document.getElementById('needle');
const audio = document.getElementById('audio');
const ambient = document.getElementById('ambient');
const ambientToggle = document.getElementById('ambientToggle');

needle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    needle.classList.add('glowing');
  } else {
    audio.pause();
    needle.classList.remove('glowing');
  }
});

audio.addEventListener('ended', () => {
  needle.classList.remove('glowing');
});

ambientToggle.addEventListener('change', () => {
  if (ambientToggle.checked) {
    ambient.volume = 0.3;
    ambient.play();
  } else {
    ambient.pause();
  }
});