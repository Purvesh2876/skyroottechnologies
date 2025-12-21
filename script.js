// --- MOBILE NAV TOGGLE ---
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const closeBtn = document.querySelector('.close-menu'); // Select the new X button

    // Function to Toggle Menu
    const toggleMenu = () => {
        // Toggle Nav Class
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation (Turn into X)
        burger.classList.toggle('toggle');
    };

    // Event Listener for Burger
    if (burger) {
        burger.addEventListener('click', toggleMenu);
    }

    // Event Listener for Close Button (X)
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleMenu);
    }
}

navSlide();


// --- HEADER SCROLL EFFECT (Transparent to Black) ---
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');

    // When scroll is greater than 50px, add the 'sticky' class
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// --- DRONE PARALLAX (Cinematic Depth) ---
const drone = document.getElementById('drone-hero');
const giantText = document.querySelector('.giant-text');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    // Check if elements exist before animating
    if (drone && giantText && heroSection) {
        const scrollVal = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        // Only animate when we are in or near the hero section
        if (scrollVal < heroHeight) {
            // Drone moves down slowly (Foreground)
            drone.style.transform = `translateY(${scrollVal * 0.4}px)`;

            // Text moves down slower (Background) creating depth separation
            giantText.style.transform = `translateY(${scrollVal * 0.2}px)`;
        }
    }
});