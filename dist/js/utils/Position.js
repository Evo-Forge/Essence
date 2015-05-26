'use strict';

module.exports = {
  get: function get(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
  },
  horizontal: function horizontal(element) {
    var elem = element.parentElement.getBoundingClientRect(),
        width = document.body.clientWidth,
        elementCords = {
      left: elem.left,
      right: elem.right,
      width: width,
      position: elem.left > width / 2 ? 'right' : 'left'
    };

    return elementCords;
  },
  clicked: function clicked(element, parentElement) {
    var xPosition = 0,
        yPosition = 0;

    if (element && parentElement) {
      xPosition = element.clientX - parentElement.left;
      yPosition = element.clientY - parentElement.top;
    }
    return { x: xPosition, y: yPosition };
  }
};