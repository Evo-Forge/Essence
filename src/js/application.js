'use strict';

var React = require('react/addons'),
    ComponentsList = require('./components/ComponentsList'),
    ComponentsList = ComponentsList();

// Navigation Menu + Buttons + Title
React.render(
  ComponentsList.navigation_menu,
  document.getElementById('navigationMenu')
);

React.render(
  ComponentsList.navigation_buttons,
  document.getElementById('navigationBtn')
);

React.render(
  ComponentsList.navigation_title,
  document.getElementById('navigationTitle')
);

var navigationBtn = document.getElementById('navigationBtn'),
    navigationDrawer = document.getElementById('components-navigation-reactjs'),
    appbar = document.getElementById('components-appbar-reactjs'),
    contact = document.getElementById('components-contact-reactjs'),
    toolbar = document.getElementById('components-toolbar-reactjs'),
    buttonsfab = document.getElementById('components-buttons-fab'),
    buttonsraised = document.getElementById('components-buttons-raised'),
    buttonsflat = document.getElementById('components-buttons-flat'),
    cards_default = document.getElementById('components-cards-default'),
    cards_header = document.getElementById('components-cards-header'),
    cards_gallery = document.getElementById('components-cards-gallery'),
    cards_divider = document.getElementById('components-cards-divider'),
    cards_simple = document.getElementById('components-cards-simple'),
    chips = document.getElementById('components-chips-reactjs'),
    paper = document.getElementById('components-paper-reactjs'),
    tooltips = document.getElementById('components-tooltips-reactjs'),
    inputs = document.getElementById('components-text-fields-reactjs'),
    textareas = document.getElementById('components-text-textarea-reactjs'),
    validations = document.getElementById('components-text-validation-reactjs'),
    hints = document.getElementById('components-text-hints-reactjs'),
    stylings = document.getElementById('components-text-styling-reactjs'),
    tabfixed = document.getElementById('components-tabs-fixed-reactjs'),
    tabscrollable = document.getElementById('components-tabs-scrollable-reactjs'),
    tabs = document.getElementById('components-tabs-reactjs'),
    sliders_simple = document.getElementById('components-sliders-simple'),
    sliders_editable = document.getElementById('components-sliders-editable'),
    sliders_disable = document.getElementById('components-sliders-disable'),
    sliders_discrete = document.getElementById('components-sliders-discrete'),
    sliders_steps = document.getElementById('components-sliders-steps'),
    switches = document.getElementById('components-switches-reactjs'),
    snackbarsbuttons = document.getElementById('components-snackbars-buttons-reactjs'),
    snackbars = document.getElementById('components-snackbars-reactjs'),
    toasts = document.getElementById('components-toasts-reactjs'),
    progress = document.getElementById('components-progress-reactjs'),
    listsingleline = document.getElementById('components-lists-single-line'),
    listtwoline = document.getElementById('components-lists-two-line'),
    listmultiline = document.getElementById('components-lists-multi-line'),
    listcheckbox = document.getElementById('components-list-controls-checkbox'),
    listcheckboxavatar = document.getElementById('components-list-controls-checkbox-avatar'),
    listswitches = document.getElementById('components-list-controls-switches'),
    listexpand = document.getElementById('components-list-controls-expand'),
    navigationTitle = document.getElementById('navigationTitle'),
    navigationMenu = document.getElementById('navigationMenu');
