'use strict';
// navbar.js

(function () {
  var siteHeader = document.querySelector('.site-header');
  var navbarBlock = siteHeader.querySelector('.navbar');
  var menuToggle = siteHeader.querySelector('.toggle');
  var iconBurger = menuToggle.querySelector('.toggle__icon--burger');
  var iconClose = menuToggle.querySelector('.toggle__icon--close');

  var navbarList = navbarBlock.querySelector('.nav-list');
  var logoLight = navbarBlock.querySelector('.logo-light');
  var logoDark = navbarBlock.querySelector('.logo-dark');

  if (navbarList) {
    navbarList.classList.add('nav-list--closed');
    navbarList.classList.add('nav-list--outflow');
  }

  if (menuToggle) {
    menuToggle.classList.add('toggle--active');
  }

  function checkClickToggle() {
    if (iconBurger && iconClose) {
      iconBurger.classList.toggle('toggle__icon--active');
      iconClose.classList.toggle('toggle__icon--active');
      navbarList.classList.toggle('nav-list--closed');
      logoLight.classList.toggle('logo-light--inactive');
      logoDark.classList.toggle('logo-dark--active');
    }
  }

  function activatingMenu() {
    menuToggle.addEventListener('click', checkClickToggle);
    siteHeader.classList.add('site-header--js-active');
    logoLight.classList.toggle('logo-light--inactive');
    logoDark.classList.toggle('logo-dark--active');
  }

  window.navbar = {
    activatingMenu: activatingMenu,
  };
})();
