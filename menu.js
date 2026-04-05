// GESTION DU MENU MOBILE
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // SI LES ÉLÉMENTS EXISTENT, ON ACTIVE LE MENU
  if (toggleBtn && menu) {
    // MET À JOUR L'ATTRIBUT ARIA POUR L'ACCESSIBILITÉ
    const syncExpanded = () => {
      const isOpen = menu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    };

    // OUVRE/FERME LE MENU AU CLIC
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      syncExpanded();
    });

    // INITIALISATION DES ATTRIBUTS ARIA
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'menu');
  }

  // ANIMATION AU SCROLL : LES ÉLÉMENTS APPARAISSENT EN FONDU
  const toReveal = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  toReveal.forEach(el => io.observe(el));
});