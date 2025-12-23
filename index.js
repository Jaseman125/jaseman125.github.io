// Full patched copilot.js
// Sliders now update when Chaos Mode turns on
// RGB sliders jump to 255/0/255 and opacity slider drops to 0

// ------------------------------------------------------------
// FULL FILE CONTENT BELOW
// ------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    // Inject weather scaling CSS
    const style = document.createElement("style");
    style.textContent = `
        .weather-inner iframe {
            transform: scale(0.72);
            transform-origin: top left;
        }
    `;
    document.head.appendChild(style);

    // ----------------------------------
    // HTML INCLUDES
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

        if (toggleMsg)   toggleMsg.checked   = true;
        if (toggleYT)    toggleYT.checked    = true;
        if (toggleJW)    toggleJW.checked    = true;
        if (toggleClock) toggleClock.checked = true;

        if (msgHeaderFrame) msgHeaderFrame.style.opacity = 1;
        if (ytFrameDesktop) ytFrameDesktop.style.opacity = 1;
        if (jwFrameDesktop) jwFrameDesktop.style.opacity = 1;
        if (clockFrame)     clockFrame.style.opacity     = 0.5;

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
        const state = toggleClock.checked ? "block" : "none";
        clockFrame.style.display = state;

        // NEW: hide/show weather together with clock
        const weatherFrame = document.querySelector(".floating-weather");
        if (weatherFrame) weatherFrame.style.display = state;
    };
}

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
        // CLOCK PONG CHAOS MODE (PATCHED)
        // -----------------------------
        const clockPongToggle = document.getElementById("clockpong-toggle");

        let chaosActive = false;

        let originalBodyBg = document.body.style.backgroundColor;
        let originalBgLayerOpacity = bgLayer ? bgLayer.style.opacity : "";

        let originalClockDisplay = clockFrame ? clockFrame.style.display : "";
        let originalClockPosition = clockFrame ? {
            position: clockFrame.style.position,
            left: clockFrame.style.left,
            top: clockFrame.style.top,
            zIndex: clockFrame.style.zIndex,
            pointerEvents: clockFrame.style.pointerEvents
        } : null;

        let originalWeatherStyles = null;

        let bounceAnimationId = null;
        let mouseMoveHandler = null;

        const floatingFrames = [msgHeaderFrame, ytFrameDesktop, jwFrameDesktop];
        const originalPointerEvents = new Map();

        if (clockPongToggle) {
            clockPongToggle.addEventListener("change", () => {
                if (clockPongToggle.checked) {
                    if (!chaosActive) enableChaosMode();
                } else {
                    if (chaosActive) disableChaosMode();
                }
            });
        }

        function enableChaosMode() {
            chaosActive = true;

            // Sync sliders to chaos mode
            if (rSlider) rSlider.value = 255;
            if (gSlider) gSlider.value = 0;
            if (bSlider) bSlider.value = 255;
            if (opacitySlider) opacitySlider.value = 0;

            updateSolidBackground();
            updateImageOpacity();

            originalBodyBg = document.body.style.backgroundColor;
            document.body.style.backgroundColor = "rgb(255, 0, 255)";

            if (bgLayer) {
                originalBgLayerOpacity = bgLayer.style.opacity;
                bgLayer.style.opacity = "0";
            }

            if (clockFrame) {
                originalClockDisplay = clockFrame.style.display;
                originalClockPosition = {
                    position: clockFrame.style.position,
                    left: clockFrame.style.left,
                    top: clockFrame.style.top,
                    zIndex: clockFrame.style.zIndex,
                    pointerEvents: clockFrame.style.pointerEvents
                };

                clockFrame.style.display = "block";
                clockFrame.style.position = "fixed";
                clockFrame.style.zIndex = "9998";
                clockFrame.style.pointerEvents = "none";
            }

            floatingFrames.forEach(frame => {
                if (frame) {
                    originalPointerEvents.set(frame, frame.style.pointerEvents);
                    frame.style.pointerEvents = "none";
                }
            });

            const weather = document.querySelector(".floating-weather");
            if (weather) {
                originalWeatherStyles = {
                    position: weather.style.position,
                    left: weather.style.left,
                    top: weather.style.top,
                    zIndex: weather.style.zIndex
                };

                let startX = parseInt(weather.style.left, 10);
                let startY = parseInt(weather.style.top, 10);
                if (isNaN(startX)) startX = 100;
                if (isNaN(startY)) startY = 100;

                weather.style.position = "fixed";
                weather.style.zIndex = "9999";

                let x = startX;
                let y = startY;

                let vx = 18;
                let vy = 14;

                const rightExtension = 130;

                function rectsOverlap(r1, r2) {
                    return !(
                        r1.right < r2.left ||
                        r1.left > r2.right ||
                        r1.bottom < r2.top ||
                        r1.top > r2.bottom
                    );
                }

                function bounce() {
                    if (!chaosActive) return;

                    const w = window.innerWidth;
                    const h = window.innerHeight;

                    const elemWidth  = weather.offsetWidth;
                    const elemHeight = weather.offsetHeight;

                    const rightLimit  = (w - elemWidth) + rightExtension;
                    const bottomLimit = h - elemHeight;

                    x += vx;
                    y += vy;

                    if (x < 0) {
                        x = 0;
                        vx *= -1;
                    }

                    if (x > rightLimit) {
                        x = rightLimit;
                        vx *= -1;
                    }

                    if (y < 0) {
                        y = 0;
                        vy *= -1;
                    }

                    if (y > bottomLimit) {
                        y = bottomLimit;
                        vy *= -1;
                    }

                    weather.style.left = x + "px";
                    weather.style.top  = y + "px";

                    if (clockFrame) {
                        const weatherRect = weather.getBoundingClientRect();
                        const clockRect   = clockFrame.getBoundingClientRect();

                        if (rectsOverlap(weatherRect, clockRect)) {
                            vx *= -1;
                            vy *= -1;

                            x += vx;
                            y += vy;
                            weather.style.left = x + "px";
                            weather.style.top  = y + "px";
                        }
                    }

                    bounceAnimationId = requestAnimationFrame(bounce);
                }

                bounceAnimationId = requestAnimationFrame(bounce);
            }

            if (clockFrame) {
                mouseMoveHandler = (ev) => {
                    const rect = clockFrame.getBoundingClientRect();
                    const width = rect.width;
                    const height = rect.height;

                    const x = ev.clientX - width / 2;
                    const y = ev.clientY - height / 2;

                    clockFrame.style.left = x + "px";
                    clockFrame.style.top  = y + "px";
                };

                window.addEventListener("mousemove", mouseMoveHandler);
            }
        }

        function disableChaosMode() {
            chaosActive = false;

            if (bounceAnimationId !== null) {
                cancelAnimationFrame(bounceAnimationId);
                bounceAnimationId = null;
            }

            if (mouseMoveHandler) {
                window.removeEventListener("mousemove", mouseMoveHandler);
                mouseMoveHandler = null;
            }

            document.body.style.backgroundColor = originalBodyBg || "";

            if (bgLayer) {
                bgLayer.style.opacity = originalBgLayerOpacity || "";
            }

            if (clockFrame && originalClockPosition) {
                clockFrame.style.position      = originalClockPosition.position;
                clockFrame.style.left          = originalClockPosition.left;
                clockFrame.style.top           = originalClockPosition.top;
                clockFrame.style.zIndex        = originalClockPosition.zIndex;
                clockFrame.style.pointerEvents = originalClockPosition.pointerEvents;
                clockFrame.style.display       = originalClockDisplay;
            }

            floatingFrames.forEach(frame => {
                if (frame && originalPointerEvents.has(frame)) {
                    frame.style.pointerEvents = originalPointerEvents.get(frame);
                }
            });

            const weather = document.querySelector(".floating-weather");
            if (weather && originalWeatherStyles) {
                weather.style.position = originalWeatherStyles.position;
                weather.style.left     = originalWeatherStyles.left;
                weather.style.top      = originalWeatherStyles.top;
                weather.style.zIndex   = originalWeatherStyles.zIndex;
            }
        }
    }
});

window.addEventListener("load", () => { document.body.classList.add("fade-in"); });