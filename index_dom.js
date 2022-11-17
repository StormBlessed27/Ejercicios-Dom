import countdown from "./scripts/countdown.js";
import darkTheme from "./scripts/darkmode.js";
import detectWebcam from "./scripts/detection_webcam.js";
import lottery from "./scripts/digital_lottery.js";
import formValidation from "./scripts/form_validation.js";
import detectGeolocalizacion from "./scripts/geolocacion.js";
import hamburguerMenu from "./scripts/hamburguerMenu.js";
import networkStatus from "./scripts/network_info.js";
import responsiveMedia from "./scripts/objeto_responsive.js";
import { reloj, alarm } from "./scripts/reloj.js";
import { responsiveTester } from "./scripts/responsive_tester.js";
import scrollSpy from "./scripts/scroll_spy.js";
import { activeBtn, scrollUpBtn } from "./scripts/scroll_Up_Btn.js";
import searchFilter from "./scripts/search_filter.js";
import sliderBehavior from "./scripts/slider.js";
import smartVideo from "./scripts/smart_video.js";
import textToVoice from "./scripts/spech.js";
import { movBall, shortcuts } from "./scripts/teclado.js";
import userDeviceInfo from "./scripts/user_agent.js";

const $d = document;
$d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".nav_Panel", ".nav_Menu a");
  reloj("section1", "#init-btn", "#stop-btn", "#watch");
  alarm("/assets/ahhhhhhh-sound-effect.mp3", "#init-alarm", "#stop-alarm");
  countdown("countdown-title", "October 27, 2023", "Hola wapo");
  scrollUpBtn(".scroll-up-btn");
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `
    <p>Vivo en la ciudad de Bogota en colombia. Estudio ingenieria de sistemas y te mostrare uno de mis lugares favoritos en la ciudad</p>
    <a href="https://goo.gl/maps/omCsYcoDrJV942B5A">Ve la ubicacion de uno de mis sitios favoritos de la ciudad de Bogotá</a>`,
    ` 
    <p>Vivo en la ciudad de Bogota en colombia. Estudio ingenieria de sistemas y te mostrare uno de mis lugares favoritos en la ciudad</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.192716920616!2d-74.13376437569669!3d4.57155497106283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9f0a89499c1f%3A0x2ac157648749672!2sParque%20Metropolitano%20El%20Tunal!5e0!3m2!1ses-419!2sco!4v1667938471183!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> `
  );
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<p>Aproveche la oportunidad para pues... hacer spam de WARHAMMER 40000!!! Un universo de ficcion al que me estoy metiendo con fuerza, asi que si deseas saber que es eso. El siguiente video es de lore sobre este universo</p>
    <a href="https://www.youtube.com/embed/vN_jkrpGpTw">Ve el video de la linea de tiempo de Warhammer 40K</a>`,
    `<p>Aproveche la oportunidad para pues... hacer spam de WARHAMMER 40000!!! Un universo de ficcion al que me estoy metiendo con fuerza, asi que si deseas saber que es eso. El siguiente video es de lore sobre este universo</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vN_jkrpGpTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveTester("responsive-tester");
  //userDeviceInfo("user-device") No es recomendable el uso del userAgent
  detectWebcam("webcam");
  detectGeolocalizacion("geolocation");
  searchFilter(".card", "filter-input");
  lottery(".player", "winner-btn");
  sliderBehavior();
  scrollSpy();
  smartVideo();
  formValidation();
});

$d.addEventListener("keydown", (e) => {
  shortcuts(e);
  movBall(e, ".ball", ".stage");
});

$d.addEventListener("scroll", (e) => {
  activeBtn(".scroll-up-btn", "hidden");
});

darkTheme(".darkmode-btn", "darkmode");
networkStatus();
textToVoice();
