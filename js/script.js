// js/script.js

// Toggle responsive navigation menu
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Smooth Scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Check if the link is internal
        var targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Show or hide the scroll-to-top button
window.onscroll = function() {
    var scrollBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

// Scroll to top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Animations on Scroll
function revealOnScroll() {
    var fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(function(element) {
        var elementTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 50) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
