// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  // Dropdown
  const dropdown = document.getElementById("horn-select");
  const audio = document.getElementsByClassName("hidden")[0];
  
  dropdown.onchange = () => {
    const hornImage = document.querySelector("img");  
    let newImage = dropdown.value + ".svg";
    hornImage.src = "assets/images/" + newImage;

    //Set audio
    
    console.log(audio);
    let newAudio = dropdown.value + ".mp3";
    audio.src = "assets/audio/" + newAudio;
  }

  // Volume Slider

  const slider = document.getElementById("volume");

  slider.addEventListener("change", (event) => {
    const slider_level = Number(event.target.value);
    const volume_img = document.querySelector("#volume-controls img");
    const audio = document.getElementsByClassName("hidden")[0];

    if (slider_level == 0) {
      volume_img.src = "assets/icons/volume-level-0.svg";
    } else if (slider_level >= 1 && slider_level < 33) {
      volume_img.src = "assets/icons/volume-level-1.svg";
    } else if (slider_level >= 33 && slider_level < 67) {
      volume_img.src = "assets/icons/volume-level-2.svg";
    } else if (slider_level >= 67) {
      volume_img.src = "assets/icons/volume-level-3.svg";
    }
    
    audio.volume = slider_level / 100;
    console.log(audio.volume)
  })
  
  // Audio Button

  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  playButton.addEventListener("click", (event) => {
    audio.play();
    jsConfetti.addConfetti();
  })
}