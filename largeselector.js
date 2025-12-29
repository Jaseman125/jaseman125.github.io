let currentPage = 0;

function updateContent() {
    document.getElementById("ls-content").innerHTML = pages[currentPage];
    document.getElementById("ls-counter").innerText = currentPage;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
    } else {
        currentPage = 0; // wrap around
    }
    updateContent();
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
    } else {
        currentPage = pages.length - 1; // wrap around
    }
    updateContent();
}

document.getElementById("ls-left").addEventListener("click", prevPage);
document.getElementById("ls-right").addEventListener("click", nextPage);

updateContent(); // initial load
