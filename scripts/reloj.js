const $d = document;
export function reloj(sectionId, initBtn, stopBtn, watchText) {
  const $watchSection = $d.getElementById(sectionId);
  let intervalo, $btn, $audio;

  $d.addEventListener("click", (e) => {
    if (e.target.matches(initBtn)) {
      $btn = $d.querySelector(initBtn);
      $btn.setAttribute("disabled", "true");
      $d.querySelector(watchText).textContent = new Date().toLocaleTimeString();
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
  });
}

export function alarm(sound, inAlarmBtn, stpAlarmBtn) {
  let alarmTemp;
  const $audio = $d.createElement("audio");
  $audio.src = sound;
  $d.addEventListener("click", (e) => {
    if (e.target.matches(inAlarmBtn)) {
      alarmTemp = setTimeout(() => {
        $audio.play();
        //$audio.loop = true; Activalo solo si quieres sufrir un rato XD
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(stpAlarmBtn)) {
      clearTimeout(alarmTemp);
      $audio.pause();
      $audio.currentTime = 0;
      $d.querySelector(inAlarmBtn).disabled = false;
    }
  });
}
