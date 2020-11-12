'use strict';
// navbar.js

(function () {
  var contactsMap = document.querySelector('.contacts-map');
  var googltMapTemplate = document.querySelector('#google-map').content.querySelector('iframe');
  var mapPlaceholder = document.querySelector('.map-placeholder');

  function setGoogleMap() {
    var commentFragment = document.createDocumentFragment();
    var newMapIframe = googltMapTemplate.cloneNode(true);

    commentFragment.append(newMapIframe);
    contactsMap.append(commentFragment);

    contactsMap.removeEventListener('click', checkMapClick);
    contactsMap.removeEventListener('mouseover', checkMapMouseover);
    contactsMap.removeEventListener('mouseout', checkMapMouseout);

    if (!mapPlaceholder.classList.contains('map-placeholder--inactive')) {
      mapPlaceholder.classList.add('map-placeholder--inactive');
    }
  }

  function checkMapClick() {
    setGoogleMap();
    // console.log(!contactsMap.classList.contains('contacts-map__placeholder--inactive'));
  }

  function checkMapMouseover() {
    if (mapPlaceholder) {
      mapPlaceholder.classList.toggle('map-placeholder--inactive');
    }
  }

  function checkMapMouseout() {
    if (mapPlaceholder) {
      mapPlaceholder.classList.toggle('map-placeholder--inactive');
    }
  }

  function activatingGoogleMap() {
    if (contactsMap) {
      contactsMap.addEventListener('click', checkMapClick);
      contactsMap.addEventListener('mouseover', checkMapMouseover);
      contactsMap.addEventListener('mouseout', checkMapMouseout);
    }
  }

  // activatingGoogleMap();

  window.contactsMap = {
    activatingGoogleMap: activatingGoogleMap,
  };
})();

//# sourceMappingURL=contacts-map.js.map
