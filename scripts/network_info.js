const d = document,
  w = window,
  n = navigator;

export default function networkStatus() {
  const isOnline = () => {
    const $div = d.createElement("div");
    if (n.onLine) {
      $div.textContent = "Estamos de Vuelta :)";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Hemos perdido la conexión";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }
    d.body.prepend($div);
    setTimeout(() => {
      d.body.removeChild($div);
    }, 1500);
  };

  w.addEventListener("online", (e) => isOnline());
  w.addEventListener("offline", (e) => isOnline());
}
