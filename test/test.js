import React from 'react';
import ReactDOM from 'react-dom';

import AppBar from '../components/essence-appbar/src/appbar.jsx';
import Text from '../components/essence-core/src/text/text.jsx';

ReactDOM.render(
	<AppBar classes={'e-background-yellow-100 e-text-blue-400'}>
		<Text>AppBar</Text>
	</AppBar>
	,
	document.querySelector('.app')
);