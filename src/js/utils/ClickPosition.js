'use strict';

module.exports = function (element, parentElement) {
  var xPosition = 0,
      yPosition = 0;

  if (element && parentElement) {
    xPosition = (element.clientX - parentElement.left);
    yPosition = (element.clientY - parentElement.top);
  }
  return { x: xPosition, y: yPosition };
};
