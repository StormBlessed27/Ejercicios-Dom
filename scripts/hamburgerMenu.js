const $hamburguerButton = document.getElementById("hamburger-button"),
  $domFragment = document.createDocumentFragment();

$hamburguerButton.addEventListener("click", (e) => {
  let $navDiv = document.createElement("div");
  $navDiv.id = "new-menu";
  console.log($navDiv);
  $domFragment.append($navDiv);
  console.log($domFragment);
  document.body.prepend($domFragment);
});
