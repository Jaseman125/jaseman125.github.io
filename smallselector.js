let ssCurrent = 1;

const ssSlides = [
  {
    id: "ss-slide-1",
    title: "Slide 1"
  },
  {
    id: "ss-slide-2",
    title: "Slide 2"
  }
];

function ssShowSlide(n) {
  if (n < 1) n = ssSlides.length;
  if (n > ssSlides.length) n = 1;
  ssCurrent = n;

  ssSlides.forEach((slide, index) => {
    const el = document.getElementById(slide.id);
    el.style.display = (index + 1 === n) ? "flex" : "none";
  });

  document.getElementById("ss-title").textContent = ssSlides[n - 1].title;
}

document.getElementById("ss-left").addEventListener("click", () => {
  ssShowSlide(ssCurrent - 1);
});

document.getElementById("ss-right").addEventListener("click", () => {
  ssShowSlide(ssCurrent + 1);
});

window.onload = () => {
  ssShowSlide(1);
};
