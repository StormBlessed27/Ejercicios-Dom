import hamburguerMenu from "./scripts/hamburguerMenu.js";
import reloj from "./scripts/reloj.js";

const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".nav_Panel", ".nav_Menu a");
  reloj(
    "section1",
    "#init-btn",
    "#stop-btn",
    "#init-alarm",
    "#stop-alarm",
    "#watch",
    "#alarm-audio"
  );
});
