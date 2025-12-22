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
            document.body.style.backgroundColor =
                `rgb(${rSlider.value}, ${gSlider.value}, ${bSlider.value})`;
        }

        function updateImageOpacity() {
            bgLayer.style.opacity = opacitySlider.value / 100;
        }

        function updateImage() {
            const item = bgImages[currentImageIndex];
            nameSpan.textContent = item.name;
            bgLayer.style.backgroundImage = `url('${item.url}')`;
        }

        prevBtn.onclick = () => {
            currentImageIndex = (currentImageIndex - 1 + bgImages.length) % bgImages.length;
            updateImage();
        };

        nextBtn.onclick = () => {
            currentImageIndex = (currentImageIndex + 1) % bgImages.length;
            updateImage();
        };

        rSlider.oninput = updateSolidBackground;
        gSlider.oninput = updateSolidBackground;
        bSlider.oninput = updateSolidBackground;
        opacitySlider.oninput = updateImageOpacity;

        resetBtn.onclick = () => {
            rSlider.value = 255;
            gSlider.value = 255;
            bSlider.value = 255;
            opacitySlider.value = 100;
            currentImageIndex = 0;
            updateSolidBackground();
            updateImage();
            updateImageOpacity();
        };

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

        // Initial states
        toggleMsg.checked   = true;
        toggleYT.checked    = true;
        toggleJW.checked    = true;
        toggleClock.checked = true;

        msgHeaderFrame.style.opacity = 1;
        ytFrameDesktop.style.opacity = 1;
        jwFrameDesktop.style.opacity = 1;
        clockFrame.style.opacity = 0.5;

        // Visibility toggles
        toggleMsg.oninput = () => {
            msgHeaderFrame.style.display = toggleMsg.checked ? "block" : "none";
        };

        toggleYT.oninput = () => {
            ytFrameDesktop.style.display = toggleYT.checked ? "block" : "none";
        };

        toggleJW.oninput = () => {
            jwFrameDesktop.style.display = toggleJW.checked ? "block" : "none";
        };

        toggleClock.oninput = () => {
            clockFrame.style.display = toggleClock.checked ? "block" : "none";
        };

        // Opacity sliders
        opacityMsg.oninput = () => {
            msgHeaderFrame.style.opacity = opacityMsg.value / 100;
        };

        opacityYT.oninput = () => {
            ytFrameDesktop.style.opacity = opacityYT.value / 100;
        };

        opacityJW.oninput = () => {
            jwFrameDesktop.style.opacity = opacityJW.value / 100;
        };

        opacityClock.oninput = () => {
            clockFrame.style.opacity = opacityClock.value / 100;
        };

        // -----------------------------
        // CLOCK PONG MODE (TIER 3 CHAOS)
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

                    let x = 100;
                    let y = 100;

                    // TIER 3 VELOCITY
                    let vx = 28;
                    let vy = 22;

                    // Right-edge compensation
                    const buffer = -80;

                    function bounce() {
                        const w = window.innerWidth;
                        const h = window.innerHeight;
                        const rect = weather.getBoundingClientRect();

                        x += vx;
                        y += vy;

                        if (x < 0) vx *= -1;
                        if (x + rect.width > w + buffer) vx *= -1;

                        if (y < 0) vy *= -1;
                        if (y + rect.height > h) vy *= -1;

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
