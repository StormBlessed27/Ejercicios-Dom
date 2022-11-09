const d = document,
  ls = localStorage;
export default function darkTheme(btn, darkClass) {
  const $modeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  const lightMode = () => {
    $selectors.forEach((el) => {
      el.classList.remove(darkClass);
    });
    $modeBtn.textContent = "🌙";
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => {
      el.classList.add(darkClass);
    });
    $modeBtn.textContent = "☀️";
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target === $modeBtn) {
      if ($modeBtn.textContent === "🌙") {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
