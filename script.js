const body = document.body;
const composerButton = document.querySelector('.composer button');

body.addEventListener('keyup', (e) => {
  playSound(e.code.toLowerCase());
});

composerButton.addEventListener('click', (e) => {
  let song = document.querySelector('#input').value;

  if (song !== '') {
    let songArray = song.split('')
    playComposition(songArray);
  }
});

const playSound = (sound) => {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  
  if(audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if(keyElement) {
    keyElement.classList.add('active');

    setTimeout(() => {
      keyElement.classList.remove('active');
    }, 300)
  }
}