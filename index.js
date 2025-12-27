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
    setWidth("IF01P", "412px");
    setHeight("IF01P", "750px");
    setBorder("IF01P", "0");

    showFrame("IF02P");
    setWidth("IF02P", "410px");
    setPosition("IF02P", "absolute");
    setTop("IF02P", "0");
    setLeft("IF02P", "0");

    showFrame("IF03P");
    setWidth("IF03P", "410px");

    showFrame("IF04P");
    setWidth("IF04P", "410px");
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

function setBorder(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.border = value;
}

function setTop(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.top = value;
}

function setLeft(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.left = value;
}

function setPosition(id, value) {
    const el = document.getElementById(id);
    if (el) el.style.position = value;
}
