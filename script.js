// Basic interactivity: theme toggle, burger menu and year
(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle (light/dark simple)
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-theme');
    themeToggle.textContent = document.documentElement.classList.contains('light-theme') ? '☀️' : '🌙';
  });

  // Burger menu for mobile
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger?.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = '';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.gap = '10px';
    }
  });

  // Smooth scroll for native links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
        if (navLinks.style.display === 'flex' && window.innerWidth < 880) navLinks.style.display = '';
      }
    });
  });
})();
