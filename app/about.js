const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close');
const links = document.querySelectorAll('a');
const url = window.location.href;
const handelBurgerBox = () => {
  mobileMenu.classList.toggle('active');
};

burger.addEventListener('click', handelBurgerBox);

const handelCloseMenu = () => {
  mobileMenu.classList.toggle('active');
};
closeMenu.addEventListener('click', handelCloseMenu);

links.forEach((link) => {
  if (link.href === url) link.id = 'active-link';
});
