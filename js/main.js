
// scroll up button


// Get the button
const scrollToTopBtn = document.getElementById("myBtn");

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
