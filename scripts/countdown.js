//Mi solucion
/*const $d = document;

let fecha = new Date(2023, 9, 27);

export function countdown(countTitle) {
  const $h3 = $d.querySelector(countTitle);
  console.log($h3.textContent);

  setInterval(() => {
    let fechaActual = new Date();
    $h3.textContent = `Dias:${(
      (fecha.getTime() - fechaActual.getTime()) /
      1000 /
      60 /
      60 /
      24
    ).toFixed(0)} Horas: ${
      fecha.getHours() - fechaActual.getHours() + 24
    } Minutos:${fecha.getMinutes() - fechaActual.getMinutes() + 60} Segundos:${
      fecha.getSeconds() - fechaActual.getSeconds() + 60
    }`;
  }, 1000);
}
*/

const d = document;

export default function countdown(id, limitDate, Finalmessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.textContent = `Faltan ${days} Dias ${hours} Horas y ${minutes} Minutos con ${seconds} segundos`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.textContent = Finalmessage;
    }
  }, 1000);
}
