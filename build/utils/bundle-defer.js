'use strict';


function Defer(max, callback) {
  this.max = max;
  this.count = 0;
  this.callback = callback;

  this.exec = function () {
    if (this.max === ++this.count) {
      this.callback();
    }
  };
}

module.exports = Defer;
