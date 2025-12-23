// Load JSON text into the textarea
fetch("pastebox.json")
    .then(response => response.json())
    .then(data => {
        const box = document.getElementById("box");
        box.value = data.content || "";
    });

// Copy to clipboard
document.getElementById("copyBtn").addEventListener("click", () => {
    const box = document.getElementById("box");
    box.select();
    document.execCommand("copy");
});
