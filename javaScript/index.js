let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let gradientBtn = document.querySelector('.gradient-btn');
let contactSection = document.querySelector('#contact');

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

gradientBtn.addEventListener("click", (event) => {
  event.preventDefault();
  contactSection.scrollIntoView({ behavior: "smooth"});
  //gradientBtn.classList.toggle("clicked");
});

