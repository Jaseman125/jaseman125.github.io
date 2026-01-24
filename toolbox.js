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
let presets = {};
let backgroundImages = []; 
let currentBgIndex = 0;

/**
 * 1. DISCOVERY: Fetch image list from your GitHub repository
 */
async function fetchBackgrounds() {
  try {
    const response = await fetch("https://api.github.com/repos/Jaseman125/jaseman125.github.io/contents/img/backgrounds");
    const data = await response.json();
    
    backgroundImages = data
      .filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file.name))
      .map(file => ({
        name: file.name, 
        path: "img/backgrounds/" + file.name 
      }));
    
    if (backgroundImages.length > 0) {
      updatePage(); 
    }
  } catch (error) {
    console.error("Discovery error:", error);
  }
}

/**
 * 2. CIRCULAR LOOP: Cycle through the background list
 */
function cycleBackground(direction) {
  if (backgroundImages.length === 0) return;

  if (direction === "next") {
    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
  } else {
    currentBgIndex = (currentBgIndex - 1 + backgroundImages.length) % backgroundImages.length;
  }

  const selected = backgroundImages[currentBgIndex];
  window.parent.postMessage({ type: "SET_BACKGROUND", url: selected.path }, "*");
  updatePage(); 
}

/**
 * 3. MANUAL ENTRY: Change background via text box
 */
function setBackgroundByName(name) {
  const index = backgroundImages.findIndex(img => img.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) {
    currentBgIndex = index;
    const selected = backgroundImages[currentBgIndex];
    window.parent.postMessage({ type: "SET_BACKGROUND", url: selected.path }, "*");
    updatePage();
  }
}

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
      opacity: Math.round((iframe.style.opacity || 1) * 100)
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

    const currentName = backgroundImages.length > 0 ? backgroundImages[currentBgIndex].name : "01.png";
    
    const col1_row1 = `<td width="40" align="center" style="font-size:9px; font-weight:bold; color:#fff; background:#444;">BGND:</td>`;
    const col1_row2 = `<td width="40" align="center"><input type="text" id="bgNameInput" value="${currentName}" title="${currentName}" style="width:36px; height:14px; font-size:8px; text-align:center; border:1px solid #999;"></td>`;
    const col1_row3 = `<td width="40" align="center">
                        <button id="bgPrev" style="width:18px; height:16px; font-size:8px; cursor:pointer; padding:0;">⬅️</button>
                        <button id="bgNext" style="width:18px; height:16px; font-size:8px; cursor:pointer; padding:0;">➡️</button>
                      </td>`;

    for (let i = 1; i <= 10; i++) {
      const id = "IF" + String(i).padStart(2, "0");
      const checked = iframeStates[id]?.visible ? "checked" : "";
      const bgColor = (i === 10) ? 'bgcolor="red"' : '';
      tickRow += `<td ${bgColor}><input type="checkbox" id="TB${id}" ${checked}></td>`;
    }

    for (let i = 1; i <= 10; i++) {
      row1 += `<td><button id="PRESET${String(i).padStart(2, "0")}">${String(i).padStart(2, "0")}</button></td>`;
    }

    for (let i = 11; i <= 20; i++) {
      row2 += `<td><button id="PRESET${String(i).padStart(2, "0")}">${String(i).padStart(2, "0")}</button></td>`;
    }

    pageContent.innerHTML = `
      <table class="presetTable" cellpadding="0" cellspacing="0" border="0">
        <tr>${col1_row1}${tickRow}</tr>
        <tr>${col1_row2}${row1}</tr>
        <tr>${col1_row3}${row2}</tr>
      </table>
    `;

    attachPresetButtons();
    attachTickboxes();
    
    document.getElementById("bgPrev").onclick = () => cycleBackground("prev");
    document.getElementById("bgNext").onclick = () => cycleBackground("next");
    
    const bgInput = document.getElementById("bgNameInput");
    bgInput.onkeydown = (e) => {
      if (e.key === "Enter") setBackgroundByName(bgInput.value);
    };

    return;
  }

  loadIFEditor(pages[currentPage]);
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
  const currentSrc = iframe.getAttribute("src") || "";
  const currentX = Math.round(rect.left);
  const currentY = Math.round(rect.top);
  const currentW = iframe.offsetWidth;
  const currentH = iframe.offsetHeight;
  const isVisible = iframe.style.display !== "none" && iframe.offsetWidth > 0 && iframe.offsetHeight > 0;

  pageContent.innerHTML = `
    <input id="${ifID}_src" type="text" value="${currentSrc}" style="width:390px; font-size:12px;">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="90"><span class="label">POSITION:</span></td>
        <td width="90"><span class="label">DIMENSIONS:</span></td>
        <td width="40" align="center"><span class="label">OFF:</span></td>
        <td width="100">
          <input id="${ifID}_opacity" type="range" min="0" max="100" value="${Math.round((iframe.style.opacity || 1) * 100)}" class="toolbox-slider">
        </td>
      </tr>
      <tr>
        <td><input id="${ifID}_x" type="text" value="${currentX}" style="width:40px; font-size:12px;"> X</td>
        <td><input id="${ifID}_w" type="text" value="${currentW}" style="width:40px; font-size:12px;"> W</td>
        <td align="center"><input id="${ifID}_visible" type="checkbox" ${isVisible ? "checked" : ""}></td>
        <td><input id="${ifID}_brightness" type="range" min="0" max="200" value="100" class="toolbox-slider"></td>
      </tr>
      <tr>
        <td><input id="${ifID}_y" type="text" value="${currentY}" style="width:40px; font-size:12px;"> Y</td>
        <td><input id="${ifID}_h" type="text" value="${currentH}" style="width:40px; font-size:12px;"> H</td>
        <td></td>
        <td><input id="${ifID}_contrast" type="range" min="0" max="200" value="100" class="toolbox-slider"></td>
      </tr>
    </table>
  `;

  document.getElementById(`${ifID}_src`).addEventListener("change", function(e) {
    iframe.src = e.target.value;
  });

  document.getElementById(`${ifID}_x`).addEventListener("keydown", function(e) {
    if (e.key === "Enter") { iframe.style.left = e.target.value + "px"; }
  });

  document.getElementById(`${ifID}_y`).addEventListener("keydown", function(e) {
    if (e.key === "Enter") { iframe.style.top = e.target.value + "px"; }
  });

  document.getElementById(`${ifID}_w`).addEventListener("keydown", function(e) {
    if (e.key === "Enter") { iframe.style.width = e.target.value + "px"; }
  });

  document.getElementById(`${ifID}_h`).addEventListener("keydown", function(e) {
    if (e.key === "Enter") { iframe.style.height = e.target.value + "px"; }
  });

  document.getElementById(`${ifID}_visible`).addEventListener("change", function(e) {
    iframe.style.display = e.target.checked ? "block" : "none";
  });

  document.getElementById(`${ifID}_opacity`).addEventListener("input", function(e) {
    iframe.style.opacity = e.target.value / 100;
  });

  document.getElementById(`${ifID}_brightness`).addEventListener("input", function(e) {
    const contrastVal = document.getElementById(ifID + '_contrast').value;
    iframe.style.filter = `brightness(${e.target.value}%) contrast(${contrastVal}%)`;
  });

  document.getElementById(`${ifID}_contrast`).addEventListener("input", function(e) {
    const brightnessVal = document.getElementById(ifID + '_brightness').value;
    iframe.style.filter = `brightness(${brightnessVal}%) contrast(${e.target.value}%)`;
  });
}

function parseToolboxText(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim());
  const result = {};
  let currentKey = null;
  let buffer = [];
  for (const line of lines) {
    if (line.startsWith("---PRESET") && line.endsWith("---")) {
      if (currentKey && buffer.length === 10) result[currentKey] = buffer.slice();
      currentKey = line.replace(/-/g, "");
      buffer = [];
    } else if (currentKey && line.length > 0 && !line.startsWith("src,") && !line.startsWith("IMPORTANT:")) {
      buffer.push(line);
    }
  }
  if (currentKey && buffer.length === 10) result[currentKey] = buffer.slice();
  return result;
}

function applyPreset(presetKey, isInitialLoad = false) {
  const preset = presets[presetKey];
  if (!preset || preset.length !== 10) return;
  const ids = ["IF01","IF02","IF03","IF04","IF05","IF06","IF07","IF08","IF09","IF10"];
  
  for (let i = 0; i < 10; i++) {
    const parts = preset[i].split(",").map(p => p.trim());
    const iframe = window.parent.document.getElementById(ids[i]);
    if (!iframe || parts.length !== 9) continue;

    // LOOP PROTECTION: Don't change IF10's src if it's currently toolbox.html
    if (ids[i] === "IF10" && parts[0].includes("toolbox.html")) {
       // Only skip the SRC update, still update position/visibility
    } else {
       iframe.src = parts[0];
    }
    
    iframe.style.left = parts[1] + "px";
    iframe.style.top = parts[2] + "px";
    iframe.style.width = parts[3] + "px";
    iframe.style.height = parts[4] + "px";
    iframe.style.display = parts[5].toLowerCase() === "true" ? "block" : "none";
    iframe.style.opacity = parts[6] / 100;
  }
}

function attachPresetButtons() {
  document.querySelectorAll("button[id^='PRESET']").forEach(btn => {
    btn.onclick = (e) => {
      applyPreset(btn.id);
      updatePage();
    };
  });
}

function attachTickboxes() {
  for (let i = 1; i <= 10; i++) {
    const id = "IF" + String(i).padStart(2, "0");
    const tick = document.getElementById("TB" + id);
    const iframe = window.parent.document.getElementById(id);
    if (tick && iframe) tick.onchange = () => iframe.style.display = tick.checked ? "block" : "none";
  }
}

// STARTUP
fetch("toolbox.txt")
  .then(r => r.text())
  .then(text => {
    presets = parseToolboxText(text);
    applyPreset("PRESET01", true); 
    fetchBackgrounds(); 
  });