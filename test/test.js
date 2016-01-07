import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/lib/appbar';

ReactDOM.render(
	<AppBar classes={'e-background-yellow-100 e-text-blue-400'}>
		AppBar
	</AppBar>
	,
	document.querySelector('.app')
);