// ---- CONTADOR ----
const targetDate = new Date("November 8, 2025 21:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    timer.innerHTML = "¡Hoy es la gran inauguración! ✨";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `
    <div><span>${days}</span><small>Días</small></div>
    <div><span>${hours}</span><small>Horas</small></div>
    <div><span>${minutes}</span><small>Minutos</small></div>
    <div><span>${seconds}</span><small>Segundos</small></div>
  `;
}, 1000);

// ---- REPRODUCTOR ----
const musicBtn = document.getElementById("music-btn");
const playIcon = document.getElementById("play-icon");
const bgMusic = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playIcon.textContent = "⏸️";
  } else {
    bgMusic.pause();
    playIcon.textContent = "▶️";
  }
});
