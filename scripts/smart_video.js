const d = document,
  w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilitychange", (e) => {
        if (d.visibilityState === "visible") {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        }
      });
    });
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.5 });

  $videos.forEach((video) => observer.observe(video));
}
