export default function hamburguerMenu(hamburguerBtn, panel, menuLink) {
  const $d = document;
  $d.addEventListener("click", (e) => {
    if (
      e.target.matches(hamburguerBtn) ||
      e.target.matches(`${hamburguerBtn} *`)
    ) {
      $d.querySelector(panel).classList.toggle("is_Active");
      $d.querySelector(hamburguerBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      $d.querySelector(panel).classList.remove("is_Active");
      $d.querySelector(hamburguerBtn).classList.remove("is-active");
    }
  });
}
