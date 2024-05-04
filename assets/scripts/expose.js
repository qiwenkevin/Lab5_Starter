// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  let hornSelect = document.getElementById("horn-select");
  let currentImage = document.querySelector("img");
  let currentSound = document.querySelector("audio");
  
  hornSelect.addEventListener("change",hornPicAndSound);
  function hornPicAndSound(){
    if(hornSelect.value == 'air-horn'){
      currentImage.src = 'assets/images/air-horn.svg';
      currentSound.src = 'assets/audio/air-horn.mp3';
    }
    if(hornSelect.value == 'car-horn'){
      currentImage.src = 'assets/images/car-horn.svg';
      currentSound.src = 'assets/audio/car-horn.mp3';
    }
    if(hornSelect.value == 'party-horn'){
      currentImage.src = 'assets/images/party-horn.svg';
      currentSound.src = 'assets/audio/party-horn.mp3';
    }
  }

  let volume = document.getElementById("volume");
  let volumeImage = document.getElementById("volume-controls").querySelector("img");

  volume.addEventListener("click", changeVolume);
  function changeVolume(){
    currentSound.volume = volume.value/100;
    if(volume.value == 0){
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume.value > 0 && volume.value < 33){
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volume.value >= 33 && volume.value < 67){
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    }
    else if(volume.value >= 67){
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }
  }

  let playButton = document.querySelector("button");
  playButton.addEventListener("click", playSound);
  function playSound(){
    currentSound.play();
    if (hornSelect.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  }
}