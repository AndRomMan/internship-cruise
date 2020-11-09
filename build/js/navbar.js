'use strict';
// navbar.js

(function () {
  var siteHeader = document.querySelector('.site-header');
  // var navbarBlock = document.querySelector('.navbar');
  var menuToggle = document.querySelector('.toggle');
  var iconBurger = document.querySelector('.toggle__icon--burger');
  var iconClose = document.querySelector('.toggle__icon--close');

  var navbarList = document.querySelector('.nav-list');
  var logoLight = document.querySelector('.logo-light');
  var logoDark = document.querySelector('.logo-dark');

  if (navbarList) {
    navbarList.classList.add('nav-list--closed');
    navbarList.classList.add('nav-list--outflow');
  }

  if (menuToggle) {
    menuToggle.classList.add('toggle--active');
  }

  function checkClickToggle() {
    if (iconBurger && iconClose) {
      if (iconBurger) {
        iconBurger.classList.toggle('toggle__icon--active');
      }

      if (iconClose) {
        iconClose.classList.toggle('toggle__icon--active');
      }

      if (navbarList) {
        navbarList.classList.toggle('nav-list--closed');
      }

      if (logoLight) {
        logoLight.classList.toggle('logo-light--inactive');
      }

      if (logoDark) {
        logoDark.classList.toggle('logo-dark--active');
      }
    }
  }

  function activatingMenu() {
    if (menuToggle) {
      menuToggle.addEventListener('click', checkClickToggle);
    }

    if (siteHeader) {
      siteHeader.classList.add('site-header--js-active');
    }

    if (logoLight) {
      logoLight.classList.toggle('logo-light--inactive');
    }

    if (logoDark) {
      logoDark.classList.toggle('logo-dark--active');
    }
  }

  window.navbar = {
    activatingMenu: activatingMenu,
  };
})();

//# sourceMappingURL=navbar.js.map
