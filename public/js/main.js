/* =============================================
   CESAR RIAT — main.js
   Navbar · Counters · Scroll Animations
   Lazy Video · FAQ · Media Filters
   ============================================= */

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── INTERSECTION OBSERVER — fade-in ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '120px 0px 120px 0px' });

fadeEls.forEach(el => observer.observe(el));

// Activar elementos que ya están en viewport al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      el.classList.add('visible');
    }
  });
});

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    if (target >= 1000) {
      el.textContent = prefix + current.toLocaleString('es-AR');
    } else {
      el.textContent = prefix + current;
    }

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// ── LAZY VIDEO LOADING ──
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  const btn = wrapper.querySelector('.play-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const src = wrapper.dataset.src;
    const title = wrapper.dataset.title || 'Video de César Riat';
    if (!src) return;

    const iframe = document.createElement('iframe');
    iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
    iframe.title = title;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;border-radius:12px;';

    wrapper.style.position = 'relative';
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
});

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-item h3').forEach(h3 => {
  h3.addEventListener('click', () => {
    const item = h3.parentElement;
    const isOpen = item.classList.contains('open');
    // Close all others
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── MEDIA FILTER (medios.html) ──
const filtros = document.querySelectorAll('.filtro');
const notaCards = document.querySelectorAll('.nota-card');
const counter = document.getElementById('nota-counter');

if (filtros.length > 0) {
  filtros.forEach(btn => {
    btn.addEventListener('click', () => {
      filtros.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');

      const cat = btn.dataset.cat;
      let visible = 0;

      notaCards.forEach(card => {
        const match = cat === 'todos' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !match);
        if (match) visible++;
      });

      if (counter) {
        counter.textContent = cat === 'todos'
          ? `Mostrando todas las notas (${visible})`
          : `Mostrando ${visible} nota${visible !== 1 ? 's' : ''} · categoría: ${btn.textContent}`;
      }
    });
  });

  // Init counter
  if (counter) counter.textContent = `Mostrando todas las notas (${notaCards.length})`;
}

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage ||
      (currentPage === '/' && a.getAttribute('href') === '/')) {
    a.classList.add('active');
  }
});

// ── SMOOTH SCROLL for hash links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
