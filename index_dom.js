import hamburguerMenu from "./scripts/hamburguerMenu.js";
import { reloj, alarm } from "./scripts/reloj.js";
import { movBall, shortcuts } from "./scripts/teclado.js";

const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".nav_Panel", ".nav_Menu a");
  reloj("section1", "#init-btn", "#stop-btn", "#watch");
  alarm("/assets/ahhhhhhh-sound-effect.mp3", "#init-alarm", "#stop-alarm");
});

$d.addEventListener("keydown", (e) => {
  shortcuts(e);
  movBall(e, ".ball", ".stage");
});
