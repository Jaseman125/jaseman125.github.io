document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------
    // WEATHER SCALING CSS (KEEP)
    // ----------------------------------
    const style = document.createElement("style");
    style.textContent = `
        .weather-inner iframe {
            transform: scale(0.72);
            transform-origin: top left;
        }
    `;
    document.head.appendChild(style);

    // ----------------------------------
    // HTML INCLUDES (KEEP)
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

        // ----------------------------------
        // BACKGROUND IMAGE / COLOR SYSTEM (KEEP)
        // ----------------------------------
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

        // ----------------------------------
        // EVERYTHING BELOW THIS POINT WAS REMOVED
        // (toggles, opacity, chaos mode, desktop-only logic)
        // ----------------------------------
    }
});

// ----------------------------------
// FADE-IN EFFECT (KEEP)
// ----------------------------------
window.addEventListener("load", () => { 
    document.body.classList.add("fade-in"); 
});
