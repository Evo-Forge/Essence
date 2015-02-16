'use strict';

module.exports = function (element, parentElement) {
  var xPosition = 0,
      yPosition = 0;

  if (element && parentElement) {
    xPosition = (element.clientX - parentElement.x);
    yPosition = (element.clientY - parentElement.y);
  }

  return { x: xPosition, y: yPosition };
};
