document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // Navigation Background On Scroll
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      videoPlayer.src = '';
    }
  });
});

// Navigation Background On Scroll
window.addEventListener('scroll', function () {
  const navbar = this.document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
