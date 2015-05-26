'use strict';

module.exports = function (element) {
  var color = null;

  if (element) {
    color = window.getComputedStyle(element.currentTarget).getPropertyValue('color').replace('rgb', 'rgba').replace(')', ', 0.5)');
  }

  return color;
};