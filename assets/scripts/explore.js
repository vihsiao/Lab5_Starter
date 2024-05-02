// explore.js

window.addEventListener('DOMContentLoaded', init);

let selectedVoice = "";

function init() {
  if (typeof speechSynthesis === "undefined") {
    console.log("Speech synthesis undefined");
    return;
  }
  
  let voices = speechSynthesis.getVoices();

  // TODO

  const textInput = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");

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

  voiceSelect.onchange = (event) => {
    selectedVoice = event.target.value;
  }

  // Make speak
  const talk_button = document.querySelector("button");
  const face = document.querySelector("img");

  talk_button.addEventListener("click", (event) => {
    face.src = "assets/images/smiling-open.png";
    let utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption =
        voiceSelect.selectedOptions[0].getAttribute("data-name");

      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterance.voice = voices[i];
          utterance.onend = () => {
            face.src = "assets/images/smiling.png";
            speechSynthesis.cancel();
          }
          speechSynthesis.speak(utterance);
          face.src = "assets/images/smiling-open.png";
          break;
        }
      }
    
    
  })

  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = init;
  }

}