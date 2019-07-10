// Reclaim screen space
// runs `code` when the button is clicked
// Inspired by the original bookmarklet by Alisdair McDiarmid:
// https://alisdair.mcdiarmid.org/kill-sticky-headers/

'use strict';

const code = `(() => {
  var i, elements = document.querySelectorAll('body *');

    for (i = 0; i < elements.length; i++) {
      if (["sticky", "fixed"].includes(getComputedStyle(elements[i]).position)) {
        elements[i].parentNode.removeChild(elements[i]);
      }
    }

  var bodyelem = document.querySelector('body');
  bodyelem.style.overflow = 'scroll';
})()`

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript({ code });
});
