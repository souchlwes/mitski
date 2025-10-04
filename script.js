const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
const ambient = document.getElementById('ambient');
const ambientToggle = document.getElementById('ambientToggle');
const reelLeft = document.getElementById('reelLeft');
const reelRight = document.getElementById('reelRight');
const trackSelect = document.getElementById('trackSelect');

// Song links
const tracks = {
  "my-love": "https://www.dropbox.com/scl/fi/nd2dr7h8m57srtdxh4srn/my-love-mine-all-mine.mp3?rlkey=scw9falswi1lcko6dnyiymxmd&st=67n1zr5g&raw=1",
  "love-me": "https://www.dropbox.com/scl/fi/giexruwcdrl2eyoho6uey/love-me-different-1.mp3?rlkey=jmwvad4oo6momig02hto5li1l&st=rl5hgarg&raw=1"
};

// Load default track
audio.src = tracks[trackSelect.value];

trackSelect.addEventListener('change', () => {
  audio.pause();
  playBtn.textContent = '▶';
  reelLeft.classList.remove('spin');
  reelRight.classList.remove('spin');
  audio.src = tracks[trackSelect.value];
});

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
    reelLeft.classList.add('spin');
    reelRight.classList.add('spin');
  } else {
    audio.pause();
    playBtn.textContent = '▶';
    reelLeft.classList.remove('spin');
    reelRight.classList.remove('spin');
  }
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '▶';
  reelLeft.classList.remove('spin');
  reelRight.classList.remove('spin');
});

ambientToggle.addEventListener('change', () => {
  if (ambientToggle.checked) {
    ambient.volume = 0.3;
    ambient.play();
  } else {
    ambient.pause();
  }
});