export default function reloj(
  sectionId,
  initBtn,
  stopBtn,
  inAlarmBtn,
  stpAlarmBtn,
  watchText,
  alarmAudio
) {
  const $d = document,
    $watchSection = $d.getElementById(sectionId);
  let intervalo, $btn, $audio;

  $d.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.matches(initBtn)) {
      $btn = $d.querySelector(initBtn);
      $btn.setAttribute("disabled", "true");
      intervalo = setInterval(() => {
        $d.querySelector(watchText).textContent =
          new Date().toLocaleTimeString();
      }, 1000);
    }
    if (e.target.matches(stopBtn)) {
      clearInterval(intervalo);
      $d.querySelector(watchText).textContent = "00: 00 --";
      $btn.removeAttribute("disabled");
      $btn = undefined;
    }
    if (e.target.matches(inAlarmBtn)) {
      $btn = $d.querySelector(inAlarmBtn);
      $audio = $d.createElement("audio");
      $audio.setAttribute("src", "/assets/ahhhhhhh-sound-effect.mp3");
      $audio.setAttribute("preload", "auto");
      $audio.setAttribute("autoplay", "true");
      $audio.setAttribute("id", "alarm-audio");
      $audio.setAttribute("loop", "true");
      $btn.setAttribute("disabled", "true");
      $watchSection.append($audio);
      console.log($audio);
      console.log($watchSection);
    }
    if (e.target.matches(stpAlarmBtn)) {
      $btn.removeAttribute("disabled");
      $btn = undefined;
      $watchSection.removeChild($audio);
    }
  });
}
