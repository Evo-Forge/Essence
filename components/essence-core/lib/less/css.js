'use strict';

var _mixins = require('./mixins.less');

var Mixins = _interopRequireWildcard(_mixins);

var _globals = require('./globals.less');

var Globals = _interopRequireWildcard(_globals);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
	Mixins: Mixins,
	Globals: Globals
};