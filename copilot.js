document.addEventListener("DOMContentLoaded", () => {

    // Inject weather scaling CSS (required for widget visibility)
    const style = document.createElement("style");
    style.textContent = `
        .weather-inner iframe {
            transform: scale(0.72);
            transform-origin: top left;
        }
    `;
    document.head.appendChild(style);

    // ----------------------------------
    // HTML INCLUDES (TOP LEFT / TOP RIGHT)
    // ----------------------------------
    const includes = document.querySelectorAll("[data-include]");
    let loadedCount = 0;

    includes.forEach(el => {
        fetch(el.getAttribute("data-include"))
            .then(r => r.text())
            .then(t => {
                el.innerHTML = t;
                loadedCount++;
                if (loadedCount === includes.length) initControls();
            });
    });

    function initControls() {

        // -----------------------------
        // BACKGROUND IMAGE / COLOR SYSTEM
        // -----------------------------
        const bgImages = [
            { name: "01", url: "img/backgrounds/01.png" },
            { name: "02", url: "img/backgrounds/02.png" },
            { name: "03", url: "img/backgrounds/03.png" },
            { name: "04", url: "img/backgrounds/04.png" },
            { name: "05", url: "img/backgrounds/05.png" },
            { name: "06", url: "img/backgrounds/06.png" },
            { name: "07", url: "img/backgrounds/07.png" },
            { name: "08", url: "img/backgrounds/08.png" },
            { name: "09", url: "img/backgrounds/09.png" },
            { name: "10", url: "img/backgrounds/10.png" }
        ];

        let currentImageIndex = 0;

        const rSlider = document.getElementById("r-slider");
        const gSlider = document.getElementById("g-slider");
        const bSlider = document.getElementById("b-slider");
        const opacitySlider = document.getElementById("bg-opacity");

        const prevBtn = document.getElementById("bg-prev");
        const nextBtn = document.getElementById("bg-next");
        const nameSpan = document.getElementById("bg-name");

        const resetBtn = document.getElementById("reset-button");

        const bgLayer = document.getElementById("bg-image-layer");

        function updateSolidBackground() {
            if (!rSlider || !gSlider || !bSlider) return;
            document.body.style.backgroundColor =
                `rgb(${rSlider.value}, ${gSlider.value}, ${bSlider.value})`;
        }

        function updateImageOpacity() {
            if (!bgLayer || !opacitySlider) return;
            bgLayer.style.opacity = opacitySlider.value / 100;
        }

        function updateImage() {
            if (!bgLayer || !nameSpan) return;
            const item = bgImages[currentImageIndex];
            nameSpan.textContent = item.name;
            bgLayer.style.backgroundImage = `url('${item.url}')`;
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentImageIndex = (currentImageIndex - 1 + bgImages.length) % bgImages.length;
                updateImage();
            };
        }

        if (nextBtn) {
            nextBtn.onclick = () => {
                currentImageIndex = (currentImageIndex + 1) % bgImages.length;
                updateImage();
            };
        }

        if (rSlider) rSlider.oninput = updateSolidBackground;
        if (gSlider) gSlider.oninput = updateSolidBackground;
        if (bSlider) bSlider.oninput = updateSolidBackground;
        if (opacitySlider) opacitySlider.oninput = updateImageOpacity;

        if (resetBtn) {
            resetBtn.onclick = () => {
                if (rSlider) rSlider.value = 255;
                if (gSlider) gSlider.value = 255;
                if (bSlider) bSlider.value = 255;
                if (opacitySlider) opacitySlider.value = 100;
                currentImageIndex = 0;
                updateSolidBackground();
                updateImage();
                updateImageOpacity();
            };
        }

        updateSolidBackground();
        updateImage();
        updateImageOpacity();

        // -----------------------------
        // MAIN FLOATING LAYERS / TOGGLES
        // -----------------------------
        const msgHeaderFrame   = document.querySelector(".msgheader-iframe");
        const ytFrameDesktop   = document.querySelector(".desktop-yt-iframe");
        const jwFrameDesktop   = document.querySelector(".desktop-jaseworld-iframe");
        const clockFrame       = document.querySelector(".floating-clock");

        const toggleMsg   = document.getElementById("toggle-msgheader");
        const toggleYT    = document.getElementById("toggle-yt");
        const toggleJW    = document.getElementById("toggle-jaseworld");
        const toggleClock = document.getElementById("toggle-clock");

        const opacityMsg   = document.getElementById("opacity-msgheader");
        const opacityYT    = document.getElementById("opacity-yt");
        const opacityJW    = document.getElementById("opacity-jaseworld");
        const opacityClock = document.getElementById("opacity-clock");

        // Initial states (defensive checks)
        if (toggleMsg)   toggleMsg.checked   = true;
        if (toggleYT)    toggleYT.checked    = true;
        if (toggleJW)    toggleJW.checked    = true;
        if (toggleClock) toggleClock.checked = true;

        if (msgHeaderFrame) msgHeaderFrame.style.opacity = 1;
        if (ytFrameDesktop) ytFrameDesktop.style.opacity = 1;
        if (jwFrameDesktop) jwFrameDesktop.style.opacity = 1;
        if (clockFrame)     clockFrame.style.opacity     = 0.5;

        // Visibility toggles
        if (toggleMsg && msgHeaderFrame) {
            toggleMsg.oninput = () => {
                msgHeaderFrame.style.display = toggleMsg.checked ? "block" : "none";
            };
        }

        if (toggleYT && ytFrameDesktop) {
            toggleYT.oninput = () => {
                ytFrameDesktop.style.display = toggleYT.checked ? "block" : "none";
            };
        }

        if (toggleJW && jwFrameDesktop) {
            toggleJW.oninput = () => {
                jwFrameDesktop.style.display = toggleJW.checked ? "block" : "none";
            };
        }

        if (toggleClock && clockFrame) {
            toggleClock.oninput = () => {
                clockFrame.style.display = toggleClock.checked ? "block" : "none";
            };
        }

        // Opacity sliders
        if (opacityMsg && msgHeaderFrame) {
            opacityMsg.oninput = () => {
                msgHeaderFrame.style.opacity = opacityMsg.value / 100;
            };
        }

        if (opacityYT && ytFrameDesktop) {
            opacityYT.oninput = () => {
                ytFrameDesktop.style.opacity = opacityYT.value / 100;
            };
        }

        if (opacityJW && jwFrameDesktop) {
            opacityJW.oninput = () => {
                jwFrameDesktop.style.opacity = opacityJW.value / 100;
            };
        }

        if (opacityClock && clockFrame) {
            opacityClock.oninput = () => {
                clockFrame.style.opacity = opacityClock.value / 100;
            };
        }

        // -----------------------------
        // CLOCK PONG MODE
        // TIER 2 CHAOS + RIGHT EDGE +190px FIX
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
                    const rightExtension = 140;

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
    }
});
