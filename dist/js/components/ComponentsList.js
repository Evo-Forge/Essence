'use strict';
var ga = ga !== undefined ? ga : {};

var React = require('react'),
    AppBar = require('./AppBar'),
    BottomSheets = require('./BottomSheets'),
    BottomSheetsItem = require('./BottomSheetsItem'),
    Btn = require('./Btn'),
    BtnItem = require('./BtnItem'),
    Block = require('./Block'),
    Card = require('./Card'),
    CardItem = require('./CardItem'),
    CardItemHeader = require('./CardItemHeader'),
    CardItemContent = require('./CardItemContent'),
    CardItemFooter = require('./CardItemFooter'),
    Chip = require('./Chip'),
    ChipItem = require('./ChipItem'),
    DatePicker = require('./DatePicker'),
    DatePickerHeader = require('./DatePickerHeader'),
    DatePickerContent = require('./DatePickerContent'),
    DatePickerFooter = require('./DatePickerFooter'),
    Dialog = require('./Dialog'),
    DialogItem = require('./DialogItem'),
    DialogItemHeader = require('./DialogItemHeader'),
    DialogItemContent = require('./DialogItemContent'),
    DialogItemFooter = require('./DialogItemFooter'),
    Icon = require('./Icon'),
    ReactImage = require('./Image'),
    Input = require('./Input'),
    InputItem = require('./InputItem'),
    InputItem = require('./InputItem'),
    List = require('./List'),
    ListItem = require('./ListItem'),
    Menu = require('./Menu'),
    MenuItem = require('./MenuItem'),
    Navigation = require('./Navigation'),
    Paper = require('./Paper'),
    PaperItem = require('./PaperItem'),
    Progress = require('./Progress'),
    Slider = require('./Slider'),
    SliderItem = require('./SliderItem'),
    Snackbar = require('./Snackbar'),
    SnackbarItem = require('./SnackbarItem'),
    Switch = require('./Switch'),
    SwitchItem = require('./SwitchItem'),
    TabItem = require('./TabItem'),
    TabMenu = require('./TabMenu'),
    ReactText = require('./Text'),
    Toast = require('./Toast'),
    ToastItem = require('./ToastItem'),
    ToolBar = require('./ToolBar');

// Google Analytics func
function contestEvents() {
  ga('send', 'event', 'Contest', 'New click', {
    'hitCallback': function hitCallback() {
      document.location.href = './contest';
    }
  });
}

var Component = {};

// Essence - Components
Component.home = [];
Component.home.push({
  'download': React.createElement(
    Block,
    { type: 'div' },
    React.createElement(
      Block,
      { type: 'div' },
      React.createElement(
        ReactText,
        {
          type: 'a',
          eventAction: 'showNavigationComponent',
          classes: 'e-btn raised e-background-indigo-800',
          href: '#getting-started-web',
          id: 'components-getting-started-web'
        },
        'Get Started with Essence'
      ),
      React.createElement(
        ReactText,
        {
          type: 'a',
          classes: 'e-btn raised e-background-white e-text-indigo-800',
          target: '_blank',
          href: 'https://github.com/PearlVentures/Essence'
        },
        'Download from GitHub'
      )
    ),
    React.createElement(Block, { type: 'hr' }),
    React.createElement(
      Block,
      { type: 'div' },
      React.createElement(
        ReactText,
        {
          type: 'a',
          classes: 'e-btn raised e-background-amber-500',
          href: 'javascript:;',
          onClick: contestEvents
        },
        'enter the essence contest'
      )
    )
  )
});

Component.navigation_menu = React.createElement(
  Navigation,
  {
    live: true,
    header: 'Essence',
    logo: 'assets/img/essence_icon.png'
  },
  React.createElement(
    List,
    {
      classes: 'e-list-navigation',
      id: 'EssenceNavigation'
    },
    React.createElement(
      ListItem,
      {
        listType: 'navigation',
        eventAction: 'changeText',
        changeTextId: 'navigationTitle',
        primaryListImage: 'assets/img/material-design-b.png',
        contentText: 'Material Design',
        contentLink: '#',
        hasSubmenu: true
      },
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-home'
          },
          'Home'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-material-design'
          },
          'About'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-getting-started-web'
          },
          'Getting Started Web'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-getting-started-native'
          },
          'Getting Started Native'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-contact'
          },
          'Contact'
        )
      )
    ),
    React.createElement(
      ListItem,
      {
        listType: 'navigation',
        eventAction: 'changeText',
        changeTextId: 'navigationTitle',
        primaryListImage: 'assets/img/styles-b.png',
        contentText: 'Styles',
        contentLink: '#styles',
        hasSubmenu: true
      },
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-colors'
          },
          'Colors'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-icons'
          },
          'Icons'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-typography'
          },
          'Typography'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            href: '#',
            id: 'components-classes'
          },
          'Useful classes'
        )
      )
    ),
    React.createElement(
      ListItem,
      {
        listType: 'navigation',
        eventAction: 'changeText',
        changeTextId: 'navigationTitle',
        primaryListImage: 'assets/img/components-b.png',
        contentText: 'Components',
        contentLink: '#components',
        hasSubmenu: true
      },
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-appbar',
            href: '#'
          },
          'Appbar'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-bottom-sheets',
            href: '#'
          },
          'Bottom Sheets'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-buttons',
            href: '#'
          },
          'Buttons'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-cards',
            href: '#'
          },
          'Cards'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-chips',
            href: '#'
          },
          'Chips'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-datepicker',
            href: '#'
          },
          'Date Picker'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-dialogs',
            href: '#'
          },
          'Dialogs'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-dividers',
            href: '#'
          },
          'Dividers'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-grids',
            href: '#'
          },
          'Grids'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-lists',
            href: '#'
          },
          'Lists'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-list-controls',
            href: '#'
          },
          'List Controls'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-menus',
            href: '#'
          },
          'Menus'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-navigation',
            href: '#'
          },
          'Navigation Drawer'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-paper',
            href: '#'
          },
          'Paper'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-progress',
            href: '#'
          },
          'Progress'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-slider',
            href: '#'
          },
          'Sliders'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-snackbars-toast',
            href: '#'
          },
          'Snackbars and Toast'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-switches',
            href: '#'
          },
          'Switches'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-tabs',
            href: '#'
          },
          'Tabs'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-text-fields',
            href: '#'
          },
          'Text fields'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          {
            type: 'a',
            id: 'components-tooltips',
            href: '#'
          },
          'Tooltips'
        )
      )
    )
  )
);

Component.navigation_buttons = React.createElement(
  Btn,
  null,
  React.createElement(BtnItem, {
    type: 'flat',
    classes: 'simple-button',
    icon: 'navigation-menu',
    actionClick: 'navigation'
  })
);

Component.navigation_title = React.createElement(
  ReactText,
  { id: 'navigationTitle' },
  'Essence - Material Design'
);

var NavigationHome = [{
  'text': 'Home' }, {
  'text': 'About' }, {
  'text': 'Getting Started' }, {
  'text': 'Contact' }],
    NavigationStyles = [{
  'text': 'Colors' }, {
  'text': 'Icons' }, {
  'text': 'Typography' }, {
  'text': 'Useful classes' }],
    NavigationComponents = [{
  'text': 'Appbar' }, {
  'text': 'Bottom Sheets' }, {
  'text': 'Buttons' }, {
  'text': 'Cards' }, {
  'text': 'Chips' }, {
  'text': 'Dialogs' }, {
  'text': 'Dividers' }, {
  'text': 'Grids' }, {
  'text': 'Lists' }, {
  'text': 'List Controls' }, {
  'text': 'Menus' }, {
  'text': 'Navigation Drawer' }, {
  'text': 'Paper' }, {
  'text': 'Progress' }, {
  'text': 'Snackbars and Toast' }, {
  'text': 'Switches' }, {
  'text': 'Tabs' }, {
  'text': 'Text fields' }, {
  'text': 'Tooltips' }];

Component.navigation = React.createElement(
  Navigation,
  {
    live: false,
    header: 'Navigation',
    logo: 'assets/img/essence_icon.png'
  },
  React.createElement(
    List,
    {
      classes: 'e-list-navigation',
      id: 'NavigationDrawer'
    },
    React.createElement(
      ListItem,
      {
        listType: 'navigation',
        contentText: 'Material Design',
        contentLink: '#',
        hasSubmenu: true
      },
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Home'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'About'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Getting Started'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Contact'
        )
      )
    ),
    React.createElement(
      ListItem,
      {
        listType: 'navigation',
        contentText: 'Styles',
        contentLink: '#styles',
        hasSubmenu: true
      },
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Colors'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Icons'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Typography'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Useful classes'
        )
      )
    ),
    React.createElement(
      ListItem,
      {
        listType: 'navigation',
        contentText: 'Components',
        contentLink: '#components',
        hasSubmenu: true
      },
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Appbar'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Bottom Sheets'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Buttons'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Cards'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Chips'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Dialogs'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Dividers'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Grids'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Lists'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'List Controls'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Menus'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Navigation Drawer'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Paper'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Progress'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Slider'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Snackbars and Toast'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Switches'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Tabs'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Text fields'
        )
      ),
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          null,
          'Tooltips'
        )
      )
    )
  )
);

Component.contact = React.createElement(
  Input,
  null,
  React.createElement(InputItem, {
    classes: 'e-input-group',
    type: 'text',
    name: 'message',
    label: 'Subject'
  }),
  React.createElement(InputItem, {
    classes: 'e-input-group',
    type: 'email',
    name: 'email',
    label: 'Email address'
  }),
  React.createElement(InputItem, {
    classes: 'e-input-group',
    type: 'textarea',
    name: 'message',
    label: 'Message'
  }),
  React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      classes: 'raised e-background-indigo-400',
      label: 'Send Message',
      type: 'primary',
      rippleEffect: true
    })
  )
);

Component.appbar = React.createElement(
  AppBar,
  null,
  React.createElement(
    Menu,
    {
      id: 'menu-appbar-icon-menu',
      classes: 'e-text-color-blue-500 cover e-left',
      icon: 'navigation-menu'
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'New project'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'New user'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'More tools'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'Exit'
      )
    )
  ),
  React.createElement(
    Menu,
    {
      id: 'menu-appbar-left',
      classes: 'e-text-color-blue-500 cover e-left',
      placeholder: 'Options'
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(Icon, { name: 'notification-sms' }),
      React.createElement(
        ReactText,
        null,
        'Notifications'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(Icon, { name: 'notification-tap-and-play' }),
      React.createElement(
        ReactText,
        null,
        'Tap & Pay'
      )
    ),
    React.createElement(Block, { type: 'li', classes: 'divider' }),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: 'http://www.pearlhq.com' },
        'Pearl'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: 'http://www.google.com' },
        'Google'
      )
    )
  ),
  React.createElement(
    Menu,
    {
      id: 'menu-appbar-right',
      classes: 'e-text-color-blue-500 cover e-right',
      icon: 'navigation-more-vert',
      right: true
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'Profile'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'Settings'
      )
    ),
    React.createElement(Block, { type: 'li', classes: 'divider' }),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'Support'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        null,
        'Logout'
      )
    )
  ),
  React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      icon: 'action-favorite',
      classes: 'simple-button e-right'
    }),
    React.createElement(BtnItem, {
      icon: 'action-search',
      classes: 'simple-button e-right'
    })
  )
);

Component.bottom_sheets = [];

Component.bottom_sheets.push({
  'button-simple': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      type: 'primary',
      classes: 'raised',
      label: 'Show bottom sheets',
      rippleEffect: true,
      actionClick: 'bottomsheets',
      actionType: {
        'action': 'show',
        'targetID': 'bottomsheet-simple'
      }
    })
  )
});

Component.bottom_sheets.push({
  'button-twolines': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      type: 'warning',
      classes: 'raised',
      label: 'Show bottom sheets lines',
      rippleEffect: true,
      actionClick: 'bottomsheets',
      actionType: {
        'action': 'show',
        'targetID': 'bottomsheet-twolines'
      }
    })
  )
});

Component.bottom_sheets.push({
  'button-bigicons': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      type: 'succes',
      classes: 'raised',
      label: 'Show bottom sheets icons',
      rippleEffect: true,
      actionClick: 'bottomsheets',
      actionType: {
        'action': 'show',
        'targetID': 'bottomsheet-bigicons'
      }
    })
  )
});

Component.bottom_sheets.push({
  'simple': React.createElement(
    BottomSheets,
    null,
    React.createElement(
      BottomSheetsItem,
      {
        id: 'bottomsheet-simple'
      },
      React.createElement(
        List,
        { type: 'single-line' },
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', href: '#phone' },
              React.createElement(Icon, { name: 'maps-local-phone', classes: 'e-list-icon' }),
              React.createElement(
                ReactText,
                null,
                'Mobile'
              )
            )
          )
        ),
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', href: '#share' },
              React.createElement(Icon, { name: 'social-share', classes: 'e-list-icon' }),
              React.createElement(
                ReactText,
                null,
                'Share'
              )
            )
          )
        ),
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', href: '#upload' },
              React.createElement(Icon, { name: 'file-cloud-upload', classes: 'e-list-icon' }),
              React.createElement(
                ReactText,
                null,
                'Upload'
              )
            )
          )
        ),
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', href: '#copy' },
              React.createElement(Icon, { name: 'content-content-copy', classes: 'e-list-icon' }),
              React.createElement(
                ReactText,
                null,
                'Copy'
              )
            )
          )
        ),
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', href: '#print' },
              React.createElement(Icon, { name: 'action-print', classes: 'e-list-icon' }),
              React.createElement(
                ReactText,
                null,
                'Print'
              )
            )
          )
        )
      )
    )
  )
});

Component.bottom_sheets.push({
  'twolines': React.createElement(
    BottomSheets,
    null,
    React.createElement(
      BottomSheetsItem,
      {
        id: 'bottomsheet-twolines'
      },
      React.createElement(
        List,
        { type: 'two-line' },
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', href: '#attractions' },
              React.createElement(
                Block,
                { type: 'span', classes: 'e-list-content' },
                React.createElement(ReactImage, {
                  src: 'assets/img/card-user-img.jpg',
                  alt: 'Attractions',
                  classes: 'e-list-avatar'
                }),
                React.createElement(
                  Block,
                  { type: 'span' },
                  React.createElement(
                    ReactText,
                    { type: 'strong' },
                    'Alice'
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', classes: 'brick-12', href: '#fun' },
              React.createElement(
                Block,
                { type: 'span', classes: 'e-list-content' },
                React.createElement(Icon, { name: 'maps-local-phone', classes: 'e-list-icon' }),
                React.createElement(
                  Block,
                  { type: 'span' },
                  React.createElement(
                    ReactText,
                    { type: 'strong' },
                    '(555) 085-0001'
                  ),
                  React.createElement('br', null),
                  React.createElement(
                    ReactText,
                    null,
                    'Mobile'
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          ListItem,
          null,
          React.createElement(
            Block,
            { type: 'li' },
            React.createElement(
              ReactText,
              { type: 'a', classes: 'brick-12', href: '#fun' },
              React.createElement(
                Block,
                { type: 'span', classes: 'e-list-content' },
                React.createElement(Icon, { name: 'maps-local-phone', classes: 'e-list-icon' }),
                React.createElement(
                  Block,
                  { type: 'span' },
                  React.createElement(
                    ReactText,
                    { type: 'strong' },
                    '(564) 123-4567'
                  ),
                  React.createElement('br', null),
                  React.createElement(
                    ReactText,
                    null,
                    'Home'
                  )
                )
              )
            )
          )
        )
      )
    )
  )
});

Component.bottom_sheets.push({
  'bigicons': React.createElement(
    BottomSheets,
    null,
    React.createElement(
      BottomSheetsItem,
      {
        id: 'bottomsheet-bigicons'
      },
      React.createElement(
        List,
        {
          type: 'big-icon',
          icon: true
        },
        React.createElement(ListItem, {
          contentLink: '#gmail',
          contentTitle: 'Gmail',
          icon: 'communication-email'
        }),
        React.createElement(ListItem, {
          contentLink: '#phone',
          contentTitle: 'Phone',
          icon: 'notification-phone-in-talk'
        }),
        React.createElement(ListItem, {
          contentLink: '#copy',
          contentTitle: 'Copy',
          icon: 'content-content-copy'
        }),
        React.createElement(ListItem, {
          contentLink: '#social',
          contentTitle: 'Group',
          icon: 'social-group'
        }),
        React.createElement(ListItem, {
          contentLink: '#map',
          contentTitle: 'Map',
          icon: 'maps-map'
        }),
        React.createElement(ListItem, {
          contentLink: '#bar',
          contentTitle: 'Bar',
          icon: 'maps-local-bar'
        })
      )
    )
  )
});

var toolbar_menu_right = [{
  id: 'toolbar-menu-right',
  type: 'menu',
  hide: true,
  icon: 'navigation-more-vert',
  classes: 'e-text-color-blue-500 cover e-right',
  items: [{
    type: 'menu',
    text: 'Profile',
    link: '#profile'
  }, {
    type: 'menu',
    text: 'Settings',
    link: '#settings'
  }, {
    type: 'divider'
  }, {
    type: 'menu',
    text: 'Support',
    link: '#support'
  }, {
    type: 'menu',
    text: 'Logout',
    link: '#logout'
  }]
}];

Component.toolbar = React.createElement(
  ToolBar,
  { title: 'Toolbar' },
  React.createElement(Menu, { items: toolbar_menu_right }),
  React.createElement(
    Btn,
    {
      classes: 'e-right'
    },
    React.createElement(BtnItem, {
      icon: 'action-favorite',
      classes: 'simple-button e-right'
    }),
    React.createElement(BtnItem, {
      icon: 'action-search',
      classes: 'simple-button e-right'
    }),
    React.createElement(BtnItem, {
      type: 'primary',
      label: 'Create Action',
      classes: 'raised e-right',
      rippleEffect: true
    })
  )
);

Component.paper = React.createElement(
  Paper,
  null,
  React.createElement(
    PaperItem,
    {
      classes: 'e-shadow-1 e-text-blue-grey-400'
    },
    'PaperItem: simple ',
    React.createElement(
      'strong',
      null,
      'shadow-1'
    )
  ),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(
    PaperItem,
    {
      type: 'sharp',
      classes: 'e-shadow-2 e-text-blue-grey-400'
    },
    'PaperItem: sharp ',
    React.createElement(
      'strong',
      null,
      'shadow-2'
    )
  ),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(
    PaperItem,
    {
      type: 'circle',
      classes: 'e-shadow-3 e-text-blue-grey-400'
    },
    'PaperItem: circle ',
    React.createElement(
      'strong',
      null,
      'shadow-3'
    )
  )
);

Component.tabs = React.createElement(
  TabMenu,
  {
    type: 'simple',
    id: 'tab_menu_simple',
    classes: 'e-background-indigo-400'
  },
  React.createElement(TabItem, {
    type: 'list',
    id: 'tab-item-one',
    label: 'Tab Item One'
  }),
  React.createElement(
    TabItem,
    {
      type: 'content',
      id: 'tab-item-one'
    },
    React.createElement(
      'h2',
      { className: 'e-display-1' },
      'As Samuel L Jackson used to say:'
    ),
    React.createElement(
      'p',
      { className: 'e-text-blue-grey-400' },
      'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother\'s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.'
    )
  ),
  React.createElement(TabItem, {
    type: 'list',
    id: 'tab-item-two',
    label: 'Tab Item Two'
  }),
  React.createElement(
    TabItem,
    {
      type: 'content',
      id: 'tab-item-two'
    },
    React.createElement(
      'h2',
      { className: 'e-display-1' },
      'Still Samuel L Jackson:'
    ),
    React.createElement(
      'p',
      { className: 'e-text-blue-grey-400' },
      'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man.'
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        Btn,
        null,
        React.createElement(BtnItem, {
          classes: 'flat',
          label: 'Say Hello!',
          type: 'danger',
          rippleEffect: true
        })
      )
    )
  ),
  React.createElement(TabItem, {
    type: 'list',
    id: 'tab-item-tree',
    label: 'Tab Item Tree'
  }),
  React.createElement(
    TabItem,
    {
      type: 'content',
      id: 'tab-item-tree'
    },
    React.createElement(
      'h2',
      { className: 'e-display-1' },
      'Yeap, him again:'
    ),
    React.createElement(
      'p',
      { className: 'e-text-blue-grey-400' },
      'Your bones don\\\'t break, mine do. That\\\'s clear. Your cells react to bacteria and viruses differently than mine. You don\\\'t get sick, I do. That\\\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends.'
    ),
    React.createElement(
      'div',
      { className: 'brick brick-4' },
      React.createElement(
        Chip,
        null,
        React.createElement(ChipItem, {
          image: 'assets/img/card-user-img.jpg',
          imageAlt: 'Card Image',
          name: 'Gonzales',
          email: 'gon@zal.es'
        }),
        React.createElement(ChipItem, {
          image: 'assets/img/card-user-img.jpg',
          imageAlt: 'Card Image',
          name: 'Iolanda Curtiz',
          email: 'io@lan.da'
        }),
        React.createElement(ChipItem, {
          image: 'assets/img/card-user-img.jpg',
          imageAlt: 'Card Image',
          name: 'Gizela Timliv',
          email: 'gizela@timl.iv'
        })
      )
    )
  )
);

Component.slider = [];

Component.slider.push({
  'simple': React.createElement(
    Slider,
    null,
    React.createElement(SliderItem, { start: 10, fill: false })
  )
});

Component.slider.push({
  'editable': React.createElement(
    Slider,
    null,
    React.createElement(SliderItem, { start: 47, fill: true, editable: true })
  )
});

Component.slider.push({
  'disable': React.createElement(
    Slider,
    null,
    React.createElement(SliderItem, { start: 50, fill: true, disable: true })
  )
});

Component.slider.push({
  'discrete': React.createElement(
    Slider,
    null,
    React.createElement(SliderItem, { start: 23, fill: true, discrete: true })
  )
});

Component.slider.push({
  'steps': React.createElement(
    Slider,
    null,
    React.createElement(SliderItem, { start: 20, fill: true, discrete: true, steps: true })
  )
});

var menus_simple = [{
  id: 'menu-simple',
  type: 'menu',
  text: 'Options (Simple Menu)',
  link: '#',
  hide: true,
  classes: 'e-text-color-blue-500 e-left',
  items: [{
    type: 'menu',
    text: 'Notifications',
    link: '#notifications'
  }, {
    type: 'menu',
    text: 'Flow',
    link: '#flow'
  }, {
    type: 'divider'
  }, {
    type: 'menu',
    text: 'Following',
    link: '#following'
  }, {
    type: 'menu',
    text: 'Favorites',
    link: '#favorites'
  }]
}];

var menus_cover = [{
  id: 'menu-cover',
  type: 'menu',
  text: 'Options (Simple Menu Cover)',
  link: '#',
  hide: true,
  classes: 'cover mobile',
  items: [{
    type: 'menu',
    text: 'Notifications',
    link: '#notifications'
  }, {
    type: 'menu',
    text: 'Flow',
    link: '#flow'
  }, {
    type: 'divider'
  }, {
    type: 'menu',
    text: 'Following',
    link: '#following'
  }, {
    type: 'menu',
    text: 'Favorites',
    link: '#favorites'
  }]
}];

var menus_cascade = [{
  id: 'menu-cascade-cover',
  type: 'menu',
  text: 'Options (Cascading Menu)',
  link: '#',
  hide: true,
  classes: 'cover',
  items: [{
    type: 'menu',
    text: 'Twocows',
    link: '#Twocows'
  }, {
    type: 'menu',
    text: 'Marvel',
    link: '#Marvel'
  }, {
    type: 'divider'
  }, {
    type: 'menu',
    text: 'Shuheisha',
    link: '#Shuheisha'
  }, {
    type: 'more',
    text: 'DC Comics',
    items: [{
      type: 'menu',
      text: 'Twocows',
      link: '#Twocows'
    }, {
      type: 'menu',
      text: 'Marvel',
      link: '#Marvel'
    }, {
      type: 'divider'
    }, {
      type: 'menu',
      text: 'Shuheisha',
      link: '#Shuheisha'
    }, {
      type: 'more',
      text: 'DC Comics',
      link: '#Comics'
    }]
  }]
}];

Component.menus = [];

Component.menus.push({
  'simple': React.createElement(
    Menu,
    {
      id: 'menu-simple',
      placeholder: 'Show Menu Simple'
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(Icon, { name: 'notification-sms' }),
      React.createElement(
        ReactText,
        null,
        'SMS Notifications'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(Icon, { name: 'notification-tap-and-play' }),
      React.createElement(
        ReactText,
        null,
        'Tap & Pay'
      )
    ),
    React.createElement(MenuItem, { classes: 'divider' }),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: 'http://www.pearlhq.com' },
        'Pearl'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: 'http://www.google.com' },
        'Google'
      )
    )
  )
});

Component.menus.push({
  'cover': React.createElement(
    Menu,
    {
      id: 'menu-cover',
      classes: 'cover mobile',
      placeholder: 'Show Menu Cover'
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(Icon, { name: 'notification-sms' }),
      React.createElement(
        ReactText,
        null,
        'SMS Notifications'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(Icon, { name: 'notification-tap-and-play' }),
      React.createElement(
        ReactText,
        null,
        'Tap & Pay'
      )
    ),
    React.createElement(MenuItem, { classes: 'divider' }),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: 'http://www.pearlhq.com' },
        'Pearl'
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: 'http://www.google.com' },
        'Google'
      )
    )
  )
});

Component.menus.push({
  'fab': React.createElement(
    Menu,
    {
      id: 'menu-fab',
      type: 'fab'
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: '#', classes: 'e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900' },
        React.createElement(Icon, { name: 'action-assessment' })
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: '#', classes: 'e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900' },
        React.createElement(Icon, { name: 'action-assignment-ind' })
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: '#', classes: 'e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900' },
        React.createElement(Icon, { name: 'action-loyalty' })
      )
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(
        ReactText,
        { type: 'a', href: '#', classes: 'e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900' },
        React.createElement(Icon, { name: 'action-print' })
      )
    )
  )
});

Component.menus.push({
  'cascade': React.createElement(Menu, { items: menus_cascade })
});

Component.menus.push({
  'checkbox-inactive': React.createElement(
    Menu,
    {
      id: 'menu-checkbox',
      placeholder: 'Menu with Switches',
      classes: 'brick-4'
    },
    React.createElement(
      MenuItem,
      null,
      React.createElement(SwitchItem, {
        type: 'checkbox',
        name: 'notification-sms',
        classes: 'e-left'
      }),
      React.createElement(
        ReactText,
        null,
        ' Receive SMS Notifications'
      ),
      React.createElement(Icon, {
        name: 'notification-sms',
        classes: 'e-right e-text-green-400'
      })
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(SwitchItem, {
        type: 'checkbox',
        name: 'notification-sms',
        classes: 'e-left'
      }),
      React.createElement(
        ReactText,
        null,
        ' Receive Alerts Notifications'
      ),
      React.createElement(Icon, {
        name: 'alert-warning',
        classes: 'e-right e-text-green-400'
      })
    ),
    React.createElement(
      MenuItem,
      null,
      React.createElement(SwitchItem, {
        type: 'checkbox',
        name: 'notification-sms',
        classes: 'e-left'
      }),
      React.createElement(
        ReactText,
        null,
        ' Receive Email Notifications'
      ),
      React.createElement(Icon, {
        name: 'communication-email',
        classes: 'e-right e-text-green-400'
      })
    )
  )
});

Component.buttons = [];

Component.buttons.push({
  'fab': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      icon: 'action-favorite',
      type: 'fab',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      icon: 'action-favorite',
      type: 'fab',
      rippleEffect: true,
      mini: true
    })
  )
});

Component.buttons.push({
  'raised-1': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Default',
      tooltip: 'Tooltip Default',
      type: 'default',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Primary',
      tooltip: 'Tooltip Primary',
      type: 'primary',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Succes',
      tooltip: 'Tooltip Succes',
      type: 'succes',
      rippleEffect: true,
      disabled: true
    })
  )
});

Component.buttons.push({
  'raised-2': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Info',
      tooltip: 'Tooltip Info',
      type: 'info',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Warning',
      tooltip: 'Tooltip Warning',
      type: 'warning',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Danger',
      tooltip: 'Tooltip Danger',
      type: 'danger',
      rippleEffect: true
    })
  )
});

Component.buttons.push({
  'flat-1': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      classes: 'flat',
      label: 'Default',
      type: 'default',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'flat',
      label: 'Primary',
      type: 'primary',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'flat',
      label: 'Succes',
      type: 'succes',
      rippleEffect: true
    })
  )
});
Component.buttons.push({
  'flat-2': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      classes: 'flat',
      label: 'Info',
      type: 'info',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'flat',
      label: 'Warning',
      type: 'warning',
      rippleEffect: true
    }),
    React.createElement(BtnItem, {
      classes: 'flat',
      label: 'Danger',
      type: 'danger',
      rippleEffect: true
    })
  )
});

var imageGallery = [{
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}, {
  src: 'assets/img/card-img.jpg',
  alt: 'Car image'
}];

Component.cards = [];

Component.cards.push({
  'default': React.createElement(
    Card,
    null,
    React.createElement(
      CardItem,
      null,
      React.createElement(
        Block,
        { type: 'div', classes: 'card-main-image' },
        React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Header Image' }),
        React.createElement(
          ReactText,
          { type: 'h1', classes: 'e-headline' },
          'Going to Ibiza'
        )
      ),
      React.createElement(
        CardItemContent,
        { classes: 'card-supporting-text e-text-blue-grey-400' },
        React.createElement(
          ReactText,
          { type: 'h4' },
          'Limit supplemental actions to two actions, in addition to an overflow menu.'
        )
      ),
      React.createElement(
        CardItemFooter,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'e-left' },
          React.createElement(BtnItem, {
            classes: 'flat',
            label: 'No',
            type: 'default',
            rippleEffect: true
          })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'e-left' },
          React.createElement(BtnItem, {
            classes: 'flat e-text-indigo-400',
            label: 'Yes',
            type: 'danger',
            rippleEffect: true
          })
        )
      )
    )
  )
});

Component.cards.push({
  'header': React.createElement(
    Card,
    null,
    React.createElement(
      CardItem,
      null,
      React.createElement(
        CardItemHeader,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'card-header-image' },
          React.createElement(ReactImage, { src: 'assets/img/card-user-img.jpg', alt: 'Card Header Image' })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'card-header-text' },
          React.createElement(
            ReactText,
            { type: 'h2', classes: 'e-title' },
            'Card Title'
          ),
          React.createElement(
            ReactText,
            { type: 'h3', classes: 'e-subhead e-text-blue-grey-400' },
            'Card Subhead'
          )
        )
      ),
      React.createElement(
        Block,
        { type: 'div', classes: 'card-main-image' },
        React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Header Image' }),
        React.createElement(
          ReactText,
          { type: 'a', href: '#carja', classes: 'e-headline' },
          'Going to Ibiza'
        )
      ),
      React.createElement(
        CardItemContent,
        { classes: 'card-supporting-text e-text-blue-grey-400' },
        React.createElement(
          ReactText,
          { type: 'h4' },
          'Limit supplemental actions to two actions, in addition to an overflow menu.'
        )
      )
    )
  )
});

Component.cards.push({
  'gallery': React.createElement(
    Card,
    null,
    React.createElement(
      CardItem,
      null,
      React.createElement(
        CardItemHeader,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'card-header-image' },
          React.createElement(ReactImage, { src: 'assets/img/card-user-img.jpg', alt: 'Card Header Image' })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'card-header-text' },
          React.createElement(
            ReactText,
            { type: 'a', href: '#card-gallery', classes: 'e-title' },
            'Card Gallery'
          ),
          React.createElement(
            ReactText,
            { type: 'h3', classes: 'e-subhead e-text-blue-grey-400' },
            'Multiple images'
          )
        )
      ),
      React.createElement(
        Block,
        { type: 'div', classes: 'card-main-image' },
        React.createElement(
          Block,
          { type: 'div', classes: 'card-gallery' },
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 1' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 2' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 3' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 4' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 5' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 6' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 7' }),
          React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Image 8' })
        )
      ),
      React.createElement(
        CardItemContent,
        { classes: 'card-supporting-text e-text-blue-grey-400' },
        React.createElement(
          ReactText,
          { type: 'h4' },
          'Limit supplemental actions to two actions, in addition to an overflow menu.'
        )
      ),
      React.createElement(
        CardItemFooter,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'e-left' },
          React.createElement(BtnItem, {
            classes: 'flat e-left',
            label: 'No',
            type: 'default',
            rippleEffect: true
          })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'e-right' },
          React.createElement(BtnItem, {
            classes: 'flat e-left e-text-indigo-400',
            label: 'Yes',
            type: 'danger',
            rippleEffect: true
          })
        )
      )
    )
  )
});

Component.cards.push({
  'divider': React.createElement(
    Card,
    null,
    React.createElement(
      CardItem,
      null,
      React.createElement(
        Block,
        { type: 'div', classes: 'card-main-image' },
        React.createElement(ReactImage, { src: 'assets/img/card-img.jpg', alt: 'Card Header Image' }),
        React.createElement(
          ReactText,
          { type: 'h1', classes: 'e-headline' },
          'Going to Ibiza'
        )
      ),
      React.createElement(
        CardItemContent,
        { classes: 'card-supporting-text e-text-blue-grey-400' },
        React.createElement(
          ReactText,
          { type: 'h4' },
          'Limit supplemental actions to two actions, in addition to an overflow menu.'
        )
      ),
      React.createElement(
        CardItemFooter,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'e-right' },
          React.createElement(BtnItem, {
            classes: 'flat e-text-indigo-400',
            label: 'A',
            type: 'danger',
            rippleEffect: true
          })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'e-left' },
          React.createElement(BtnItem, {
            classes: 'flat',
            label: 'B',
            type: 'default',
            rippleEffect: true
          })
        )
      )
    )
  )
});

Component.cards.push({
  'simple': React.createElement(
    Card,
    null,
    React.createElement(
      CardItem,
      null,
      React.createElement(
        CardItemHeader,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'card-header-image' },
          React.createElement(ReactImage, { src: 'assets/img/card-user-img.jpg', alt: 'Card Header Image' })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'card-header-text' },
          React.createElement(
            ReactText,
            { type: 'a', href: '#card-gallery', classes: 'e-title' },
            'Car photography'
          ),
          React.createElement(
            ReactText,
            { type: 'h3', classes: 'e-subhead e-text-blue-grey-400' },
            'By John Doe'
          )
        )
      ),
      React.createElement(
        CardItemFooter,
        null,
        React.createElement(
          Block,
          { type: 'div', classes: 'e-right' },
          React.createElement(BtnItem, {
            classes: 'flat e-text-indigo-400',
            label: 'A',
            type: 'danger',
            rippleEffect: true
          })
        ),
        React.createElement(
          Block,
          { type: 'div', classes: 'e-left' },
          React.createElement(BtnItem, {
            classes: 'flat',
            label: 'B',
            type: 'default',
            rippleEffect: true
          })
        )
      )
    )
  )
});

Component.cards.push({
  'left-image': React.createElement(
    Card,
    null,
    React.createElement(
      CardItem,
      null,
      React.createElement(
        Block,
        { type: 'div', classes: 'left-image' },
        React.createElement(ReactImage, { src: 'assets/img/car.jpg', alt: 'Card Header Image' })
      ),
      React.createElement(
        Block,
        { type: 'div', classes: 'content-after-image' },
        React.createElement(
          Block,
          { type: 'div', classes: 'card-supporting-text' },
          React.createElement(
            ReactText,
            { type: 'h1', classes: 'e-title' },
            'Car photography'
          ),
          React.createElement(
            ReactText,
            { type: 'p', classes: 'e-subhead' },
            'By John Doe'
          )
        ),
        React.createElement(
          CardItemFooter,
          null,
          React.createElement(
            Block,
            { type: 'div', classes: 'e-right' },
            React.createElement(BtnItem, {
              classes: 'flat e-text-indigo-400',
              label: 'A',
              type: 'danger',
              rippleEffect: true
            })
          ),
          React.createElement(
            Block,
            { type: 'div', classes: 'e-left' },
            React.createElement(BtnItem, {
              classes: 'flat',
              label: 'B',
              type: 'default',
              rippleEffect: true
            })
          )
        )
      )
    )
  )
});

Component.chips = React.createElement(
  Chip,
  null,
  React.createElement(ChipItem, {
    image: 'assets/img/card-user-img.jpg',
    imageAlt: 'Card Image',
    name: 'Gonzales',
    email: 'gon@zal.es'
  }),
  React.createElement(ChipItem, {
    image: 'assets/img/card-user-img.jpg',
    imageAlt: 'Card Image',
    name: 'Iolanda Curtiz',
    email: 'io@lan.da'
  }),
  React.createElement(ChipItem, {
    image: 'assets/img/card-user-img.jpg',
    imageAlt: 'Card Image',
    name: 'Gizela Timliv',
    email: 'gizela@timl.iv'
  })
);

Component.datepicker = [];

Component.datepicker.push({
  'input-simple': React.createElement(InputItem, {
    classes: 'e-input-group e-text-green-600',
    type: 'text',
    name: 'datepicker-simple',
    label: 'Select Date',
    actionClick: 'datepicker',
    actionType: {
      'action': 'show',
      'id': 'datepicker-simple'
    }
  })
});

Component.datepicker.push({
  'input-horizontal': React.createElement(InputItem, {
    classes: 'e-input-group e-text-green-600',
    type: 'text',
    name: 'datepicker-horizontal',
    label: 'Select Date',
    actionClick: 'datepicker',
    actionType: {
      'action': 'show',
      'id': 'datepicker-horizontal'
    }
  })
});

Component.datepicker.push({
  'simple': React.createElement(
    DatePicker,
    { id: 'datepicker-simple' },
    React.createElement(DatePickerHeader, { classes: 'e-background-green-600' }),
    React.createElement(DatePickerContent, null),
    React.createElement(
      DatePickerFooter,
      null,
      React.createElement(
        Btn,
        null,
        React.createElement(BtnItem, {
          type: 'succes',
          classes: 'flat e-right e-text-green-600',
          label: 'OK',
          actionClick: 'datepicker',
          actionType: {
            'action': 'setValue',
            'id': 'datepicker-simple'
          }
        }),
        React.createElement(BtnItem, {
          type: 'danger',
          classes: 'flat e-right e-text-green-600',
          label: 'CANCEL',
          actionClick: 'datepicker',
          actionType: {
            'action': 'hide',
            'id': 'datepicker-simple'
          }
        })
      )
    )
  )
});

Component.datepicker.push({
  'horizontal': React.createElement(
    DatePicker,
    { id: 'datepicker-horizontal', classes: 'horizontal' },
    React.createElement(DatePickerHeader, { classes: 'e-background-green-600' }),
    React.createElement(DatePickerContent, null),
    React.createElement(
      DatePickerFooter,
      null,
      React.createElement(
        Btn,
        null,
        React.createElement(BtnItem, {
          type: 'succes',
          classes: 'flat e-right e-text-green-600',
          label: 'OK',
          actionClick: 'datepicker',
          actionType: {
            'action': 'setValue',
            'id': 'datepicker-horizontal'
          }
        }),
        React.createElement(BtnItem, {
          type: 'danger',
          classes: 'flat e-right e-text-green-600',
          label: 'CANCEL',
          actionClick: 'datepicker',
          actionType: {
            'action': 'hide',
            'id': 'datepicker-horizontal'
          }
        })
      )
    )
  )
});

Component.dialogs = [];

Component.dialogs.push({
  'button-simple': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      type: 'primary',
      classes: 'raised',
      label: 'Show Simple Dialog',
      rippleEffect: true,
      actionClick: 'dialog',
      actionType: {
        'action': 'show',
        'id': 'dialog-simple'
      }
    })
  )
});

Component.dialogs.push({
  'button-full': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      type: 'warning',
      classes: 'raised',
      label: 'Show Full Dialog',
      rippleEffect: true,
      actionClick: 'dialog',
      actionType: {
        'action': 'show',
        'id': 'dialog-full'
      }
    })
  )
});

Component.dialogs.push({
  'simple': React.createElement(
    Dialog,
    null,
    React.createElement(
      DialogItem,
      { id: 'dialog-simple' },
      React.createElement(
        DialogItemHeader,
        null,
        React.createElement(
          ReactText,
          { type: 'h2' },
          'Dialog title'
        )
      ),
      React.createElement(
        DialogItemContent,
        null,
        React.createElement(
          ReactText,
          { type: 'p' },
          'When text labels exceed the maximum button width, use stacked buttons to accommodate the text. Affirmative actions are stacked above dismissive actions.'
        )
      ),
      React.createElement(
        DialogItemFooter,
        null,
        React.createElement(
          Btn,
          null,
          React.createElement(BtnItem, {
            type: 'danger',
            classes: 'flat',
            label: 'Disagree',
            actionClick: 'dialog',
            actionType: {
              'action': 'hide',
              'id': 'dialog-simple'
            }
          }),
          React.createElement(BtnItem, {
            type: 'primary',
            classes: 'flat',
            label: 'Agree',
            actionClick: 'dialog',
            actionType: {
              'action': 'hide',
              'id': 'dialog-simple'
            }
          })
        )
      )
    )
  )
});

Component.dialogs.push({
  'full': React.createElement(
    Dialog,
    null,
    React.createElement(
      DialogItem,
      { id: 'dialog-full', full: true },
      React.createElement(
        DialogItemHeader,
        { classes: 'clearfix' },
        React.createElement(
          ReactText,
          { type: 'a', href: '#', classes: 'e-dialog-header-action e-left' },
          React.createElement(Icon, { name: 'action-settings-bluetooth' })
        ),
        React.createElement(
          ReactText,
          { classes: 'e-dialog-header-text' },
          'New event'
        ),
        React.createElement(
          ReactText,
          { classes: 'e-dialog-header-action e-right' },
          React.createElement(
            Btn,
            null,
            React.createElement(BtnItem, {
              classes: 'e-button',
              label: 'X',
              actionClick: 'dialog',
              actionType: {
                'action': 'hide',
                'id': 'dialog-full'
              }
            })
          )
        )
      ),
      React.createElement(
        DialogItemContent,
        null,
        React.createElement(
          ReactText,
          { type: 'h2', classes: 'e-dialog-second-title' },
          'Event'
        ),
        React.createElement(
          ReactText,
          { type: 'p' },
          'When text labels exceed the maximum button width, use stacked buttons to accommodate the text. Affirmative actions are stacked above dismissive actions.'
        )
      )
    )
  )
});

Component.tooltip = React.createElement(
  Btn,
  null,
  React.createElement(BtnItem, {
    classes: 'raised',
    label: 'Label Default',
    tooltipText: 'Tooltip Default',
    type: 'default',
    disabled: false,
    rippleEffect: true
  }),
  React.createElement(BtnItem, {
    classes: 'raised',
    label: 'Label Primary',
    tooltipText: 'Tooltip Primary',
    type: 'primary',
    disabled: false,
    rippleEffect: true
  }),
  React.createElement(BtnItem, {
    classes: 'raised',
    label: 'Label Succes',
    tooltipText: 'Tooltip Succes',
    type: 'succes',
    disabled: true,
    rippleEffect: true
  }),
  React.createElement(BtnItem, {
    classes: 'raised',
    label: 'Label Info',
    tooltipText: 'Tooltip Info',
    type: 'info',
    disabled: false,
    rippleEffect: true
  }),
  React.createElement(BtnItem, {
    classes: 'raised',
    label: 'Label Warning',
    tooltipText: 'Tooltip Warning',
    type: 'warning',
    disabled: false,
    rippleEffect: true
  }),
  React.createElement(BtnItem, {
    classes: 'raised',
    label: 'Label Danger',
    tooltipText: 'Tooltip Danger',
    type: 'danger',
    disabled: false,
    rippleEffect: true
  })
);

Component.lists = [];

Component.lists.push({
  'single-line': React.createElement(
    List,
    { type: 'single-line' },
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { type: 'div', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Attractions',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              ReactText,
              null,
              'Attractions'
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#attractions' },
          React.createElement(Icon, { name: 'communication-contacts' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#fun' },
          React.createElement(
            Block,
            { type: 'div', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Fun',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              ReactText,
              null,
              'Fun'
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#fun' },
          React.createElement(Icon, { name: 'communication-vpn-key' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#food' },
          React.createElement(
            Block,
            { type: 'div', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Food',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              ReactText,
              null,
              'Food'
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#food' },
          React.createElement(Icon, { name: 'editor-insert-emoticon' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#kids' },
          React.createElement(
            Block,
            { type: 'div', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Kids',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              ReactText,
              null,
              'Kids'
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#kids' },
          React.createElement(Icon, { name: 'hardware-security' })
        )
      )
    )
  )
});

Component.lists.push({
  'two-line': React.createElement(
    List,
    { type: 'two-line' },
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Attractions',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Attractions'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Attractions'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#attractions' },
          React.createElement(Icon, { name: 'communication-contacts' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#fun' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Fun',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Fun'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Fun'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#fun' },
          React.createElement(Icon, { name: 'communication-vpn-key' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#food' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Food',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Food'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Food'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#food' },
          React.createElement(Icon, { name: 'editor-insert-emoticon' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#kids' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Kids',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Kids'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Kids'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#kids' },
          React.createElement(Icon, { name: 'hardware-security' })
        )
      )
    )
  )
});

Component.lists.push({
  'multi-line': React.createElement(
    List,
    { type: 'multi-line' },
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { type: 'div', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Attractions',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Attractions'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                { type: 'em' },
                'Attractions subtitle'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Attractions'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#attractions' },
          React.createElement(Icon, { name: 'communication-contacts' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#fun' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Fun',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Fun'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                { type: 'em' },
                'Fun subtitle'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Fun'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#fun' },
          React.createElement(Icon, { name: 'communication-vpn-key' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#food' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Food',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Food'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                { type: 'em' },
                'Food subtitle'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Food'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#food' },
          React.createElement(Icon, { name: 'editor-insert-emoticon' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#kids' },
          React.createElement(
            Block,
            { type: 'span', classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: 'Kids',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                'Kids'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                { type: 'em' },
                'Kids subtitle'
              ),
              React.createElement('br', null),
              React.createElement(
                ReactText,
                null,
                'Here are more information about Kids'
              )
            )
          )
        ),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#kids' },
          React.createElement(Icon, { name: 'hardware-security' })
        )
      )
    )
  )
});

Component.list_controls = [];

Component.list_controls.push({
  'checkbox': React.createElement(
    List,
    { type: 'checkbox' },
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(SwitchItem, {
          type: 'checkbox',
          text: 'First List Checkbox',
          name: 'checkbox1'
        }),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#list' },
          React.createElement(Icon, { name: 'action-view-list' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(SwitchItem, {
          type: 'checkbox',
          text: 'Second List Checkbox',
          name: 'checkbox2',
          checked: true
        }),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#week' },
          React.createElement(Icon, { name: 'action-view-week' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(SwitchItem, {
          type: 'checkbox',
          text: 'Third List Checkbox',
          name: 'checkbox3'
        }),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#unlock' },
          React.createElement(Icon, { name: 'action-face-unlock' })
        )
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(SwitchItem, {
          type: 'checkbox',
          text: 'Fourth List Checkbox',
          name: 'checkbox4'
        }),
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-1', href: '#settings' },
          React.createElement(Icon, { name: 'action-settings-input-component' })
        )
      )
    )
  )
});

Component.list_controls.push({
  'checkbox-avatar': React.createElement(
    List,
    { type: 'checkbox', position: 'right' },
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: '1st List checkbox',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                '1st List checkbox'
              )
            )
          )
        ),
        React.createElement(SwitchItem, {
          type: 'checkbox',
          name: 'checkbox1'
        })
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: '2nd List checkbox',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                '2nd List checkbox'
              )
            )
          )
        ),
        React.createElement(SwitchItem, {
          type: 'checkbox',
          name: 'checkbox2'
        })
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: '3rd List checkbox',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                '3rd List checkbox'
              )
            )
          )
        ),
        React.createElement(SwitchItem, {
          type: 'checkbox',
          name: 'checkbox3'
        })
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#attractions' },
          React.createElement(
            Block,
            { classes: 'e-list-content' },
            React.createElement(ReactImage, {
              src: 'assets/img/card-user-img.jpg',
              alt: '4th List checkbox',
              classes: 'e-list-avatar'
            }),
            React.createElement(
              Block,
              { type: 'span' },
              React.createElement(
                ReactText,
                { type: 'strong' },
                '4th List checkbox'
              )
            )
          )
        ),
        React.createElement(SwitchItem, {
          type: 'checkbox',
          name: 'checkbox4'
        })
      )
    )
  )
});

Component.list_controls.push({
  'switches': React.createElement(
    List,
    { type: 'switch' },
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#wifi' },
          React.createElement(Icon, { name: 'device-network-wifi', classes: 'e-text-amber-900' }),
          React.createElement(
            ReactText,
            { type: 'strong' },
            'Wi-Fi Network'
          )
        ),
        React.createElement(SwitchItem, {
          type: 'switches',
          name: 'input-network-wifi',
          checked: true
        })
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#bluetooth' },
          React.createElement(Icon, { name: 'action-settings-bluetooth', classes: 'e-text-indigo-400' }),
          React.createElement(
            ReactText,
            { type: 'strong' },
            'Bluetooth settings'
          )
        ),
        React.createElement(SwitchItem, {
          type: 'switches',
          name: 'input-settings-bluetooth'
        })
      )
    ),
    React.createElement(
      ListItem,
      null,
      React.createElement(
        Block,
        { type: 'li' },
        React.createElement(
          ReactText,
          { type: 'a', classes: 'brick-11', href: '#data-usage' },
          React.createElement(Icon, { name: 'device-data-usage', classes: 'e-text-red-800' }),
          React.createElement(
            ReactText,
            { type: 'strong' },
            'Data usage'
          )
        )
      )
    )
  )
});

var menuAttractions = [{
  'link': '#',
  'text': 'Movie' }, {
  'link': '#',
  'text': 'Park' }, {
  'link': '#',
  'text': 'Playground'
}],
    menuDining = [{
  'link': '#',
  'text': 'Breakfast & brunch' }, {
  'link': '#',
  'text': 'New American' }, {
  'link': '#',
  'text': 'Sushi bars'
}],
    menuEducation = [{
  'link': '#Highschool',
  'text': 'Highschool' }, {
  'link': '#College',
  'text': 'College' }, {
  'link': '#Library',
  'text': 'Library'
}],
    menuFamily = [{
  'link': '#Kids',
  'text': 'Kids' }, {
  'link': '#Friends',
  'text': 'Friends' }, {
  'link': '#Relatives',
  'text': 'Relatives'
}];

Component.list_controls.push({
  'expand-offline': React.createElement(
    List,
    {
      type: 'expand',
      avatar: true,
      icon: true
    },
    React.createElement(ListItem, {
      inputName: 'input-1',
      icon: 'maps-local-attraction',
      contentLink: '#',
      contentText: 'Attractions',
      more: true,
      avatarLink: '#user-image',
      avatarImg: 'assets/img/card-user-img.jpg',
      avatarAlt: 'User avatar image',
      submenu: menuAttractions
    }),
    React.createElement(ListItem, {
      inputName: 'input-2',
      icon: 'maps-local-restaurant',
      contentLink: '#',
      contentText: 'Dining',
      more: true,
      avatarLink: '#user-image',
      avatarImg: 'assets/img/card-user-img.jpg',
      avatarAlt: 'User avatar image',
      submenu: menuDining
    }),
    React.createElement(ListItem, {
      inputName: 'input-3',
      icon: 'social-school',
      contentLink: '#',
      contentText: 'Education',
      more: true,
      avatarLink: '#user-image',
      avatarImg: 'assets/img/card-user-img.jpg',
      avatarAlt: 'User avatar image',
      submenu: menuEducation
    }),
    React.createElement(ListItem, {
      inputName: 'input-3',
      icon: 'social-group',
      contentLink: '#',
      contentText: 'Family',
      more: true,
      avatarLink: '#user-image',
      avatarImg: 'assets/img/card-user-img.jpg',
      avatarAlt: 'User avatar image',
      submenu: menuFamily
    })
  )
});

Component.text_fields = [];

Component.text_fields.push({
  'reactjs': React.createElement(
    Input,
    null,
    React.createElement(InputItem, {
      classes: 'e-input-group has-success',
      inputClasses: '',
      type: 'text',
      name: 'label',
      placeholder: 'Did you know a bear has 42 teeth'
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group has-success',
      inputClasses: '',
      type: 'text',
      name: 'label',
      placeholder: 'Did you know 8% of people have an extra rib',
      counter: 50
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group has-error',
      inputClasses: '',
      type: 'text',
      name: 'label',
      placeholder: 'Did you know 11% of people are left handed',
      counter: 20
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: '',
      type: 'text',
      name: 'label',
      placeholder: 'Did you know the Hawaiian alphabet has 12 letters',
      disabled: true
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: '',
      type: 'text',
      name: 'label',
      label: 'Did you know birds need gravity to swallow'
    })
  )
});

Component.text_fields.push({
  'textarea': React.createElement(
    Input,
    null,
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: '',
      type: 'textarea',
      name: 'label',
      placeholder: 'Did you know Topolino is the name for Mickey Mouse Italy'
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: '',
      type: 'textarea',
      name: 'label',
      label: 'Did you know there is no sound in space'
    })
  )
});

Component.text_fields.push({
  'validation': React.createElement(
    Input,
    null,
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: '',
      type: 'email',
      name: 'label',
      label: 'Did you know melophobia is the fear of music'
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: '',
      type: 'number',
      name: 'label',
      placeholder: 'Did you know womens hearts beat faster than mens',
      hint: 'Did you know womens hearts beat faster than mens'
    })
  )
});

Component.text_fields.push({
  'hints': React.createElement(
    Input,
    null,
    React.createElement(InputItem, {
      classes: 'e-input-group has-error',
      inputClasses: '',
      type: 'text',
      name: 'label',
      label: 'Did you know each time you see a full moon you always see the same side',
      hint: 'Did you know each time you see a full moon you always see the same side'
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group ',
      inputClasses: '',
      type: 'email',
      name: 'label',
      label: 'Email is required',
      hint: 'A valid email should contain @',
      counter: 40
    })
  )
});

Component.text_fields.push({
  'styling': React.createElement(
    Input,
    null,
    React.createElement(InputItem, {
      classes: 'e-input-group has-warning',
      inputClasses: 'e-input-success',
      type: 'text',
      name: 'label',
      placeholder: 'Did you know each time you see a full moon you always see the same side'
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group has-info',
      inputClasses: 'e-input-success',
      type: 'email',
      name: 'label',
      label: 'Floating label'
    }),
    React.createElement(InputItem, {
      classes: 'e-input-group',
      inputClasses: 'e-search',
      type: 'search',
      name: 'search',
      placeholder: 'Search...',
      required: true
    })
  )
});

Component.switches = React.createElement(
  Switch,
  null,
  React.createElement(SwitchItem, {
    type: 'radio',
    text: 'Radio Button 1',
    name: 'radioButton',
    defaultValue: 'value1',
    checked: true
  }),
  React.createElement(SwitchItem, {
    type: 'radio',
    text: 'Radio Button 2',
    name: 'radioButton',
    defaultValue: 'value2'
  }),
  React.createElement('br', null),
  React.createElement(SwitchItem, {
    type: 'checkbox',
    text: 'Switch Checkbox',
    name: 'checkbox1',
    checked: true
  }),
  React.createElement('br', null),
  React.createElement(SwitchItem, {
    type: 'switches',
    beforeText: 'Switches before',
    afterText: 'Switches after',
    checked: true,
    name: 'switches1'
  })
);

Component.snackbars_toast = [];

Component.snackbars_toast.push({
  'list': React.createElement(
    Snackbar,
    null,
    React.createElement(
      SnackbarItem,
      {
        id: 'snackbar1',
        classes: 'e-text-yellow-400'
      },
      'Hello to you from Essence'
    ),
    React.createElement(
      SnackbarItem,
      {
        id: 'snackbar2',
        classes: 'snackbar-item'
      },
      'Hello to them from Essence'
    ),
    React.createElement(
      SnackbarItem,
      {
        id: 'snackbar3',
        classes: 'snackbar-item'
      },
      'Hello to all of you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue viverra, eleifend elit in, sagittis tellus.'
    )
  )
});

Component.snackbars_toast.push({
  'buttons': React.createElement(
    Btn,
    null,
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Show me Snackbar 1',
      type: 'primary',
      disabled: false,
      rippleEffect: true,
      snackbar: 'snackbar1'
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Show me Snackbar 2',
      type: 'primary',
      disabled: false,
      rippleEffect: true,
      snackbar: 'snackbar2'
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Show me Snackbar 3',
      type: 'primary',
      disabled: false,
      rippleEffect: true,
      snackbar: 'snackbar3'
    }),
    React.createElement('br', null),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Toast 1 chicken',
      type: 'succes',
      disabled: false,
      rippleEffect: true,
      toast: 'toast1'
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Toast 2 chicken',
      type: 'succes',
      disabled: false,
      rippleEffect: true,
      toast: 'toast2'
    }),
    React.createElement(BtnItem, {
      classes: 'raised',
      label: 'Toast 3 chicken',
      type: 'succes',
      disabled: false,
      rippleEffect: true,
      toast: 'toast3'
    })
  )
});

Component.snackbars_toast.push({
  'toasts': React.createElement(
    Toast,
    null,
    React.createElement(
      ToastItem,
      {
        id: 'toast1',
        classes: 'toasts'
      },
      'Hello to you'
    ),
    React.createElement(
      ToastItem,
      {
        id: 'toast2',
        classes: 'toasts'
      },
      'Hello to me'
    ),
    React.createElement(
      ToastItem,
      {
        id: 'toast3',
        classes: 'toasts'
      },
      'Hello to all of you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget augue viverra, eleifend elit in, sagittis tellus.'
    )
  )
});

Component.progress = React.createElement(
  'div',
  null,
  React.createElement(Progress, { type: 'slider' }),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(Progress, { type: 'circle' }),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(Progress, { type: 'circle', small: true }),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(Progress, { type: 'dots' }),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(Progress, { type: 'fix' }),
  React.createElement('br', null),
  React.createElement('br', null),
  React.createElement(Progress, { type: 'dynamic' })
);

/* exported NavigationHome, NavigationStyles, NavigationComponents, menus_simple, menus_cover, imageGallery */
module.exports = function () {
  return Component;
};