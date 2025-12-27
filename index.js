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
    hideFrame("Calendar");
    hideFrame("GoogleSheet");
    hideFrame("Pastebox");
    hideFrame("Weather");
    hideFrame("Clock");
    hideFrame("Toolbox");

    setMsgHeaderPhone();
    setYTPlaylistPhone();
    setJaseworld2Phone();
    setBackgroundPhone();
}

function applyDesktopMode() {
    showFrame("Pastebox");
    showFrame("Weather");
    showFrame("Clock");
    showFrame("Toolbox");

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
