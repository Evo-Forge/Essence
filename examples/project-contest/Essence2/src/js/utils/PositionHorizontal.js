'use strict';

module.exports = function (element) {
  var elem = element.parentElement.getBoundingClientRect(),
      width = document.body.clientWidth,
      elementCords = {
        left: elem.left,
        right: elem.right,
        width: width,
        position: (elem.left > (width / 2)) ? 'right' : 'left'
      };

  return elementCords;
};
