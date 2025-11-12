document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicBtn");
  const musicIcon = document.getElementById("musicIcon");
  const bgMusic = document.getElementById("bgMusic");

  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
      musicIcon.textContent = "▶️";
    } else {
      bgMusic.play();
      musicIcon.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
  });
});
