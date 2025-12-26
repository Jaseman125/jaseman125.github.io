let pages = [
  "IF01","IF02","IF03","IF04","IF05",
  "IF06","IF07","IF08","IF09","IF10"
];

let currentPage = 0;

function updatePage() {
  document.getElementById("pageLabel").innerText = pages[currentPage];

  const pageContent = document.getElementById("pageContent");

  if (pages[currentPage] === "IF05") {
    loadIF05Editor();
  } else {
    pageContent.innerHTML = "";
  }
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
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

  const rect = iframe.getBoundingClientRect();
  const currentX = Math.round(rect.left);
  const currentY = Math.round(rect.top);

  pageContent.innerHTML = `
    <input id="if05Input" type="text" value="${currentSrc}"
      style="width:390px; font-size:12px;"><br>

    <input id="if05X" type="text" value="${currentX}"
      style="width:80px; font-size:12px; margin-top:4px;"> X<br>

    <input id="if05Y" type="text" value="${currentY}"
      style="width:80px; font-size:12px; margin-top:4px;"> Y
  `;

  const inputSrc = document.getElementById("if05Input");
  const inputX = document.getElementById("if05X");
  const inputY = document.getElementById("if05Y");

  inputSrc.addEventListener("change", () => {
    iframe.setAttribute("src", inputSrc.value);
  });

  inputX.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      iframe.style.left = inputX.value + "px";
    }
  });

  inputY.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      iframe.style.top = inputY.value + "px";
    }
  });
}
