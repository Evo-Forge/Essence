'use strict';

var path = require('path');

module.exports = function (name) {
  return /(\.(js)$)/i.test(path.extname(name));
};
