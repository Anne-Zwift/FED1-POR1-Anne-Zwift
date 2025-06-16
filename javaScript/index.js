let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let gradientBtn = document.querySelector('.gradient-btn');
let contactSection = document.querySelector('#contact');
const navLinks = document.querySelectorAll('.navbar a');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

gradientBtn.addEventListener("click", (event) => {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth"});
  //gradientBtn.classList.toggle("clicked");
});

