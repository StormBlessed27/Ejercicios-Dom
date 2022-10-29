import hamburguerMenu from "./scripts/hamburguerMenu.js";

const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".nav_Panel", ".nav_Menu a");
});
