'use strict';

module.exports = {
	// Essence mixins
	EventBus: require('./mixins/PubSub'),
};

// How to use
// EventBus as EventEmitter: Mixins.EventBus.publish(arguments); Mixins.EventBus.subscribe(arguments); Mixins.EventBus.unsubscribe(arguments);