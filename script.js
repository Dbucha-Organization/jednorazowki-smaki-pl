document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const warn = document.querySelector('.warn');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            warn.classList.toggle('active');
            // Animate hamburger icon (optional simple toggle)
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // --- Hero Slider ---
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');

    if (sliderWrapper && slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;
        const slideInterval = 4000; // 4 seconds

        function moveToNextSlide() {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            updateSlider();
        }

        function updateSlider() {
            const offset = -(currentIndex * 100);
            sliderWrapper.style.transform = `translateX(${offset}%)`;
        }

        // Autoplay
        setInterval(moveToNextSlide, slideInterval);
    }
});
