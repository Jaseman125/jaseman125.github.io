let lsCurrent = 1;

const lsSlides = [
  {
    id: "slide-1",
    title: "Google Sheet"
  },
  {
    id: "slide-2",
    title: "Calendar"
  }
];

function lsShowSlide(n) {
  if (n < 1) n = lsSlides.length;
  if (n > lsSlides.length) n = 1;
  lsCurrent = n;

  lsSlides.forEach((slide, index) => {
    const el = document.getElementById(slide.id);
    el.style.display = (index + 1 === n) ? "block" : "none";
  });

  document.getElementById("ls-title").textContent = lsSlides[n - 1].title;
}

document.getElementById("ls-left").addEventListener("click", () => {
  lsShowSlide(lsCurrent - 1);
});

document.getElementById("ls-right").addEventListener("click", () => {
  lsShowSlide(lsCurrent + 1);
});

window.onload = () => {
  lsShowSlide(1);
};
