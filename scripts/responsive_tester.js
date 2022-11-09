const d = document,
  w = window;

export function responsiveTester(id) {
  const $form = d.getElementById(id);
  let tester;
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = w.open(
        $form.url.value,
        "tester",
        `innerWidth = ${$form.width.value}, innerHeight=${$form.height.value}`
      );
    }
  });
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
