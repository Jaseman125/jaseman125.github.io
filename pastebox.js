// Load text from pastebox.txt into the textarea
fetch("pastebox.txt")
    .then(response => response.text())
    .then(text => {
        document.getElementById("box").value = text;
    })
    .catch(() => {
        document.getElementById("box").value = "Unable to load pastebox.txt";
    });

// COPY button logic
document.getElementById("copyBtn").addEventListener("click", () => {
    const box = document.getElementById("box");
    box.select();
    document.execCommand("copy");
});
