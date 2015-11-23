'use strict';

var EventEmitter = require('events').EventEmitter,
    PubSub = new EventEmitter();

PubSub.setMaxListeners(50);

module.exports = {
  publish: function publish() {
    PubSub.emit.apply(PubSub, arguments);
  },

  subscribe: function subscribe() {
    PubSub.on.apply(PubSub, arguments);
  },

  unsubscribe: function unsubscribe() {
    PubSub.removeListener.apply(PubSub, arguments);
  }
};