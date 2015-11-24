'use strict';

module.exports = {
	// Essence utils
	backgroundColor: require('./utils/BackgroundColor'),
	classNames: require('./utils/ClassNames'),
	dateFormat: require('./utils/DateFormat'),
	mobile: require('./utils/Mobile'),
	position: require('./utils/Position') };

// How to use
// get background color from an element: Utils.backgroundColor(element);
// combine two set of string as classes: Utils.classNames(classList1, classList2);
// return x:y coordinates of a element: Utils.position.clicked(currentElement, parentElement);
// format date: Utils.dateFormat(type, dateValue); with available types: day, month, date
// return true|false if client browser is mobile: Utils.mobile.isMobile();
// return x:y coordinates of an element: Utils.position.get(currentElement);
// return x:y coordinates of an horizontal element: Utils.position.horizontal(currentElement);