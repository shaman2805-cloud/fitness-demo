
const titles = {
  home: "Главная",
  schedule: "Расписание",
  trainers: "Тренеры",
  progress: "Прогресс",
  profile: "Профиль"
};

function goTo(screen) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  document.querySelector(`[data-screen="${screen}"]`).classList.add("active");

  document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
  const nav = document.querySelector(`.nav-item[data-target="${screen}"]`);
  if (nav) nav.classList.add("active");

  document.getElementById("page-title").textContent = titles[screen] || "Fitness";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleBooking(button) {
  const isBooked = button.classList.toggle("booked");
  button.textContent = isBooked ? "✓ Вы записаны" : "Записаться";
}

document.querySelectorAll(".day").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".day").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
  });
});
