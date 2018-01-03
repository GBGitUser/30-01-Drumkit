

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if(!audio) {return} // stop the function
  audio.currentTime=0;
  audio.play();
  key.classList.add('playing'); //adds the new class on keydown
}

function removeTransition(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!key) return; // stop the function
  key.classList.remove('playing'); //adds the new class on keydown
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeTransition);
