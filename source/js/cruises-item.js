'use strict';
// cruises-item.js

(function () {
  var cruisesCards = document.querySelectorAll('.cruises-item');
  var cruisesCardsLength = cruisesCards.length;

  function cruiseCardClickHandler() {
    this.classList.toggle('cruises-item--js');
  }

  function cruisesCardsIni() {
    if (cruisesCards) {
      for (var key = 0; key < cruisesCardsLength; key++) {
        cruisesCards[key].classList.add('cruises-item--js');
        cruisesCards[key].addEventListener('click', cruiseCardClickHandler);
      }
    }
  }

  cruisesCardsIni();

  window.cruisesItem = {
    // cruisesCardsIni: cruisesCardsIni,
  };
})();
