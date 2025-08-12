const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    link.classList.add('active');
    const targetId = link.dataset.section;
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add('active');
    window.location.hash = targetId;

    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (window.innerWidth <= 800 && sidebar && overlay) {
      sidebar.classList.remove('open');
      overlay.style.display = 'none';
    }
  });
});

// Portfolio category filter
const categoryBtns = document.querySelectorAll('.category-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    categoryBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const category = this.getAttribute('data-category');
    portfolioCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    links.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    const nav = document.querySelector(`.nav-link[data-section="${hash}"]`);
    const section = document.getElementById(hash);
    if (nav && section) {
      nav.classList.add('active');
      section.classList.add('active');
    }
  } else {
    links[0].classList.add('active');
    sections[0].classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.avatar-slider .profile-image');
  if (images.length > 0) {
    let current = 0;
    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 1000); 
  }
});

// Hamburger menu logic
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (hamburger && sidebar && overlay) {
    hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
    });
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.style.display = 'none';
    });
  }
});