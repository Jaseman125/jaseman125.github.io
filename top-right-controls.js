document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------
    // DESKTOP FLOATING IFRAMES
    // ----------------------------------
    const msgHeaderFrame   = window.parent.document.querySelector(".msgheader-iframe");
    const ytFrameDesktop   = window.parent.document.querySelector(".desktop-yt-iframe");
    const jwFrameDesktop   = window.parent.document.querySelector(".desktop-jaseworld-iframe");
    const clockFrame       = window.parent.document.querySelector(".floating-clock");
    const weatherFrame     = window.parent.document.querySelector(".floating-weather");
    const pasteboxFrame    = window.parent.document.querySelector(".desktop-pastebox-iframe");
    const bgLayer          = window.parent.document.getElementById("bg-image-layer");

    // ----------------------------------
    // CONTROLS INSIDE THIS IFRAME
    // ----------------------------------
    const toggleMsg   = document.getElementById("toggle-msgheader");
    const toggleYT    = document.getElementById("toggle-yt");
    const toggleJW    = document.getElementById("toggle-jaseworld");
    const toggleClock = document.getElementById("toggle-clock");

    const opacityMsg   = document.getElementById("opacity-msgheader");
    const opacityYT    = document.getElementById("opacity-yt");
    const opacityJW    = document.getElementById("opacity-jaseworld");
    const opacityClock = document.getElementById("opacity-clock");

    const clockPongToggle = document.getElementById("clockpong-toggle");

    // ----------------------------------
    // INITIAL STATES
    // ----------------------------------
    if (toggleMsg)   toggleMsg.checked   = true;
    if (toggleYT)    toggleYT.checked    = true;
    if (toggleJW)    toggleJW.checked    = true;
    if (toggleClock) toggleClock.checked = true;

    if (msgHeaderFrame) msgHeaderFrame.style.opacity = 1;
    if (ytFrameDesktop) ytFrameDesktop.style.opacity = 1;
    if (jwFrameDesktop) jwFrameDesktop.style.opacity = 1;
    if (clockFrame)     clockFrame.style.opacity     = 0.5;
    if (pasteboxFrame)  pasteboxFrame.style.opacity  = 0.5;

    // ----------------------------------
    // TOGGLES
    // ----------------------------------
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

    // CLOCK + WEATHER + PASTEBOX grouped toggle
    if (toggleClock) {
        toggleClock.oninput = () => {
            const state = toggleClock.checked ? "block" : "none";

            if (clockFrame)     clockFrame.style.display     = state;
            if (weatherFrame)   weatherFrame.style.display   = state;
            if (pasteboxFrame)  pasteboxFrame.style.display  = state;
        };
    }

    // ----------------------------------
    // OPACITY SLIDERS
    // ----------------------------------
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

    // CLOCK + WEATHER + PASTEBOX grouped opacity
    if (opacityClock) {
        opacityClock.oninput = () => {
            const value = opacityClock.value / 100;

            if (clockFrame)    clockFrame.style.opacity    = value;
            if (weatherFrame)  weatherFrame.style.opacity  = value;
            if (pasteboxFrame) pasteboxFrame.style.opacity = value;
        };
    }

    // ----------------------------------
    // CLOCK PONG CHAOS MODE
    // ----------------------------------
    let chaosActive = false;

    let originalBodyBg = window.parent.document.body.style.backgroundColor;
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

        // Background goes magenta
        window.parent.document.body.style.backgroundColor = "rgb(255, 0, 255)";

        if (bgLayer) {
            originalBgLayerOpacity = bgLayer.style.opacity;
            bgLayer.style.opacity = "0";
        }

        // CLOCK becomes mouse-following
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

        // WEATHER bouncing
        const weather = weatherFrame;
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

                const w = window.parent.innerWidth;
                const h = window.parent.innerHeight;

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

        // CLOCK follows mouse
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

            window.parent.addEventListener("mousemove", mouseMoveHandler);
        }
    }

    function disableChaosMode() {
        chaosActive = false;

        if (bounceAnimationId !== null) {
            cancelAnimationFrame(bounceAnimationId);
            bounceAnimationId = null;
        }

        if (mouseMoveHandler) {
            window.parent.removeEventListener("mousemove", mouseMoveHandler);
            mouseMoveHandler = null;
        }

        window.parent.document.body.style.backgroundColor = originalBodyBg || "";

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

        const weather = weatherFrame;
        if (weather && originalWeatherStyles) {
            weather.style.position = originalWeatherStyles.position;
            weather.style.left     = originalWeatherStyles.left;
            weather.style.top      = originalWeatherStyles.top;
            weather.style.zIndex   = originalWeatherStyles.zIndex;
        }
    }
});
