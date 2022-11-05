const $d = document;
let x = 0,
  y = 0;
/*
Mi solucion al movimiento de un elemento usando svg y circle
export function movCricle(svgSelector) {
  const $circle = $d.querySelector(`${svgSelector} circle`);
  $d.addEventListener("keydown", (e) => {
    if (e.key.toLocaleLowerCase() === "a") {
      if (parseInt($circle.getAttribute("cx")) <= 51) {
        console.log("estamos en el limite");
      } else {
        $circle.setAttribute(
          "cx",
          `${parseInt($circle.getAttribute("cx")) - 10}`
        );
        console.log($circle);
      }
    }
    if (e.key.toLocaleLowerCase() === "d") {
      if (parseInt($circle.getAttribute("cx")) >= 1038) {
        console.log("llegamos al limite");
      } else {
        $circle.setAttribute(
          "cx",
          `${parseInt($circle.getAttribute("cx")) + 10}`
        );
      }
    }
    if (e.key.toLocaleLowerCase() === "w") {
      if (parseInt($circle.getAttribute("cy")) <= 51) {
        console.log("llegamos al limite");
      } else {
        $circle.setAttribute(
          "cy",
          `${parseInt($circle.getAttribute("cy")) - 10}`
        );
      }
    }
    if (e.key.toLocaleLowerCase() === "s") {
      if (parseInt($circle.getAttribute("cy")) >= 428) {
        console.log("llegamos al limite");
      } else {
        $circle.setAttribute(
          "cy",
          `${parseInt($circle.getAttribute("cy")) + 10}`
        );
      }
    }
  });
}
*/

export function movBall(e, slctBall, stage) {
  console.log(e);
  const $ball = $d.querySelector(slctBall),
    $stage = $d.querySelector(stage),
    $limitsBall = $ball.getBoundingClientRect(),
    $limitStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 65:
      if ($limitsBall.left > $limitStage.left) x--;
      break;
    case 87:
      if ($limitsBall.top > $limitStage.top) y--;
      break;
    case 68:
      if ($limitsBall.right < $limitStage.right) x++;
      break;
    case 83:
      if ($limitsBall.bottom < $limitStage.bottom) y++;
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shortcuts(e) {
  if (e.key === "a" && e.altKey) {
    alert("Has iniciado una alerta con el teclado wapo");
  }
}
