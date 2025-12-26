// List of the 10 iframe pages
let pages = [
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

// Update the label and the content area
function updatePage() {
  document.getElementById("pageLabel").innerText = pages[currentPage];
  document.getElementById("pageContent").innerText = "Page: " + pages[currentPage];
}

// Next page
document.getElementById("nextBtn").addEventListener("click", function () {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

// Previous page
document.getElementById("prevBtn").addEventListener("click", function () {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

// Initialise display
updatePage();
