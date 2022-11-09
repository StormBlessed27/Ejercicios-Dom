const d = document;

export function activeBtn(selector, newClass) {
  const $scrollUpBtn = d.querySelector(selector);
  if (scrollY > 300) {
    $scrollUpBtn.classList.remove(newClass);
  }
  if (scrollY < 300) {
    $scrollUpBtn.classList.add(newClass);
  }
}

export function scrollUpBtn(slct) {
  const $scrollUpBtn = d.querySelector(slct);
  d.addEventListener("click", (e) => {
    if (e.target === $scrollUpBtn) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}
