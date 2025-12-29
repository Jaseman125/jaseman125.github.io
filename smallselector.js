let ssCurrent = 0;

function ssUpdate() {
    document.getElementById("ss-content").innerHTML = pages[ssCurrent];
    document.getElementById("ss-counter").innerText = ssCurrent;
}

function ssNext() {
    if (ssCurrent < pages.length - 1) {
        ssCurrent++;
        ssUpdate();
    }
}

function ssPrev() {
    if (ssCurrent > 0) {
        ssCurrent--;
        ssUpdate();
    }
}

document.getElementById("ss-left").addEventListener("click", ssPrev);
document.getElementById("ss-right").addEventListener("click", ssNext);

ssUpdate();
