let pages = [
  "PRESETS",
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

function refreshIframeState() {
  const iframeStates = {};
  for (let i = 1; i <= 10; i++) {
    const id = "IF" + String(i).padStart(2, "0");
    const iframe = window.parent.document.getElementById(id);
    if (!iframe) continue;

    const rect = iframe.getBoundingClientRect();

    iframeStates[id] = {
      visible: iframe.style.display !== "none" && iframe.offsetWidth > 0 && iframe.offsetHeight > 0,
      x: Math.round(rect.left),
      y: Math.round(rect.top),
      w: iframe.offsetWidth,
      h: iframe.offsetHeight,
      opacity: Math.round((iframe.style.opacity || 1) * 100),
      brightness: 100,
      contrast: 100
    };
  }
  return iframeStates;
}

function updatePage() {
  document.getElementById("pageLabel").innerText = pages[currentPage];
  const pageContent = document.getElementById("pageContent");

  const iframeStates = refreshIframeState();

  if (pages[currentPage] === "PRESETS") {
    let tickRow = "";
    let row1 = "";
    let row2 = "";

    for (let i = 1; i <= 10; i++) {
      const id = "IF" + String(i).padStart(2, "0");
      const checked = iframeStates[id]?.visible ? "checked" : "";
      if (i === 10) {
        tickRow += `<td bgcolor="red"><input type="checkbox" id="TB${id}" ${checked}></td>`;
      } else {
        tickRow += `<td><input type="checkbox" id="TB${id}" ${checked}></td>`;
      }
    }

    for (let i = 1; i <= 10; i++) {
      row1 += `<td><button id="PRESET${String(i).padStart(2, "0")}">${String(i).padStart(2, "0")}</button></td>`;
    }

    for (let i = 11; i <= 20; i++) {
      row2 += `<td><button id="PRESET${String(i).padStart(2, "0")}">${String(i).padStart(2, "0")}</button></td>`;
    }

    pageContent.innerHTML = `
      <table class="presetTable" cellpadding="0" cellspacing="0" border="0">
        <tr>${tickRow}</tr>
        <tr>${row1}</tr>
        <tr>${row2}</tr>
      </table>
    `;

    attachPresetButtons();
    attachTickboxes();
    return;
  }

  switch (pages[currentPage]) {
    case "IF01": loadIFEditor("IF01"); break;
    case "IF02": loadIFEditor("IF02"); break;
    case "IF03": loadIFEditor("IF03"); break;
    case "IF04": loadIFEditor("IF04"); break;
    case "IF05": loadIFEditor("IF05"); break;
    case "IF06": loadIFEditor("IF06"); break;
    case "IF07": loadIFEditor("IF07"); break;
    case "IF08": loadIFEditor("IF08"); break;
    case "IF09": loadIFEditor("IF09"); break;
    case "IF10": loadIFEditor("IF10"); break;
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

window.addEventListener("message", function(e) {
  if (e.data.type === "mouseXY") {
    const el = document.getElementById("mousePosValue");
    if (el) el.textContent = e.data.x + "," + e.data.y;
  }
});

function loadIFEditor(ifID) {
  const pageContent = document.getElementById("pageContent");
  const iframe = window.parent.document.getElementById(ifID);

  if (!iframe) {
    pageContent.innerHTML = ifID + " iframe not found.";
    return;
  }

  const rect = iframe.getBoundingClientRect();

  const currentSrc = iframe.getAttribute("src");
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
    iframe.style.opacity = String(Math.max(0, Math.min(100, e.target.value)) / 100);
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
  const lines = text.split(/\r?\n/).map(l => l.trim());

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
      if (
        currentKey &&
        line.length > 0 &&
        !line.startsWith("src,") &&
        !line.startsWith("IMPORTANT:")
      ) {
        buffer.push(line);
      }
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
  const root = document.getElementById("pageContent");
  const buttons = root.querySelectorAll("button[id^='PRESET']");

  buttons.forEach(btn => {
    const key = btn.id;
    btn.onclick = (e) => {
      e.stopPropagation();
      applyPreset(key);
      updatePage(); // re-evaluate tickboxes after preset load
    };
  });
}

function attachTickboxes() {
  for (let i = 1; i <= 10; i++) {
    const id = "IF" + String(i).padStart(2, "0");
    const tick = document.getElementById("TB" + id);
    const iframe = window.parent.document.getElementById(id);
    if (!tick || !iframe) continue;

    tick.addEventListener("change", () => {
      iframe.style.display = tick.checked ? "block" : "none";
    });
  }
}

fetch("toolbox.txt")
  .then(r => r.text())
  .then(text => presets = parseToolboxText(text));
