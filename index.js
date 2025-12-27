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
    hideFrame("IF05");
    hideFrame("IF06");
    hideFrame("IF07");
    hideFrame("IF08");
    hideFrame("IF09");
    hideFrame("IF10");

    setMsgHeaderPhone();
    setYTPlaylistPhone();
    setJaseworld2Phone();
    setBackgroundPhone();
}

function applyDesktopMode() {
    showFrame("IF05");
    showFrame("IF06");
    showFrame("IF07");
    showFrame("IF10");

    setMsgHeaderDesktop();
    setYTPlaylistDesktop();
    setJaseworld2Desktop();
    setBackgroundDesktop();
}

function hideFrame(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
}

function showFrame(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "block";
}

function setBackgroundPhone() {
    const el = document.getElementById("IF01");
    el.style.width = "100vw";
    el.style.height = "100vh";
    el.style.left = "0px";
    el.style.top = "0px";
}

function setYTPlaylistPhone() {
    const el = document.getElementById("IF03");
    el.style.width = "288px";
}
