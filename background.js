window.addEventListener("message", function(event) {
    // Listen for the background update command relayed by index.html
    if (event.data.type === "SET_BACKGROUND") {
        const bgImage = document.getElementById("bg");
        const newUrl = event.data.url;

        if (bgImage && newUrl) {
            // Apply a quick fade out before changing the source
            bgImage.style.opacity = 0;
            
            // Wait for the fade out to finish (matching the CSS transition time)
            setTimeout(() => {
                bgImage.src = newUrl;
                // Fade back in once the new image source is set
                bgImage.style.opacity = 1;
            }, 300); 
        }
    }
});

// Initialize settings when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const bgImage = document.getElementById("bg");
    if (bgImage) {
        // Set up the CSS transition for the opacity property
        bgImage.style.transition = "opacity 0.4s ease-in-out";
        // Ensure the initial image (01.png) is visible
        bgImage.style.opacity = 1;
    }
});