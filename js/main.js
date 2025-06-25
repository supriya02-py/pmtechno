// This file contains JavaScript functionality for the PM Techno website.
// It includes menu toggling, smooth scrolling, back to top, and certificates carousel.

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Smooth Scrolling for ALL Anchor Links
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Certificates/Product Carousel ---
    const track = document.querySelector('.carousel-track');
    if (track) {
        const cards = Array.from(track.children);
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const cardsPerSlide = 3;
        let currentIndex = 0;

        function getCardWidth() {
            return cards[0].offsetWidth + 30; // card width + gap
        }

        function updateCarousel() {
            const cardWidth = getCardWidth();
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= cards.length - cardsPerSlide;
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - cardsPerSlide) {
                currentIndex++;
                updateCarousel();
            }
        });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();

        // Filter logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                cards.forEach(card => {
                    card.style.display = (category === null || card.dataset.category === category) ? '' : 'none';
                });
                // Reset carousel to first slide after filter
                currentIndex = 0;
                updateCarousel();
            });
        });

        // Show only automotive products by default
        const defaultFilterBtn = document.querySelector('.filter-btn.active');
        if (defaultFilterBtn) {
            defaultFilterBtn.click();
        }
    }

    // --- Facility filter functionality ---
    const facilityBtns = document.querySelectorAll('.facility-btn');
    const facilityGroups = document.querySelectorAll('.facility-group');

    if (facilityBtns.length && facilityGroups.length) {
        facilityBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                facilityBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                facilityGroups.forEach(group => {
                    if (group.getAttribute('data-category') === category) {
                        group.style.display = '';
                    } else {
                        group.style.display = 'none';
                    }
                });
            });
        });

        // Show only automotive by default
        document.querySelector('.facility-btn.active').click();
    }
});

// Facility carousel slide function
function slideFacility(dir) {
    const track = document.getElementById('facility-carousel-track');
    const imgs = track.querySelectorAll('img');
    let visible = 3;
    if (window.innerWidth <= 600) visible = 1;
    else if (window.innerWidth <= 900) visible = 2;
    const imgWidth = imgs[0].offsetWidth + 10; // image width + gap
    let idx = parseInt(track.getAttribute('data-idx')) || 0;
    idx += dir;
    if (idx < 0) idx = 0;
    if (idx > imgs.length - visible) idx = imgs.length - visible;
    track.style.transform = `translateX(${-idx * imgWidth}px)`;
    track.setAttribute('data-idx', idx);
}

// Reset carousel on resize
window.addEventListener('resize', () => {
    const track = document.getElementById('facility-carousel-track');
    if (track) {
        track.style.transform = 'translateX(0)';
        track.setAttribute('data-idx', 0);
    }
});
