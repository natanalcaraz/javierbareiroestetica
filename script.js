// === REPRODUCCIÓN DE MÚSICA ===
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.textContent = "⏸️";
  } else {
    bgMusic.pause();
    musicIcon.textContent = "▶️";
  }
});

// === CONTADOR REGRESIVO ===
const eventDate = new Date("November 26, 2025 21:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "<p>¡El evento ha comenzado! 🎉</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

// === SERPENTINAS ALEATORIAS ===
const serpentinasContainer = document.getElementById("serpentinas");

function crearSerpentina() {
  const serp = document.createElement("div");
  serp.classList.add("serpentina");
  serp.style.left = Math.random() * 100 + "vw";
  serp.style.animationDuration = 4 + Math.random() * 3 + "s";
  serpentinasContainer.appendChild(serp);

  setTimeout(() => serp.remove(), 7000);
}

setInterval(crearSerpentina, 400);
