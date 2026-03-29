// ─────────────────────────────────────────────
// 1. HAMBURGER MENU (mobile nav toggle)
//    Toggles the 'open' class on the nav links
//    to show/hide them on small screens.
// ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// Close menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});


// ─────────────────────────────────────────────
// 2. SCROLL FADE-IN ANIMATION
//    Watches for elements with class 'fade-in'
//    and adds 'visible' when they enter the screen.
// ─────────────────────────────────────────────
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(function(el) {
  observer.observe(el);
});
