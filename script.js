// script.js - Lively and realistic interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Reveal on scroll
    const revealElements = document.querySelectorAll('section, .reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < windowHeight - 60) {
                el.style.opacity = 1;
                el.style.transform = 'none';
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Parallax effect for hero image
    const heroImg = document.querySelector('section.relative img');
    if (heroImg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            heroImg.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
        });
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}); 