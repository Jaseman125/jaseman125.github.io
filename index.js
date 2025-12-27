function updateMode() {
    const phone = document.body.clientWidth < 1521;

    if (phone) {
        applyPhoneMode();
    } else {
        applyDesktopMode();
    }
}

window.addEventListener("load", updateMode);
window.addEventListener("resize", updateMode);

function applyPhoneMode() {
    // Hide ALL frames in phone mode
    hideFrame("IF01");
    hideFrame("IF02");
    hideFrame("IF03");
    hideFrame("IF04");
    hideFrame("IF05");
    hideFrame("IF06");
    hideFrame("IF07");
    hideFrame("IF08");
    hideFrame("IF09");
    hideFrame("IF10");
}

function applyDesktopMode() {
    // Show all frames EXCEPT IF08 + IF09 (toolbox controls those)
    showFrame("IF01");
    showFrame("IF02");
    showFrame("IF03");
    showFrame("IF04");
    showFrame("IF05");
    showFrame("IF06");
    showFrame("IF07");
    showFrame("IF10");
}

function hideFrame(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
}

function showFrame(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
}
