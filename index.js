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

    showFrame("IF01P");
    showFrame("IF02P");
    showFrame("IF03P");
    showFrame("IF04P");

    setWidth("IF01P", "412px");
    setWidth("IF02P", "410px");
    setWidth("IF03P", "410px");
    setWidth("IF04P", "410px");

    setHeight("IF01P", "750px");
    setBorder("IF01P", "0");
}

function applyDesktopMode() {
    showFrame("IF01");
    showFrame("IF02");
    showFrame("IF03");
    showFrame("IF04");
    showFrame("IF05");
    showFrame("IF06");
    showFrame("IF07");
    showFrame("IF10");

    hideFrame("IF01P");
    hideFrame("IF02P");
    hideFrame("IF03P");
    hideFrame("IF04P");
}

function hideFrame(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
}

function showFrame(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
}

function setWidth(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.width = value;
}

function setHeight(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.height = value;
}
