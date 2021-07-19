const body = document.body;

body.addEventListener('keyup', (e) => {
  playSound(e.code.toLowerCase());
});

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);

  if(audioElement) {
    audioElement.play();
  }
}