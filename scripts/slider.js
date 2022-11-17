const d = document;

export default function sliderBehavior() {
  const $slides = d.querySelectorAll(".slider-slide"),
    $backBtn = d.getElementById("back"),
    $nextBtn = d.getElementById("next");

  let i = 0;
  d.addEventListener("click", (e) => {
    if (e.target === $backBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }
      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }
      console.log($slides[i]);
      $slides[i].classList.add("active");
    }
  });
}
