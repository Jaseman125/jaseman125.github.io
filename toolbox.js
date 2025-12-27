/* ---------------------------------------------------------
   PAGE LIST
--------------------------------------------------------- */

let pages = [
  "IF01 Settings",
  "IF02 Settings",
  "IF03 Settings",
  "IF04 Settings",
  "IF05 Settings",
  "IF06 Settings",
  "IF07 Settings",
  "IF08 Settings",
  "IF09 Settings",
  "IF10 Settings"
];

let currentPage = 0;

/* ---------------------------------------------------------
   PAGE ROUTER
--------------------------------------------------------- */

function updatePage() {
  document.getElementById("pageLabel").innerText = pages[currentPage];
  const pageContent = document.getElementById("pageContent");

  switch (pages[currentPage]) {
    case "IF01 Settings": loadIFEditor("IF01"); break;
    case "IF02 Settings": loadIFEditor("IF02"); break;
    case "IF03 Settings": loadIFEditor("IF03"); break;
    case "IF04 Settings": loadIFEditor("IF04"); break;
    case "IF05 Settings": loadIFEditor("IF05"); break;
    case "IF06 Settings": loadIFEditor("IF06"); break;
    case "IF07 Settings": loadIFEditor("IF07"); break;
    case "IF08 Settings": loadIFEditor("IF08"); break;
    case "IF09 Settings": loadIFEditor("IF09"); break;
    case "IF10 Settings": loadIFEditor("IF10"); break;
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

/* ---------------------------------------------------------
   BROWSER SIZE + MOUSE XY
--------------------------------------------------------- */

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

/* ---------------------------------------------------------
   UNIVERSAL IFRAME EDITOR (USED BY ALL 10)
--------------------------------------------------------- */

function loadIFEditor(ifID) {
  const pageContent = document.getElementById("pageContent");
  const iframe = window.parent.document.getElementById(ifID);

  if (!iframe) {
    pageContent.innerHTML = ifID + " iframe not found.";
    return;
  }

  const currentSrc = iframe.getAttribute("src");
  const rect = iframe.getBoundingClientRect();

  const currentX = Math.round(rect.left);
  const currentY = Math.round(rect.top);
  const currentW = iframe.offsetWidth;
  const currentH = iframe.offsetHeight;

  pageContent.innerHTML = `
    <input id="${ifID}_src" type="text" value="${currentSrc}"
      style="width:390px; font-size:12px;">

   <table cellpadding="0" cellspacing="0" border="0">

  <tr>
    <td width="90"><span class="label">POSITION:</span></td>
    <td width="90"><span class="label">DIMENSIONS:</span></td>
    <td width="40" align="center"><span class="label">OFF:</span></td>
    <td width="100">
      <input id="${ifID}_opacity" type="range" min="0" max="100"
        value="${Math.round((iframe.style.opacity || 1) * 100)}"
        class="toolbox-slider">
    </td>
  </tr>

  <tr>
    <td>
      <input id="${ifID}_x" type="text" value="${currentX}"
        style="width:40px; font-size:12px;"> X
    </td>

    <td>
      <input id="${ifID}_w" type="text" value="${currentW}"
        style="width:40px; font-size:12px;"> W
    </td>

    <td align="center">
      <input id="${ifID}_visible" type="checkbox" ${iframe.style.display !== "none" ? "checked" : ""}>
    </td>

    <td>
      <input id="${ifID}_brightness" type="range" min="0" max="200" value="100"
        class="toolbox-slider">
    </td>
  </tr>

  <tr>
    <td>
      <input id="${ifID}_y" type="text" value="${currentY}"
        style="width:40px; font-size:12px;"> Y
    </td>

    <td>
      <input id="${ifID}_h" type="text" value="${currentH}"
        style="width:40px; font-size:12px;"> H
    </td>

    <td></td>

    <td>
      <input id="${ifID}_contrast" type="range" min="0" max="200" value="100"
        class="toolbox-slider">
    </td>
  </tr>

</table>
  `;

  /* ---------------------------------------------------------
     EVENT LISTENERS (UNIQUE PER IFRAME)
  --------------------------------------------------------- */

  document.getElementById(`${ifID}_src`).addEventListener("change", e => {
    iframe.setAttribute("src", e.target.value);
  });

  document.getElementById(`${ifID}_x`).addEventListener("keydown", e => {
    if (e.key === "Enter") iframe.style.left = e.target.value + "px";
  });

  document.getElementById(`${ifID}_y`).addEventListener("keydown", e => {
    if (e.key === "Enter") iframe.style.top = e.target.value + "px";
  });

  document.getElementById(`${ifID}_w`).addEventListener("keydown", e => {
    if (e.key === "Enter") iframe.style.width = e.target.value + "px";
  });

  document.getElementById(`${ifID}_h`).addEventListener("keydown", e => {
    if (e.key === "Enter") iframe.style.height = e.target.value + "px";
  });

  document.getElementById(`${ifID}_visible`).addEventListener("change", e => {
    iframe.style.display = e.target.checked ? "block" : "none";
  });

  document.getElementById(`${ifID}_opacity`).addEventListener("input", e => {
    iframe.style.opacity = e.target.value / 100;
  });

  document.getElementById(`${ifID}_brightness`).addEventListener("input", e => {
    iframe.style.filter = `brightness(${e.target.value}%)`;
  });

  document.getElementById(`${ifID}_contrast`).addEventListener("input", e => {
    iframe.style.filter = `contrast(${e.target.value}%)`;
  });
}
