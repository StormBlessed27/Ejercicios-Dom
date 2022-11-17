const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    //console.log("entries:", entries);
    entries.forEach((entry) => {
      const $sectionId = entry.target.getAttribute("id");
      //console.log("entry:", entry);
      if (entry.isIntersecting) {
        d.querySelector(
          `a[data-scroll-spy][href="#${$sectionId}"]`
        ).classList.add("is-on-section");
      } else {
        d.querySelector(
          `a[data-scroll-spy][href="#${$sectionId}"]`
        ).classList.remove("is-on-section");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    threshold: 0.5,
  });

  $sections.forEach((el) => observer.observe(el));
}
