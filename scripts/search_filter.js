const d = document;
export default function searchFilter(cardsSelector, inputID) {
  const $cards = d.querySelectorAll(cardsSelector),
    $input = d.getElementById(inputID);

  d.addEventListener("keyup", (e) => {
    if (e.target === $input) {
      if (e.key === "Escape") $input.value = "";

      $cards.forEach((el) =>
        el.textContent.toLocaleLowerCase().includes($input.value)
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
