const banner = document.getElementById('banner');
const bannerMsg = document.getElementById('banner-msg');

const currentDate = new Date();
const currentDay = currentDate.getDay();

// if it's Monday, Tuesday, or Wednesday display the banner
if (currentDay === 1 || currentDay == 2 || currentDay === 3) {
  banner.style.display = 'block';
  bannerMsg.textContent = `Save the Date: The Chamber of Commerce will have a Meet and Greet on Wednesday at 7:00 p.m.`;
// if it's any other day, hide the banner
} else {
    banner.style.display = 'none';
}