(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const slider = document.querySelector("#slider");
    const slideItems = Array.from(slider.children);
    const nextBtn = document.querySelector("#nextBtn");
    const prevBtn = document.querySelector("#prevBtn");
    slideItems.forEach(((slide, index) => {
        if (index > 0) slide.classList.add("hidden");
        slide.dataset.index = index;
        slideItems[0].setAttribute("data-active", "");
        slide.addEventListener("click", (function(e) {
            showNextSlide("next");
        }));
    }));
    nextBtn.onclick = function() {
        showNextSlide("next");
    };
    prevBtn.onclick = function() {
        showNextSlide("prev");
    };
    function showNextSlide(direction) {
        const currentSlide = slider.querySelector("[data-active]");
        const currentSlideIndex = +currentSlide.dataset.index;
        currentSlide.classList.add("hidden");
        currentSlide.removeAttribute("data-active");
        let nextSlideIndex;
        if ("next" === direction) nextSlideIndex = slideItems.length === currentSlideIndex + 1 ? 0 : currentSlideIndex + 1; else if ("prev" === direction) nextSlideIndex = 0 === currentSlideIndex ? slideItems.length - 1 : currentSlideIndex - 1;
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove("hidden");
        nextSlide.setAttribute("data-active", "");
    }
    window["FLS"] = true;
    isWebp();
})();