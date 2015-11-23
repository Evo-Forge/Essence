'use strict';

var ReactDOM = require('react-dom'),
    ComponentsList = require('./components/ComponentsList')();

// Navigation Menu + Buttons
ReactDOM.render(ComponentsList.navigation_menu, document.getElementById('navigationMenu'));

ReactDOM.render(ComponentsList.navigation_buttons, document.getElementById('navigationBtn'));

ReactDOM.render(ComponentsList.navigation_title, document.getElementById('navigationTitle'));