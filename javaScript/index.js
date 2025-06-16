const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const gradientBtn = document.querySelector('.gradient-btn');
const contactSection = document.querySelector('#contact');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle menu icon and navbar visibility on click
if (menuIcon && navbar) {
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});
}

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

// Smooth scroll to contact section when gradient button is clicked
if (gradientBtn && contactSection) {
gradientBtn.addEventListener("click", (event) => {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth"});
  //gradientBtn.classList.toggle("clicked");
});
}
