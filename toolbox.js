let pages = [
  "IF01",
  "IF02",
  "IF03",
  "IF04",
  "IF05",
  "IF06",
  "IF07",
  "IF08",
  "IF09",
  "IF10"
];

let currentPage = 0;

function updatePage() {
  document.getElementById("pageLabel").innerText = pages[currentPage];
}

document.getElementById("nextBtn").addEventListener("click", function () {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

document.getElementById("prevBtn").addEventListener("click", function () {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

updatePage();

function updateBrowserSize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const el = document.getElementById("browserSize");
  if (el) el.textContent = w + "×" + h;
}

window.addEventListener("resize", updateBrowserSize);
updateBrowserSize();

document.addEventListener("mousemove", function(e) {
  const el = document.getElementById("mousePos");
  if (el) el.textContent = e.clientX + "," + e.clientY;
});
