
const playBtn = document.getElementById('playBtn');
const audio = document.getElementById('audio');
const trackSelect = document.getElementById('trackSelect');
const volumeSlider = document.getElementById('volumeSlider');
const balanceSlider = document.getElementById('balanceSlider');
const visualizerBars = document.querySelectorAll('.bar');
const closeBtn = document.querySelector('.close-btn');
const playerWindow = document.getElementById('playerWindow');

// Song links
const tracks = {
  "my-love": "https://www.dropbox.com/scl/fi/nd2dr7h8m57srtdxh4srn/my-love-mine-all-mine.mp3?rlkey=scw9falswi1lcko6dnyiymxmd&st=67n1zr5g&raw=1",
  "love-me": "https://www.dropbox.com/scl/fi/giexruwcdrl2eyoho6uey/love-me-different-1.mp3?rlkey=jmwvad4oo6momig02hto5li1l&st=rl5hgarg&raw=1"
};

// Load default track
audio.src = tracks[trackSelect.value];

// Track switching
trackSelect.addEventListener('change', () => {
  audio.pause();
  playBtn.textContent = '▶';
  toggleVisualizer(false);
  audio.src = tracks[trackSelect.value];
});

// Play/pause toggle
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
    toggleVisualizer(true);
  } else {
    audio.pause();
    playBtn.textContent = '▶';
    toggleVisualizer(false);
  }
});

// Reset visualizer when track ends
audio.addEventListener('ended', () => {
  playBtn.textContent = '▶';
  toggleVisualizer(false);
});

// Volume control
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100;
});

// Balance control (visual only)
balanceSlider.addEventListener('input', () => {
  // Optional: animate balance UI or display value
});

// Visualizer animation toggle
function toggleVisualizer(active) {
  visualizerBars.forEach(bar => {
    bar.style.animationPlayState = active ? 'running' : 'paused';
  });
}

// Close button
closeBtn.addEventListener('click', () => {
  playerWindow.style.display = 'none';
});