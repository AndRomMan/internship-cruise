'use strict';

(function () {
  function main() {
    console.log('main javascript');
  }

  main();

  var newText = 'module testing';

  window.module.print(newText);
})();
