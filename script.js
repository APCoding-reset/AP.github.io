// ─────────────────────────────────────────────
// 1. PAGE SWITCHING (desktop only)
//    showPage() hides all pages and shows the
//    one you clicked. On mobile CSS overrides
//    this so all pages are always visible.
// ─────────────────────────────────────────────
function showPage(pageId, clickedLink) {

  // Only run page switching on desktop (wider than 768px)
  if (window.innerWidth <= 768) return;

  // Hide all pages
  document.querySelectorAll('.page').forEach(function(page) {
    page.classList.remove('active');
  });

  // Show the selected page
  document.getElementById('page-' + pageId).classList.add('active');

  // Update active nav link highlight
  document.querySelectorAll('.nav-item').forEach(function(link) {
    link.classList.remove('active');
  });

  // Highlight the clicked link (if one was passed in)
  if (clickedLink && clickedLink.classList.contains('nav-item')) {
    clickedLink.classList.add('active');
  } else {
    // If called from a button (not nav), find and highlight the matching nav item
    document.querySelectorAll('.nav-item').forEach(function(link) {
      if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
        link.classList.add('active');
      }
    });
  }

  // Scroll to top of page when switching
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-trigger fade-in animations for the new page
  document.querySelectorAll('#page-' + pageId + ' .fade-in').forEach(function(el) {
    el.classList.remove('visible');
    setTimeout(function() {
      observer.observe(el);
    }, 50);
  });
}


// ─────────────────────────────────────────────
// 2. HAMBURGER MENU (mobile nav toggle)
// ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});


// ─────────────────────────────────────────────
// 3. SCROLL FADE-IN ANIMATION
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
