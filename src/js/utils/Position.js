'use strict';

module.exports = function (element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += (
      (element.offsetLeft - element.scrollLeft) + element.clientLeft)
    ;
    yPosition += (
      (element.offsetTop - element.scrollTop) + element.clientTop)
    ;
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
};
