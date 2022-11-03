const $d = document;
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
