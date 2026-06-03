// Init Lucide icons (script runs after DOM is parsed due to defer)
if (window.lucide) {
  lucide.createIcons();
} else {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.lucide) lucide.createIcons();
  });
}

// Nav: add .scrolled class past 80px
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

// Hamburger menu
var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('nav-links');

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open navigation menu');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', function () {
  var isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on nav link click
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// Close on outside tap
document.addEventListener('click', function (e) {
  if (navLinks.classList.contains('open') && !nav.contains(e.target)) {
    closeMenu();
  }
});

// Scroll-triggered reveal via IntersectionObserver
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

// Calendly popup — returns false to prevent default only when popup succeeds,
// otherwise returns undefined so the anchor's href fallback fires
function openCalendly() {
  var url = 'https://calendly.com/izakpieterkruger1/free-discovery-call';
  if (window.Calendly) {
    try {
      Calendly.initPopupWidget({ url: url });
      return false;
    } catch (e) {}
  }
}

// Testimonial carousel dots
(function () {
  var track = document.getElementById('testimonial-track');
  var dots  = document.querySelectorAll('.tdot');
  if (!track || !dots.length) return;

  function setActiveDot(index) {
    dots.forEach(function (dot, i) {
      dot.classList.toggle('tdot--active', i === index);
    });
  }

  // Dot click → scroll to card
  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      var index = parseInt(dot.getAttribute('data-index'), 10);
      var cards = track.querySelectorAll('.testimonial-card');
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    });
  });

  // Track scroll → update active dot
  track.addEventListener('scroll', function () {
    var cards = track.querySelectorAll('.testimonial-card');
    var trackLeft = track.getBoundingClientRect().left;
    var closest = 0;
    var minDist = Infinity;
    cards.forEach(function (card, i) {
      var dist = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveDot(closest);
  }, { passive: true });
}());
