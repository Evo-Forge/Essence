'use strict';

var body = document.body, // default React render path is html body
    byID = document.getElementById("header"),
    header = document.querySelector(".header"),
    content = document.querySelector(".content"),
    footer = document.querySelector(".footer"),
    React = Essence.React,
    AppBar = Essence.AppBar,
    BottomSheets = Essence.BottomSheets,
    BottomSheetsItem = Essence.BottomSheetsItem,
    Btn = Essence.Btn,
    BtnItem = Essence.BtnItem,
    Block = Essence.Block,
    Card = Essence.Card,
    CardItem = Essence.CardItem,
    CardItemHeader = Essence.CardItemHeader,
    CardItemContent = Essence.CardItemContent,
    CardItemFooter = Essence.CardItemFooter,
    Chip = Essence.Chip,
    ChipItem = Essence.ChipItem,
    DatePicker = Essence.DatePicker,
    DatePickerItem = Essence.DatePickerItem,
    DatePickerHeader = Essence.DatePickerHeader,
    DatePickerHeaderDay = Essence.DatePickerHeaderDay,
    DatePickerHeaderDate = Essence.DatePickerHeaderDate,
    DatePickerContent = Essence.DatePickerContent,
    DatePickerFooter = Essence.DatePickerFooter,
    Dialog = Essence.Dialog,
    DialogItem = Essence.DialogItem,
    DialogItemHeader = Essence.DialogItemHeader,
    DialogItemContent = Essence.DialogItemContent,
    DialogItemFooter = Essence.DialogItemFooter,
    Divider = Essence.Divider,
    Icon = Essence.Icon,
    Image = Essence.Image,
    Input = Essence.Input,
    InputItem = Essence.InputItem,
    List = Essence.List,
    ListItem = Essence.ListItem,
    Menu = Essence.Menu,
    MenuItem = Essence.MenuItem,
    Navigation = Essence.Navigation,
    Paper = Essence.Paper,
    PaperItem = Essence.PaperItem,
    Progress = Essence.Progress,
    Slider = Essence.Slider,
    SliderItem = Essence.SliderItem,
    Snackbar = Essence.Snackbar,
    SnackbarItem = Essence.SnackbarItem,
    Switch = Essence.Switch,
    SwitchItem = Essence.SwitchItem,
    TabItem = Essence.TabItem,
    TabMenu = Essence.TabMenu,
    Text = Essence.Text,
    Toast = Essence.Toast,
    ToastItem = Essence.ToastItem,
    ToolBar = Essence.ToolBar;

var appbar_menu_left = [
  {
    id: 'menu-appbar-left',
    type: 'menu',
    text: 'Options',
    link: '#',
    hide: true,
    classes: 'e-text-color-blue-500 e-left',
    items: [
      {
        type: 'menu',
        text: 'Notifications',
        link: '#notifications'
      },
      {
        type: 'menu',
        text: 'Flow',
        link: '#flow'
      },
      {
        type: 'divider'
      },
      {
        type: 'menu',
        text: 'Following',
        link: '#following'
      },
      {
        type: 'menu',
        text: 'Favorites',
        link: '#favorites'
      },

    ]
  }
];

var appbar_menu_right = [
  {
    id: 'menu-appbar-right',
    type: 'menu',
    text: 'Simple Menu',
    link: '#',
    hide: true,
    icon: 'navigation-more-vert',
    classes: 'e-text-color-blue-500 e-right',
    items: [
      {
        type: 'menu',
        text: 'Profile',
        link: '#profile'
      },
      {
        type: 'menu',
        text: 'Settings',
        link: '#settings'
      },
      {
        type: 'divider'
      },
      {
        type: 'menu',
        text: 'Support',
        link: '#support'
      },
      {
        type: 'menu',
        text: 'Logout',
        link: '#logout'
      },
    ]
  }
];

/*React.render(
    <Block type='div' classes='e-background-green-500 e-text-center'>
      your content by ID here
    </Block>
    ,byID
);*/

React.render(
    <Block type='div'>
      <Btn>
        <BtnItem
          icon='navigation-menu'
          classes={'simple-button e-left'}
        />
      </Btn>

      <Menu
        id='menu-options'
        placeholder='Options'
        classes='e-left'
      >
        <MenuItem>
          <Icon name='notification-sms' />
          <Text>SMS Notifications</Text>
        </MenuItem>

        <MenuItem>
          <Icon name='notification-tap-and-play' />
          <Text>Tap & Pay</Text>
        </MenuItem>

        <Block type='li' classes={'divider'} />

        <MenuItem>
          <Text type='a' href='http://www.pearlhq.com'>
            Pearl
          </Text>
        </MenuItem>
        <MenuItem>
          <Text type='a' href='http://www.google.com'>
            Google
          </Text>
        </MenuItem>
      </Menu>

      <Menu
        id='menu-profile'
        placeholder='Profile'
        classes='e-right'
      >
        <MenuItem>
          <Icon name='notification-sms' />
          <Text>Settings</Text>
        </MenuItem>

        <MenuItem>
          <Icon name='notification-tap-and-play' />
          <Text>Logout</Text>
        </MenuItem>
      </Menu>

      <BtnItem
        icon='action-favorite'
        classes={'simple-button e-right'}
      />
      <BtnItem
        icon='action-search'
        classes={'simple-button e-right'}
      />
    </Block>
    ,header
);

React.render(
    <Block type='div' classes='e-text-center'>
      Choose your amount: (default: 30%)
      <Slider>
        <SliderItem start={30} fill={true} discrete={true} />
      </Slider>
    </Block>
    ,content
);

React.render(
    <Block type='div' classes='e-text-center'>
      PearlHQ.com &copy; 2015
    </Block>
    ,footer
);
