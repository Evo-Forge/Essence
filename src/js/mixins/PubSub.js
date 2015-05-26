'use strict';

var EventEmitter = require('events').EventEmitter,
    PubSub = new EventEmitter();

PubSub.setMaxListeners(50);

module.exports = {
  publish: function () {
    PubSub.emit.apply(PubSub, arguments);
  },

  subscribe: function () {
    PubSub.on.apply(PubSub, arguments);
  },

  unsubscribe: function () {
    PubSub.removeListener.apply(PubSub, arguments);
  }
};
