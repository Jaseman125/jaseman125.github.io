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

  const pageContent = document.getElementById("pageContent");

  // IF05 editor logic
  if (pages[currentPage] === "IF05") {
    loadIF05Editor();
  } else {
    pageContent.innerHTML = "";
  }
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
  const w = window.parent.innerWidth;
  const h = window.parent.innerHeight;
  const el = document.getElementById("browserSizeValue");
  if (el) el.textContent = w + "×" + h;
}

window.parent.addEventListener("resize", updateBrowserSize);
updateBrowserSize();

window.parent.addEventListener("mousemove", function(e) {
  const el = document.getElementById("mousePosValue");
  if (el) el.textContent = e.clientX + "," + e.clientY;
});


// -----------------------------
// IF05 EDITOR
// -----------------------------
function loadIF05Editor() {
  const pageContent = document.getElementById("pageContent");
  const iframe = window.parent.document.getElementById("IF05");

  if (!iframe) {
    pageContent.innerHTML = "IF05 iframe not found.";
    return;
  }

  const currentSrc = iframe.getAttribute("src");

  pageContent.innerHTML = `
    <input id="if05Input" type="text" value="${currentSrc}" 
      style="width: 400px; font-size: 12px;">
  `;

  const input = document.getElementById("if05Input");

  input.addEventListener("change", function () {
    iframe.setAttribute("src", input.value);
  });
}
