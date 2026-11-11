/* ══════════════════════════════════════════
   MIZAEL PORTFOLIO — script.js
══════════════════════════════════════════ */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
});

// ── Active nav link ──
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
}

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Skill bars (níveis de familiaridade) ──
document.querySelectorAll('.skill-group').forEach(group => {
  const groupObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          const w = bar.getAttribute('data-w');
          if (w) setTimeout(() => { bar.style.width = w + '%'; }, 200);
        });
        groupObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  groupObs.observe(group);
});

// ── Modal ──
function openModal(imgSrc, caption) {
  const overlay = document.getElementById('modal-overlay');
  const img     = document.getElementById('modal-img');
  const cap     = document.getElementById('modal-caption');
  img.src       = imgSrc;
  img.alt       = caption || '';
  cap.textContent = caption || '';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ── Contact form ──
// Site estático (sem backend): ao enviar, abre o aplicativo de e-mail do visitante
// com a mensagem já preenchida, para que ela realmente chegue até mim.
const CONTACT_EMAIL = 'mizaellandreis2016@gmail.com';

function handleSend() {
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.style.borderColor = '#ef4444';
      setTimeout(() => input.style.borderColor = '', 2000);
    }
  });
  if (!valid) return;

  const [nameEl, emailEl, msgEl] = inputs;
  const subject = `Contato pelo portfólio — ${nameEl.value.trim()}`;
  const body = `${msgEl.value.trim()}\n\n—\n${nameEl.value.trim()}\n${emailEl.value.trim()}`;
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  inputs.forEach(i => i.value = '');
  const msg = document.getElementById('formMsg');
  msg.classList.remove('hidden');
  setTimeout(() => msg.classList.add('hidden'), 6000);
}

// ── Cursor glow ──
let mouseGlow = null;
document.addEventListener('mousemove', (e) => {
  if (!mouseGlow) {
    mouseGlow = document.createElement('div');
    mouseGlow.style.cssText = `
      position:fixed;width:280px;height:280px;border-radius:50%;
      background:radial-gradient(circle,rgba(37,99,235,0.08),transparent 70%);
      pointer-events:none;z-index:0;transform:translate(-50%,-50%);
      transition:left 0.12s,top 0.12s;
    `;
    document.body.appendChild(mouseGlow);
  }
  mouseGlow.style.left = e.clientX + 'px';
  mouseGlow.style.top  = e.clientY + 'px';
});

// ── Page entrance ──
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => { document.body.style.opacity = '1'; });
});
