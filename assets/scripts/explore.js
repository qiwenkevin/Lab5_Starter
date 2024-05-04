// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");
const textarea = document.getElementById("text-to-speak");
const speakButton = document.querySelector("button");
const face = document.querySelector("img");
let voices = [];

function init() {
  let voice;

  voiceSelect.addEventListener("change", () => {
    voice = voiceSelect.selectedOptions[0].getAttribute("data-name");
    console.log(voice);
  });
  speakButton.addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
    const voice = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voice) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
  });
}

setInterval(() => {
  if (synth.speaking) {
    face.src = "assets/images/smiling-open.png";
  } else {
    face.src = "assets/images/smiling.png";
  }
}, 10);

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

