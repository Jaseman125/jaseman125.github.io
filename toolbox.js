let pages = [
  "PRESETS",
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

function updatePage() {
  document.getElementById("pageLabel").innerText = pages[currentPage];
  const pageContent = document.getElementById("pageContent");

  if (pages[currentPage] === "PRESETS") {
    pageContent.innerHTML = `
      <div style="width:400px; display:flex; justify-content:space-between; margin-bottom:8px;">
        <button id="PRESET01" style="width:75px;">PRESET 01</button>
        <button id="PRESET02" style="width:75px;">PRESET 02</button>
        <button id="PRESET03" style="width:75px;">PRESET 03</button>
        <button id="PRESET04" style="width:75px;">PRESET 04</button>
        <button id="PRESET05" style="width:75px;">PRESET 05</button>
      </div>

      <div style="width:400px; display:flex; justify-content:space-between;">
        <button id="PRESET06" style="width:75px;">PRESET 06</button>
        <button id="PRESET07" style="width:75px;">PRESET 07</button>
        <button id="PRESET08" style="width:75px;">PRESET 08</button>
        <button id="PRESET09" style="width:75px;">PRESET 09</button>
        <button id="PRESET10" style="width:75px;">PRESET 10</button>
      </div>
    `;

    setTimeout(() => {
      attachPresetButtons();
    }, 0);

    return;
  }

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

  const isVisible =
    iframe.style.display !== "none" &&
    iframe.offsetWidth > 0 &&
    iframe.offsetHeight > 0;

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
      <input id="${ifID}_visible" type="checkbox" ${isVisible ? "checked" : ""}>
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

let presets = {};

function parseToolboxText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const result = {};
  let currentKey = null;
  let buffer = [];
  for (const line of lines) {
    if (line.startsWith("---PRESET") && line.endsWith("---")) {
      if (currentKey && buffer.length === 10) {
        result[currentKey] = buffer.slice();
      }
      currentKey = line.replace(/-/g, "");
      buffer = [];
    } else {
      if (currentKey) buffer.push(line);
    }
  }
  if (currentKey && buffer.length === 10) {
    result[currentKey] = buffer.slice();
  }
  return result;
}

function applyPreset(presetKey) {
  const preset = presets[presetKey];
  if (!preset || preset.length !== 10) return;

  const iframeIds = [
    "IF01","IF02","IF03","IF04","IF05",
    "IF06","IF07","IF08","IF09","IF10"
  ];

  for (let i = 0; i < 10; i++) {
    const line = preset[i];
    const parts = line.split(",").map(p => p.trim());
    if (parts.length !== 9) continue;

    const src = parts[0];
    const x = parseInt(parts[1], 10);
    const y = parseInt(parts[2], 10);
    const w = parseInt(parts[3], 10);
    const h = parseInt(parts[4], 10);
    const visible = parts[5].toLowerCase() === "true";
    const opacity = parseInt(parts[6], 10);
    const brightness = parseInt(parts[7], 10);
    const contrast = parseInt(parts[8], 10);

    const iframe = window.parent.document.getElementById(iframeIds[i]);
    if (!iframe) continue;

    iframe.src = src;
    iframe.style.position = "absolute";
    iframe.style.left = x + "px";
    iframe.style.top = y + "px";
    iframe.style.width = w + "px";
    iframe.style.height = h + "px";
    iframe.style.display = visible ? "block" : "none";
    iframe.style.opacity = String(Math.max(0, Math.min(100, opacity)) / 100);
    iframe.style.filter =
      "brightness(" + Math.max(0, Math.min(200, brightness)) +
      "%) contrast(" + Math.max(0, Math.min(200, contrast)) + "%)";
  }
}

function attachPresetButtons() {
  for (let i = 1; i <= 10; i++) {
    const key = "PRESET" + String(i).padStart(2, "0");
    const btn = document.getElementById(key);
    if (!btn) continue;

    btn.onclick = (e) => {
      e.stopPropagation();
      applyPreset(key);
    };
  }
}

fetch("toolbox.txt")
  .then(r => r.text())
  .then(text => presets = parseToolboxText(text));
