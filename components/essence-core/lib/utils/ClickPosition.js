"use strict";

function ClickPosition(element, parentElement) {
  var xPosition = 0;
  var yPosition = 0;

  if (element && parentElement) {
    xPosition = element.clientX - parentElement.left;
    yPosition = element.clientY - parentElement.top;
  }
  return { x: xPosition, y: yPosition };
}

module.exports = ClickPosition;