// Variables
let open = document.getElementById('menu-open');
let close = document.getElementById('menu-close');
let nav = document.getElementById('nav');
let about = nav.querySelector('#about-desktop');
let work = nav.querySelector('#work-desktop');
let knowledge = nav.querySelector('#knowledge-desktop');
let contact = nav.querySelector('#contact-desktop');

// Functions
function menuToggle() {
  nav.classList.toggle('close');
}
function resizeViewport() {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
}
// Actions
resizeViewport();
window.addEventListener('resize', resizeViewport);
open.addEventListener('click', menuToggle, false);
close.addEventListener('click', menuToggle, false);
about.addEventListener('click', menuToggle, false);
work.addEventListener('click', menuToggle, false);
knowledge.addEventListener('click', menuToggle, false);
contact.addEventListener('click', menuToggle, false);
