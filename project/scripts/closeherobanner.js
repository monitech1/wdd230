const closeBtn = document.getElementById('close-banner');

// Close the hero banner when clicked
closeBtn.addEventListener('click', () => {
  const heroBanner = document.getElementById('hero-banner');
  heroBanner.style.display = 'none';
  closeBtn.style.display = 'none';
});