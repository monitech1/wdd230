
const closeBannerBtn = document.getElementById('close-banner');

// Close the banner when clicked
closeBannerBtn.addEventListener('click', () => {
  const bannerMsg = document.getElementById('banner-msg');
  banner.style.display = 'none';
});
