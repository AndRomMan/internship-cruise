'use strict';
// navbar.js

(function () {
  var contactsMap = document.querySelector('.contacts-map');
  var googltMapTemplate = document.querySelector('#google-map').content.querySelector('iframe');
  var mapPlaceholder = document.querySelector('.contacts-map__placeholder');

  function activatingGoogleMap() {
    if (contactsMap) {
      contactsMap.addEventListener('click', checkMapClick);
      contactsMap.addEventListener('mouseover', checkMapMouseover);
      contactsMap.addEventListener('mouseout', checkMapMouseout);
    }
  }

  function checkMapMouseover() {
    if (mapPlaceholder) {
      mapPlaceholder.classList.toggle('contacts-map__placeholder--inactive');
    }
  }

  function checkMapMouseout() {
    if (mapPlaceholder) {
      mapPlaceholder.classList.toggle('contacts-map__placeholder--inactive');
    }
  }

  function setGoogleMap() {
    var commentFragment = document.createDocumentFragment();
    var newMapIframe = googltMapTemplate.cloneNode(true);

    commentFragment.append(newMapIframe);
    contactsMap.append(commentFragment);

    contactsMap.removeEventListener('click', checkMapClick);
    contactsMap.removeEventListener('mouseover', checkMapMouseover);
    contactsMap.removeEventListener('mouseout', checkMapMouseout);
  }

  function checkMapClick() {
    setGoogleMap();
  }

  window.contactsMap = {
    activatingGoogleMap: activatingGoogleMap,
  };
})();
