// -----------------------------
// CLOCK PONG MODE (TIER 2 CHAOS + RIGHT EDGE +190px FIX)
// -----------------------------
const clockPongToggle = document.getElementById("clockpong-toggle");

if (clockPongToggle) {
    clockPongToggle.addEventListener("change", () => {
        if (!clockPongToggle.checked) return;

        // Fade out background image layer
        if (bgLayer) {
            bgLayer.style.opacity = "0";
        }

        // Hide the floating clock
        if (clockFrame) {
            clockFrame.style.display = "none";
        }

        // Make the weather widget bounce around the screen
        const weather = document.querySelector(".floating-weather");
        if (weather) {
            weather.style.position = "fixed";
            weather.style.zIndex = "9999";

            // Start from current position if any
            let startX = parseInt(weather.style.left, 10);
            let startY = parseInt(weather.style.top, 10);
            if (isNaN(startX)) startX = 100;
            if (isNaN(startY)) startY = 100;

            let x = startX;
            let y = startY;

            // TIER 2 VELOCITY
            let vx = 18;
            let vy = 14;

            // Right-edge extension based on your measurement
            const rightExtension = 190;

            function bounce() {
                const w = window.innerWidth;
                const h = window.innerHeight;

                const elemWidth  = weather.offsetWidth;
                const elemHeight = weather.offsetHeight;

                const rightLimit  = (w - elemWidth) + rightExtension;
                const bottomLimit = h - elemHeight;

                x += vx;
                y += vy;

                // Left edge
                if (x < 0) {
                    x = 0;
                    vx *= -1;
                }

                // Right edge (extended by +190px)
                if (x > rightLimit) {
                    x = rightLimit;
                    vx *= -1;
                }

                // Top edge
                if (y < 0) {
                    y = 0;
                    vy *= -1;
                }

                // Bottom edge
                if (y > bottomLimit) {
                    y = bottomLimit;
                    vy *= -1;
                }

                weather.style.left = x + "px";
                weather.style.top  = y + "px";

                requestAnimationFrame(bounce);
            }

            bounce();
        }

        // Lock the toggle until refresh
        clockPongToggle.disabled = true;
    });
}
