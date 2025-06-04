document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("Audio");
  const tombolAudio = document.getElementById("TombolAudio");
  const tombolBuka = document.querySelector(".cover-btn");

  tombolBuka.addEventListener("click", () => {
    audio.play().catch((e) => console.log("Autoplay gagal:", e));
  });

  tombolAudio.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
