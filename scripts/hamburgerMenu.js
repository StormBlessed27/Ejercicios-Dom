const $hamburguerButton = document.getElementById("hamburguer-button"),
  $navDiv = document.getElementById("nav-bar");

$hamburguerButton.addEventListener("click", (e) => {
  if ($navDiv.classList.contains("nav-bar-active")) {
    $navDiv.classList.remove("nav-bar-active");
    $navDiv.classList.add("nav-bar-desactivate");
  } else if ($navDiv.classList.contains("nav-bar-desactivate")) {
    $navDiv.classList.remove("nav-bar-desactivate");
    $navDiv.classList.add("nav-bar-active");
  }
});
