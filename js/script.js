

// Get the button
let mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Change navbar style on scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("mainNavbar");
  const logo = document.getElementById("navbarLogo");

  if (window.scrollY > 50) { // change after 50px
    navbar.classList.add("navbar-scrolled");
    logo.src='images/logo_dark.png' // swap logo
  } else {
    navbar.classList.remove("navbar-scrolled");
    logo.src = "images/logo.png"; // original logo
  }
});
