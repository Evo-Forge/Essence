'use strict';

var React = require('react/addons'),
    AppBar =  require('./AppBar'),
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
    Image = require('./Image'),
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
    Text = require('./Text'),
    Toast = require('./Toast'),
    ToastItem = require('./ToastItem'),
    ToolBar =  require('./ToolBar');

// Google Analytics func
function contestEvents() {
  ga("send","event", "Contest", "New click", {
    "hitCallback": function() {
      document.location.href = './contest';
    }
  });
}

var Component = {};

// Essence - Components
Component.home = [];
Component.home.push({
  'download': (
    <Block type='div'>
      <Block type='div'>
        <Text
          type='a'
          eventAction='showNavigationComponent'
          classes='e-btn raised e-background-indigo-800'
          href='#getting-started-web'
          id='components-getting-started-web'
        >
           Get Started with Essence
        </Text>
        <Text
          type='a'
          classes='e-btn raised e-background-white e-text-indigo-800'
          target='_blank'
          href='https://github.com/PearlVentures/Essence'
        >
          Download from GitHub
        </Text>
      </Block>
      <Block type='hr' />
      <Block type='div'>

        <Text
          type='a'
          classes='e-btn raised e-background-amber-500'
          href='javascript:;'
          onClick={contestEvents}
        >
          enter the essence contest
        </Text>
      </Block>
    </Block>
  )
});

Component.navigation_menu = (
  <Navigation
    live={true}
    header='Essence'
    logo='assets/img/essence_icon.png'
  >
    <List
      classes='e-list-navigation'
      id='EssenceNavigation'
    >
      <ListItem
        listType='navigation'
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        primaryListImage='assets/img/material-design-b.png'
        contentText='Material Design'
        contentLink='#'
        hasSubmenu={true}
      >
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-home'
          >
            Home
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-material-design'
          >
            About
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-getting-started-web'
          >
            Getting Started Web
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-getting-started-native'
          >
            Getting Started Native
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-contact'
          >
            Contact
          </Text>
        </Block>
      </ListItem>

      <ListItem
        listType='navigation'
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        primaryListImage='assets/img/styles-b.png'
        contentText='Styles'
        contentLink='#styles'
        hasSubmenu={true}
      >
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-colors'
          >
            Colors
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-icons'
          >
            Icons
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-typography'
          >
            Typography
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            href='#'
            id='components-classes'
          >
            Useful classes
          </Text>
        </Block>
      </ListItem>

      <ListItem
        listType='navigation'
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        primaryListImage='assets/img/components-b.png'
        contentText='Components'
        contentLink='#components'
        hasSubmenu={true}
      >
        <Block type='li'>
          <Text
            type='a'
            id='components-appbar'
            href='#'
          >
            Appbar
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-bottom-sheets'
            href='#'
          >
            Bottom Sheets
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-buttons'
            href='#'
          >
            Buttons
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-cards'
            href='#'
          >
            Cards
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-chips'
            href='#'
          >
            Chips
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-datepicker'
            href='#'
          >
            Date Picker
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-dialogs'
            href='#'
          >
            Dialogs
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-dividers'
            href='#'
          >
            Dividers
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-grids'
            href='#'
          >
            Grids
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-lists'
            href='#'
          >
            Lists
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-list-controls'
            href='#'
          >
            List Controls
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-menus'
            href='#'
          >
            Menus
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-navigation'
            href='#'
          >
            Navigation Drawer
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-paper'
            href='#'
          >
            Paper
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-progress'
            href='#'
          >
            Progress
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-slider'
            href='#'
          >
            Sliders
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-snackbars-toast'
            href='#'
          >
            Snackbars and Toast
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-switches'
            href='#'
          >
            Switches
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-tabs'
            href='#'
          >
            Tabs
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-text-fields'
            href='#'
          >
            Text fields
          </Text>
        </Block>
        <Block type='li'>
          <Text
            type='a'
            id='components-tooltips'
            href='#'
          >
            Tooltips
          </Text>
        </Block>
      </ListItem>
    </List>
  </Navigation>
);

Component.navigation_buttons = (
  <Btn>
    <BtnItem
      type={'flat'}
      classes={'simple-button'}
      icon='navigation-menu'
      actionClick='navigation'
    />
  </Btn>
);

Component.navigation_title = (
  <Text id='navigationTitle'>
    Essence - Material Design
  </Text>
);

var NavigationHome =
    [
      {
        'text': 'Home',
      },
      {
        'text': 'About',
      },
      {
        'text': 'Getting Started',
      },
      {
        'text': 'Contact',
      }
    ],

    NavigationStyles =
    [
      {
        'text': 'Colors',
      },
      {
        'text': 'Icons',
      },
      {
        'text': 'Typography',
      },
      {
        'text': 'Useful classes',
      }
    ],

    NavigationComponents =
    [
      {
        'text': 'Appbar',
      },
      {
        'text': 'Bottom Sheets',
      },
      {
        'text': 'Buttons',
      },
      {
        'text': 'Cards',
      },
      {
        'text': 'Chips',
      },
      {
        'text': 'Dialogs',
      },
      {
        'text': 'Dividers',
      },
      {
        'text': 'Grids',
      },
      {
        'text': 'Lists',
      },
      {
        'text': 'List Controls',
      },
      {
        'text': 'Menus',
      },
      {
        'text': 'Navigation Drawer',
      },
      {
        'text': 'Paper',
      },
      {
        'text': 'Progress',
      },
      {
        'text': 'Snackbars and Toast',
      },
      {
        'text': 'Switches',
      },
      {
        'text': 'Tabs',
      },
      {
        'text': 'Text fields',
      },
      {
        'text': 'Tooltips',
      }
    ];

Component.navigation = (
  <Navigation
    live={false}
    header='Navigation'
    logo='assets/img/essence_icon.png'
  >
    <List
      classes='e-list-navigation'
      id='NavigationDrawer'
    >
      <ListItem
        listType='navigation'
        contentText='Material Design'
        contentLink='#'
        hasSubmenu={true}
      >
        <Block type='li'>
          <Text>
            Home
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            About
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Getting Started
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Contact
          </Text>
        </Block>
      </ListItem>

      <ListItem
        listType='navigation'
        contentText='Styles'
        contentLink='#styles'
        hasSubmenu={true}
      >
        <Block type='li'>
          <Text>
            Colors
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Icons
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Typography
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Useful classes
          </Text>
        </Block>
      </ListItem>

      <ListItem
        listType='navigation'
        contentText='Components'
        contentLink='#components'
        hasSubmenu={true}
      >
        <Block type='li'>
          <Text>
            Appbar
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Bottom Sheets
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Buttons
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Cards
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Chips
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Dialogs
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Dividers
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Grids
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Lists
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            List Controls
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Menus
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Navigation Drawer
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Paper
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Progress
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Slider
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Snackbars and Toast
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Switches
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Tabs
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Text fields
          </Text>
        </Block>
        <Block type='li'>
          <Text>
            Tooltips
          </Text>
        </Block>
      </ListItem>
    </List>
  </Navigation>
);

Component.contact = (
  <Input>
    <InputItem
      classes={'e-input-group'}
      type='text'
      name='message'
      label='Subject'
    >
    </InputItem>
    <InputItem
      classes={'e-input-group'}
      type='email'
      name='email'
      label='Email address'
    >
    </InputItem>
    <InputItem
      classes={'e-input-group'}
      type='textarea'
      name='message'
      label='Message'
    >
    </InputItem>

    <Btn>
      <BtnItem
        classes={'raised e-background-indigo-400'}
        label='Send Message'
        type='primary'
        rippleEffect={true}
      >
      </BtnItem>
    </Btn>

  </Input>
);


Component.appbar = (
  <AppBar>
    <Menu
      id='menu-appbar-icon-menu'
      classes={'e-text-color-blue-500 cover e-left'}
      icon='navigation-menu'
    >
      <MenuItem>
        <Text>New project</Text>
      </MenuItem>

      <MenuItem>
        <Text>New user</Text>
      </MenuItem>

      <MenuItem>
        <Text>More tools</Text>
      </MenuItem>

      <MenuItem>
        <Text>Exit</Text>
      </MenuItem>
    </Menu>

    <Menu
      id='menu-appbar-left'
      classes={'e-text-color-blue-500 cover e-left'}
      placeholder='Options'
    >
      <MenuItem>
        <Icon name='notification-sms' />
        <Text>Notifications</Text>
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
      id='menu-appbar-right'
      classes={'e-text-color-blue-500 cover e-right'}
      icon='navigation-more-vert'
      right={true}
    >
      <MenuItem>
        <Text>Profile</Text>
      </MenuItem>

      <MenuItem>
        <Text>Settings</Text>
      </MenuItem>

      <Block type='li' classes={'divider'} />

      <MenuItem>
        <Text>Support</Text>
      </MenuItem>

      <MenuItem>
        <Text>Logout</Text>
      </MenuItem>
    </Menu>

    <Btn>
      <BtnItem
        icon='action-favorite'
        classes={'simple-button e-right'}
      />
      <BtnItem
        icon='action-search'
        classes={'simple-button e-right'}
      />
    </Btn>
  </AppBar>
);

Component.bottom_sheets = [];

Component.bottom_sheets.push({
  'button-simple': (
    <Btn>
      <BtnItem
        type='primary'
        classes={'raised'}
        label='Show bottom sheets'
        rippleEffect={true}
        actionClick='bottomsheets'
        actionType={{
          'action': 'show',
          'targetID': 'bottomsheet-simple'
        }}
      />
    </Btn>
  )
});

Component.bottom_sheets.push({
  'button-twolines': (
    <Btn>
      <BtnItem
        type='warning'
        classes={'raised'}
        label='Show bottom sheets lines'
        rippleEffect={true}
        actionClick='bottomsheets'
        actionType={{
          'action': 'show',
          'targetID': 'bottomsheet-twolines'
        }}
      />
    </Btn>
  )
});

Component.bottom_sheets.push({
  'button-bigicons': (
    <Btn>
      <BtnItem
        type='succes'
        classes={'raised'}
        label='Show bottom sheets icons'
        rippleEffect={true}
        actionClick='bottomsheets'
        actionType={{
          'action': 'show',
          'targetID': 'bottomsheet-bigicons'
        }}
      />
    </Btn>
  )
});

Component.bottom_sheets.push({
  'simple': (
    <BottomSheets>
      <BottomSheetsItem
        id={'bottomsheet-simple'}
      >
        <List type='single-line'>
          <ListItem>
            <Block type='li'>
              <Text type='a' href='#phone'>
                <Icon name='maps-local-phone' classes={'e-list-icon'} />
                <Text>Mobile</Text>
              </Text>
            </Block>
          </ListItem>

          <ListItem>
            <Block type='li'>
              <Text type='a' href='#share'>
                <Icon name='social-share' classes={'e-list-icon'} />
                <Text>Share</Text>
              </Text>
            </Block>
          </ListItem>

          <ListItem>
            <Block type='li'>
              <Text type='a' href='#upload'>
                <Icon name='file-cloud-upload' classes={'e-list-icon'} />
                <Text>Upload</Text>
              </Text>
            </Block>
          </ListItem>

          <ListItem>
            <Block type='li'>
              <Text type='a' href='#copy'>
                <Icon name='content-content-copy' classes={'e-list-icon'} />
                <Text>Copy</Text>
              </Text>
            </Block>
          </ListItem>

          <ListItem>
            <Block type='li'>
              <Text type='a' href='#print'>
                <Icon name='action-print' classes={'e-list-icon'} />
                <Text>Print</Text>
              </Text>
            </Block>
          </ListItem>
        </List>
      </BottomSheetsItem>
    </BottomSheets>
  )
});

Component.bottom_sheets.push({
  'twolines': (
    <BottomSheets>
      <BottomSheetsItem
        id={'bottomsheet-twolines'}
      >
        <List type='two-line'>
          <ListItem>
            <Block type='li'>
              <Text type='a' href='#attractions'>
                <Block type='span' classes={'e-list-content'}>
                  <Image
                    src='assets/img/card-user-img.jpg'
                    alt='Attractions'
                    classes={'e-list-avatar'}
                  />
                  <Block type='span'>
                    <Text type='strong'>Alice</Text>
                  </Block>
                </Block>
              </Text>
            </Block>
          </ListItem>

          <ListItem>
            <Block type='li'>
              <Text type='a' classes={'brick-12'} href='#fun'>
                <Block type='span' classes={'e-list-content'}>
                  <Icon name='maps-local-phone' classes={'e-list-icon'} />
                  <Block type='span'>
                    <Text type='strong'>(555) 085-0001</Text>
                    <br />
                    <Text>Mobile</Text>
                  </Block>
                </Block>
              </Text>
            </Block>
          </ListItem>

          <ListItem>
            <Block type='li'>
              <Text type='a' classes={'brick-12'} href='#fun'>
                <Block type='span' classes={'e-list-content'}>
                  <Icon name='maps-local-phone' classes={'e-list-icon'} />
                  <Block type='span'>
                    <Text type='strong'>(564) 123-4567</Text>
                    <br />
                    <Text>Home</Text>
                  </Block>
                </Block>
              </Text>
            </Block>
          </ListItem>
        </List>
      </BottomSheetsItem>
    </BottomSheets>
  )
});

Component.bottom_sheets.push({
  'bigicons': (
    <BottomSheets>
      <BottomSheetsItem
        id={'bottomsheet-bigicons'}
      >
        <List
          type='big-icon'
          icon={true}
        >
          <ListItem
            contentLink='#gmail'
            contentTitle='Gmail'
            icon='communication-email'
          />
          <ListItem
            contentLink='#phone'
            contentTitle='Phone'
            icon='notification-phone-in-talk'
          />
          <ListItem
            contentLink='#copy'
            contentTitle='Copy'
            icon='content-content-copy'
          />
          <ListItem
            contentLink='#social'
            contentTitle='Group'
            icon='social-group'
          />
          <ListItem
            contentLink='#map'
            contentTitle='Map'
            icon='maps-map'
          />
          <ListItem
            contentLink='#bar'
            contentTitle='Bar'
            icon='maps-local-bar'
          />

        </List>
      </BottomSheetsItem>
    </BottomSheets>
  )
});

var toolbar_menu_right = [
  {
    id: 'toolbar-menu-right',
    type: 'menu',
    hide: true,
    icon: 'navigation-more-vert',
    classes: 'e-text-color-blue-500 cover e-right',
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

Component.toolbar = (
  <ToolBar title='Toolbar'>
    <Menu items={toolbar_menu_right} />
    <Btn
      classes={'e-right'}
    >
      <BtnItem
        icon='action-favorite'
        classes={'simple-button e-right'}
      />
      <BtnItem
        icon='action-search'
        classes={'simple-button e-right'}
      />
      <BtnItem
        type={'primary'}
        label='Create Action'
        classes={'raised e-right'}
        rippleEffect={true}
      />
    </Btn>
  </ToolBar>
);

Component.paper = (
  <Paper>
    <PaperItem
      classes={'e-shadow-1 e-text-blue-grey-400'}
    >
      PaperItem: simple <strong>shadow-1</strong>
    </PaperItem>

    <br />
    <br />

    <PaperItem
      type={'sharp'}
      classes={'e-shadow-2 e-text-blue-grey-400'}
    >
      PaperItem: sharp <strong>shadow-2</strong>
    </PaperItem>

    <br />
    <br />

    <PaperItem
      type={'circle'}
      classes={'e-shadow-3 e-text-blue-grey-400'}
    >
      PaperItem: circle <strong>shadow-3</strong>
    </PaperItem>
  </Paper>
);

Component.tabs = (
  <TabMenu
    type='simple'
    id={'tab_menu_simple'}
    classes='e-background-indigo-400'
  >
    <TabItem
      type='list'
      id='tab-item-one'
      label='Tab Item One'
    />
    <TabItem
      type='content'
      id='tab-item-one'
    >
      <h2 className='e-display-1'>As Samuel L Jackson used to say:</h2>

      <p className='e-text-blue-grey-400'>
      The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
      </p>
    </TabItem>

    <TabItem
      type='list'
      id='tab-item-two'
      label='Tab Item Two'
    />
    <TabItem
      type='content'
      id='tab-item-two'
    >
      <h2 className='e-display-1'>Still Samuel L Jackson:</h2>
      <p className='e-text-blue-grey-400'>
You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.
      </p>

      <p>
        <Btn>
          <BtnItem
            classes={'flat'}
            label='Say Hello!'
            type='danger'
            rippleEffect={true}
          />
        </Btn>
      </p>
    </TabItem>

    <TabItem
      type='list'
      id='tab-item-tree'
      label='Tab Item Tree'
    />
    <TabItem
      type='content'
      id='tab-item-tree'
    >
      <h2 className='e-display-1'>Yeap, him again:</h2>
      <p className='e-text-blue-grey-400'>Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine.
You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water.
We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I.
We're on the same curve, just on opposite ends.
      </p>
      <div className='brick brick-4'>
        <Chip>
          <ChipItem
            image='assets/img/card-user-img.jpg'
            imageAlt='Card Image'
            name='Gonzales'
            email='gon@zal.es'
          >
          </ChipItem>
          <ChipItem
            image='assets/img/card-user-img.jpg'
            imageAlt='Card Image'
            name='Iolanda Curtiz'
            email='io@lan.da'
          >
          </ChipItem>
          <ChipItem
            image='assets/img/card-user-img.jpg'
            imageAlt='Card Image'
            name='Gizela Timliv'
            email='gizela@timl.iv'
          >
          </ChipItem>
        </Chip>
      </div>
    </TabItem>
  </TabMenu>
);

Component.slider = [];

Component.slider.push({
  'simple': (
    <Slider>
      <SliderItem start={10} fill={false} />
    </Slider>
  )
});

Component.slider.push({
  'editable': (
    <Slider>
      <SliderItem start={47} fill={true} editable={true} />
    </Slider>
  )
});

Component.slider.push({
  'disable': (
    <Slider>
      <SliderItem start={50} fill={true} disable={true} />
    </Slider>
  )
});

Component.slider.push({
  'discrete': (
    <Slider>
      <SliderItem start={23} fill={true} discrete={true} />
    </Slider>
  )
});

Component.slider.push({
  'steps': (
    <Slider>
      <SliderItem start={20} fill={true} discrete={true} steps={true} />
    </Slider>
  )
});

var menus_simple = [
  {
    id: 'menu-simple',
    type: 'menu',
    text: 'Options (Simple Menu)',
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

var menus_cover = [
  {
    id: 'menu-cover',
    type: 'menu',
    text: 'Options (Simple Menu Cover)',
    link: '#',
    hide: true,
    classes: 'cover mobile',
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

var menus_cascade = [
  {
    id: 'menu-cascade-cover',
    type: 'menu',
    text: 'Options (Cascading Menu)',
    link: '#',
    hide: true,
    classes: "cover",
    items: [
      {
        type: 'menu',
        text: 'Twocows',
        link: '#Twocows'
      },
      {
        type: 'menu',
        text: 'Marvel',
        link: '#Marvel'
      },
      {
        type: 'divider'
      },
      {
        type: 'menu',
        text: 'Shuheisha',
        link: '#Shuheisha'
      },
      {
        type: 'more',
        text: 'DC Comics',
        items: [
          {
            type: 'menu',
            text: 'Twocows',
            link: '#Twocows'
          },
          {
            type: 'menu',
            text: 'Marvel',
            link: '#Marvel'
          },
          {
            type: 'divider'
          },
          {
            type: 'menu',
            text: 'Shuheisha',
            link: '#Shuheisha'
          },
          {
            type: 'more',
            text: 'DC Comics',
            link: '#Comics'
          }
        ]
      },
    ]
  }
];

Component.menus = [];

Component.menus.push({
  'simple': (
    <Menu
      id='menu-simple'
      placeholder='Show Menu Simple'
    >
      <MenuItem>
        <Icon name='notification-sms' />
        <Text>SMS Notifications</Text>
      </MenuItem>

      <MenuItem>
        <Icon name='notification-tap-and-play' />
        <Text>Tap & Pay</Text>
      </MenuItem>

      <MenuItem classes={'divider'} />

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
  )
});

Component.menus.push({
  'cover': (
    <Menu
      id='menu-cover'
      classes={'cover mobile'}
      placeholder='Show Menu Cover'
    >
      <MenuItem>
        <Icon name='notification-sms' />
        <Text>SMS Notifications</Text>
      </MenuItem>

      <MenuItem>
        <Icon name='notification-tap-and-play' />
        <Text>Tap & Pay</Text>
      </MenuItem>

      <MenuItem classes={'divider'} />

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
  )
});

Component.menus.push({
  'fab': (
    <Menu
      id='menu-fab'
      type='fab'
    >
      <MenuItem>
        <Text type='a' href='#' classes='e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900'>
          <Icon name='action-assessment' />
        </Text>
      </MenuItem>

      <MenuItem>
        <Text type='a' href='#' classes='e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900'>
          <Icon name='action-assignment-ind' />
        </Text>
      </MenuItem>

      <MenuItem>
        <Text type='a' href='#' classes='e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900'>
          <Icon name='action-loyalty' />
        </Text>
      </MenuItem>

      <MenuItem>
        <Text type='a' href='#' classes='e-paper e-background-white circle e-shadow-1 no-min-size e-text-red-900'>
          <Icon name='action-print' />
        </Text>
      </MenuItem>
    </Menu>
  )
});


Component.menus.push({
  'cascade': (
    <Menu items={menus_cascade} />
  )
});

Component.menus.push({
  'checkbox-inactive': (
    <Menu
      id='menu-checkbox'
      placeholder='Menu with Switches'
      classes='brick-4'
    >
      <MenuItem>
        <SwitchItem
          type='checkbox'
          name='notification-sms'
          classes={'e-left'}
        />
        <Text> Receive SMS Notifications</Text>
        <Icon
          name='notification-sms'
          classes={'e-right e-text-green-400'}
        />
      </MenuItem>

      <MenuItem>
        <SwitchItem
          type='checkbox'
          name='notification-sms'
          classes={'e-left'}
        />
        <Text> Receive Alerts Notifications</Text>
        <Icon
          name='alert-warning'
          classes={'e-right e-text-green-400'}
        />
      </MenuItem>

      <MenuItem>
        <SwitchItem
          type='checkbox'
          name='notification-sms'
          classes={'e-left'}
        />
        <Text> Receive Email Notifications</Text>
        <Icon
          name='communication-email'
          classes={'e-right e-text-green-400'}
        />
      </MenuItem>
    </Menu>
  )
});

Component.buttons = [];

Component.buttons.push({
  'fab': (
  <Btn>
    <BtnItem
      icon='action-favorite'
      type='fab'
      rippleEffect={true}
    />
    <BtnItem
      icon='action-favorite'
      type='fab'
      rippleEffect={true}
      mini={true}
    />
  </Btn>)
});

Component.buttons.push({
  'raised-1': (
  <Btn>
    <BtnItem
      classes={'raised'}
      label='Default'
      tooltip='Tooltip Default'
      type='default'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Primary'
      tooltip='Tooltip Primary'
      type='primary'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Succes'
      tooltip='Tooltip Succes'
      type='succes'
      rippleEffect={true}
      disabled={true}
    />
  </Btn>)
});

Component.buttons.push({
  'raised-2': (
  <Btn>
    <BtnItem
      classes={'raised'}
      label='Info'
      tooltip='Tooltip Info'
      type='info'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Warning'
      tooltip='Tooltip Warning'
      type='warning'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Danger'
      tooltip='Tooltip Danger'
      type='danger'
      rippleEffect={true}
    />
  </Btn>)
});

Component.buttons.push({
  'flat-1': (
  <Btn>
    <BtnItem
      classes={'flat'}
      label='Default'
      type='default'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Primary'
      type='primary'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Succes'
      type='succes'
      rippleEffect={true}
    />
  </Btn>)
});
Component.buttons.push({
  'flat-2': (
  <Btn>
    <BtnItem
      classes={'flat'}
      label='Info'
      type='info'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Warning'
      type='warning'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Danger'
      type='danger'
      rippleEffect={true}
    />
  </Btn>)
});

var imageGallery = [
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  },
  {
    src: 'assets/img/card-img.jpg',
    alt: 'Car image'
  }
];

Component.cards = [];

Component.cards.push({
  'default': (
  <Card>
    <CardItem>
      <Block type="div" classes={"card-main-image"}>
        <Image src="assets/img/card-img.jpg" alt="Card Header Image" />
        <Text type="h1" classes={"e-headline"}>
          Going to Ibiza
        </Text>
      </Block>

      <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
        <Text type="h4">
          Limit supplemental actions to two actions, in addition to an overflow menu.
        </Text>
      </CardItemContent>

      <CardItemFooter>
        <Block type="div" classes={"e-left"}>
          <BtnItem
            classes={'flat'}
            label='No'
            type='default'
            rippleEffect={true}
          />
        </Block>
        <Block type="div" classes={"e-left"}>
          <BtnItem
            classes={'flat e-text-indigo-400'}
            label='Yes'
            type='danger'
            rippleEffect={true}
          />
        </Block>
      </CardItemFooter>
    </CardItem>
  </Card>)
});

Component.cards.push({
  'header': (
  <Card>
    <CardItem>
      <CardItemHeader>
        <Block type="div" classes={"card-header-image"}>
          <Image src="assets/img/card-user-img.jpg" alt="Card Header Image" />
        </Block>

        <Block type="div" classes={"card-header-text"}>
          <Text type="h2" classes={"e-title"}>Card Title</Text>
          <Text type="h3" classes={"e-subhead e-text-blue-grey-400"}>Card Subhead</Text>
        </Block>
      </CardItemHeader>

      <Block type="div" classes={"card-main-image"}>
        <Image src="assets/img/card-img.jpg" alt="Card Header Image" />
        <Text type="a" href="#carja" classes={"e-headline"}>
          Going to Ibiza
        </Text>
      </Block>

      <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
        <Text type="h4">
          Limit supplemental actions to two actions, in addition to an overflow menu.
        </Text>
      </CardItemContent>

    </CardItem>
  </Card>)
});

Component.cards.push({
  'gallery': (
  <Card>
    <CardItem>
      <CardItemHeader>
        <Block type="div" classes={"card-header-image"}>
          <Image src="assets/img/card-user-img.jpg" alt="Card Header Image" />
        </Block>

        <Block type="div" classes={"card-header-text"}>
          <Text type="a" href="#card-gallery" classes={"e-title"}>Card Gallery</Text>
          <Text type="h3" classes={"e-subhead e-text-blue-grey-400"}>Multiple images</Text>
        </Block>
      </CardItemHeader>

      <Block type="div" classes={"card-main-image"}>
        <Block type="div" classes={"card-gallery"}>
          <Image src="assets/img/card-img.jpg" alt="Card Image 1" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 2" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 3" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 4" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 5" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 6" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 7" />
          <Image src="assets/img/card-img.jpg" alt="Card Image 8" />
        </Block>
      </Block>

      <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
        <Text type="h4">
          Limit supplemental actions to two actions, in addition to an overflow menu.
        </Text>
      </CardItemContent>

      <CardItemFooter>
        <Block type="div" classes={"e-left"}>
          <BtnItem
            classes={'flat e-left'}
            label='No'
            type='default'
            rippleEffect={true}
          />
        </Block>
        <Block type="div" classes={"e-right"}>
          <BtnItem
            classes={'flat e-left e-text-indigo-400'}
            label='Yes'
            type='danger'
            rippleEffect={true}
          />
        </Block>
      </CardItemFooter>
    </CardItem>
  </Card>)
});

Component.cards.push({
  'divider': (
  <Card>
    <CardItem>
      <Block type="div" classes={"card-main-image"}>
        <Image src="assets/img/card-img.jpg" alt="Card Header Image" />
        <Text type="h1" classes={"e-headline"}>
          Going to Ibiza
        </Text>
      </Block>

      <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
        <Text type="h4">
          Limit supplemental actions to two actions, in addition to an overflow menu.
        </Text>
      </CardItemContent>

      <CardItemFooter>
        <Block type="div" classes={"e-right"}>
          <BtnItem
            classes={'flat e-text-indigo-400'}
            label='A'
            type='danger'
            rippleEffect={true}
          />
        </Block>
        <Block type="div" classes={"e-left"}>
          <BtnItem
            classes={'flat'}
            label='B'
            type='default'
            rippleEffect={true}
          />
        </Block>
      </CardItemFooter>
    </CardItem>
  </Card>)
});

Component.cards.push({
  'simple': (
  <Card>
    <CardItem>
      <CardItemHeader>
        <Block type="div" classes={"card-header-image"}>
          <Image src="assets/img/card-user-img.jpg" alt="Card Header Image" />
        </Block>

        <Block type="div" classes={"card-header-text"}>
          <Text type="a" href="#card-gallery" classes={"e-title"}>Car photography</Text>
          <Text type="h3" classes={"e-subhead e-text-blue-grey-400"}>By John Doe</Text>
        </Block>
      </CardItemHeader>

      <CardItemFooter>
        <Block type="div" classes={"e-right"}>
          <BtnItem
            classes={'flat e-text-indigo-400'}
            label='A'
            type='danger'
            rippleEffect={true}
          />
        </Block>
        <Block type="div" classes={"e-left"}>
          <BtnItem
            classes={'flat'}
            label='B'
            type='default'
            rippleEffect={true}
          />
        </Block>
      </CardItemFooter>
    </CardItem>
  </Card>)
});

Component.cards.push({
  'left-image': (
  <Card>
    <CardItem>
      <Block type="div" classes={"left-image"}>
        <Image src="assets/img/car.jpg" alt="Card Header Image" />
      </Block>

      <Block type="div" classes={"content-after-image"}>
        <Block type="div" classes={"card-supporting-text"}>
          <Text type="h1" classes={"e-title"}>Car photography</Text>
          <Text type="p" classes={"e-subhead"}>By John Doe</Text>
        </Block>

        <CardItemFooter>
          <Block type="div" classes={"e-right"}>
            <BtnItem
              classes={'flat e-text-indigo-400'}
              label='A'
              type='danger'
              rippleEffect={true}
            />
          </Block>
          <Block type="div" classes={"e-left"}>
            <BtnItem
              classes={'flat'}
              label='B'
              type='default'
              rippleEffect={true}
            />
          </Block>
        </CardItemFooter>
      </Block>
    </CardItem>
  </Card>)
});

Component.chips = (
  <Chip>
    <ChipItem
      image='assets/img/card-user-img.jpg'
      imageAlt='Card Image'
      name='Gonzales'
      email='gon@zal.es'
    >
    </ChipItem>
    <ChipItem
      image='assets/img/card-user-img.jpg'
      imageAlt='Card Image'
      name='Iolanda Curtiz'
      email='io@lan.da'
    >
    </ChipItem>
    <ChipItem
      image='assets/img/card-user-img.jpg'
      imageAlt='Card Image'
      name='Gizela Timliv'
      email='gizela@timl.iv'
    >
    </ChipItem>
  </Chip>
);

Component.datepicker = [];

Component.datepicker.push({
  'input-simple': (
    <InputItem
      classes={'e-input-group e-text-green-600'}
      type='text'
      name='datepicker-simple'
      label='Select Date'
      actionClick='datepicker'
      actionType={{
        'action': 'show',
        'id': 'datepicker-simple'
      }}
    />
  )
});

Component.datepicker.push({
  'input-horizontal': (
    <InputItem
      classes={'e-input-group e-text-green-600'}
      type='text'
      name='datepicker-horizontal'
      label='Select Date'
      actionClick='datepicker'
      actionType={{
        'action': 'show',
        'id': 'datepicker-horizontal'
      }}
    />
  )
});

Component.datepicker.push({
  'simple': (
    <DatePicker id='datepicker-simple'>
      <DatePickerHeader classes='e-background-green-600' />
      <DatePickerContent />
      <DatePickerFooter>
        <Btn>
          <BtnItem
            type='succes'
            classes={'flat e-right e-text-green-600'}
            label='OK'
            actionClick='datepicker'
            actionType={{
              'action': 'setValue',
              'id': 'datepicker-simple'
            }}
          />
          <BtnItem
            type='danger'
            classes={'flat e-right e-text-green-600'}
            label='CANCEL'
            actionClick='datepicker'
            actionType={{
              'action': 'hide',
              'id': 'datepicker-simple'
            }}
          />
        </Btn>
      </DatePickerFooter>
    </DatePicker>
  )
});

Component.datepicker.push({
  'horizontal': (
    <DatePicker id='datepicker-horizontal' classes={'horizontal'}>
      <DatePickerHeader classes='e-background-green-600' />
      <DatePickerContent />
      <DatePickerFooter>
        <Btn>
          <BtnItem
            type='succes'
            classes={'flat e-right e-text-green-600'}
            label='OK'
            actionClick='datepicker'
            actionType={{
              'action': 'setValue',
              'id': 'datepicker-horizontal'
            }}
          />
          <BtnItem
            type='danger'
            classes={'flat e-right e-text-green-600'}
            label='CANCEL'
            actionClick='datepicker'
            actionType={{
              'action': 'hide',
              'id': 'datepicker-horizontal'
            }}
          />
        </Btn>
      </DatePickerFooter>
    </DatePicker>
  )
});

Component.dialogs = [];

Component.dialogs.push({
  'button-simple': (
    <Btn>
      <BtnItem
        type='primary'
        classes={'raised'}
        label='Show Simple Dialog'
        rippleEffect={true}
        actionClick='dialog'
        actionType={{
          'action': 'show',
          'id': 'dialog-simple'
        }}
      />
    </Btn>
  )
});

Component.dialogs.push({
  'button-full': (
    <Btn>
      <BtnItem
        type='warning'
        classes={'raised'}
        label='Show Full Dialog'
        rippleEffect={true}
        actionClick='dialog'
        actionType={{
          'action': 'show',
          'id': 'dialog-full'
        }}
      />
    </Btn>
  )
});

Component.dialogs.push({
  'simple': (
    <Dialog>
      <DialogItem id='dialog-simple'>
        <DialogItemHeader>
          <Text type='h2'>Dialog title</Text>
        </DialogItemHeader>

        <DialogItemContent>
          <Text type='p'>
            When text labels exceed the maximum button width,
            use stacked buttons to accommodate the text.
            Affirmative actions are stacked above dismissive actions.
          </Text>
        </DialogItemContent>

        <DialogItemFooter>
          <Btn>
            <BtnItem
              type='danger'
              classes={'flat'}
              label='Disagree'
              actionClick='dialog'
              actionType={{
                'action': 'hide',
                'id': 'dialog-simple'
              }}
            />
            <BtnItem
              type='primary'
              classes={'flat'}
              label='Agree'
              actionClick='dialog'
              actionType={{
                'action': 'hide',
                'id': 'dialog-simple'
              }}
            />
          </Btn>
        </DialogItemFooter>
      </DialogItem>
    </Dialog>
  )
});

Component.dialogs.push({
  'full': (
    <Dialog>
      <DialogItem id='dialog-full' full={true}>
        <DialogItemHeader classes={'clearfix'}>
          <Text type='a' href='#' classes={'e-dialog-header-action e-left'}>
            <Icon name={'action-settings-bluetooth'} />
          </Text>
          <Text classes={'e-dialog-header-text'}>New event</Text>
          <Text classes={'e-dialog-header-action e-right'}>
            <Btn>
              <BtnItem
                classes={'e-button'}
                label='X'
                actionClick='dialog'
                actionType={{
                  'action': 'hide',
                  'id': 'dialog-full'
                }}
              />
            </Btn>
          </Text>
        </DialogItemHeader>

        <DialogItemContent>
          <Text type='h2' classes={'e-dialog-second-title'}>
            Event
          </Text>
          <Text type='p'>
            When text labels exceed the maximum button width,
            use stacked buttons to accommodate the text.
            Affirmative actions are stacked above dismissive actions.
          </Text>
        </DialogItemContent>
      </DialogItem>
    </Dialog>
  )
});



Component.tooltip = (
  <Btn>
    <BtnItem
      classes={'raised'}
      label='Label Default'
      tooltipText='Tooltip Default'
      type='default'
      disabled={false}
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Primary'
      tooltipText='Tooltip Primary'
      type='primary'
      disabled={false}
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Succes'
      tooltipText='Tooltip Succes'
      type='succes'
      disabled={true}
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Info'
      tooltipText='Tooltip Info'
      type='info'
      disabled={false}
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Warning'
      tooltipText='Tooltip Warning'
      type='warning'
      disabled={false}
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Danger'
      tooltipText='Tooltip Danger'
      type='danger'
      disabled={false}
      rippleEffect={true}
    />
  </Btn>
);

Component.lists = [];

Component.lists.push({
  'single-line': (
  <List type={'single-line'}>
    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#attractions'>
          <Block type='div' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Attractions'
              classes={'e-list-avatar'}
            />
            <Text>Attractions</Text>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#attractions'>
          <Icon name='communication-contacts' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#fun'>
          <Block type='div' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Fun'
              classes={'e-list-avatar'}
            />
            <Text>Fun</Text>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#fun'>
          <Icon name='communication-vpn-key' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#food'>
          <Block type='div' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Food'
              classes={'e-list-avatar'}
            />
            <Text>Food</Text>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#food'>
          <Icon name='editor-insert-emoticon' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#kids'>
          <Block type='div' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Kids'
              classes={'e-list-avatar'}
            />
            <Text>Kids</Text>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#kids'>
          <Icon name='hardware-security' />
        </Text>
      </Block>
    </ListItem>
  </List>)
});

Component.lists.push({
  'two-line': (
  <List type='two-line'>
    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#attractions'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Attractions'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Attractions</Text>
              <br />
              <Text>Here are more information about Attractions</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#attractions'>
          <Icon name='communication-contacts' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#fun'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Fun'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Fun</Text>
              <br />
              <Text>Here are more information about Fun</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#fun'>
          <Icon name='communication-vpn-key' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#food'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Food'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Food</Text>
              <br />
              <Text>Here are more information about Food</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#food'>
          <Icon name='editor-insert-emoticon' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#kids'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Kids'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Kids</Text>
              <br />
              <Text>Here are more information about Kids</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#kids'>
          <Icon name='hardware-security' />
        </Text>
      </Block>
    </ListItem>
  </List>)
});

Component.lists.push({
  'multi-line': (
  <List type='multi-line'>
    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#attractions'>
          <Block type='div' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Attractions'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Attractions</Text>
              <br />
              <Text type='em'>Attractions subtitle</Text>
              <br />
              <Text>Here are more information about Attractions</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#attractions'>
          <Icon name='communication-contacts' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#fun'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Fun'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Fun</Text>
              <br />
              <Text type='em'>Fun subtitle</Text>
              <br />
              <Text>Here are more information about Fun</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#fun'>
          <Icon name='communication-vpn-key' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#food'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Food'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Food</Text>
              <br />
              <Text type='em'>Food subtitle</Text>
              <br />
              <Text>Here are more information about Food</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#food'>
          <Icon name='editor-insert-emoticon' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#kids'>
          <Block type='span' classes={'e-list-content'}>
            <Image
              src='assets/img/card-user-img.jpg'
              alt='Kids'
              classes={'e-list-avatar'}
            />
            <Block type='span'>
              <Text type='strong'>Kids</Text>
              <br />
              <Text type='em'>Kids subtitle</Text>
              <br />
              <Text>Here are more information about Kids</Text>
            </Block>
          </Block>
        </Text>
        <Text type='a' classes={'brick-1'} href='#kids'>
          <Icon name='hardware-security' />
        </Text>
      </Block>
    </ListItem>
  </List>)
});

Component.list_controls = [];

Component.list_controls.push({
  'checkbox': (
  <List type='checkbox'>
    <ListItem>
      <Block type='li'>
        <SwitchItem
          type='checkbox'
          text='First List Checkbox'
          name='checkbox1'
        />
        <Text type='a' classes={'brick-1'} href='#list'>
          <Icon name='action-view-list' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <SwitchItem
          type='checkbox'
          text='Second List Checkbox'
          name='checkbox2'
          checked={true}
        />
        <Text type='a' classes={'brick-1'} href='#week'>
          <Icon name='action-view-week' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <SwitchItem
          type='checkbox'
          text='Third List Checkbox'
          name='checkbox3'
        />
        <Text type='a' classes={'brick-1'} href='#unlock'>
          <Icon name='action-face-unlock' />
        </Text>
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <SwitchItem
          type='checkbox'
          text='Fourth List Checkbox'
          name='checkbox4'
        />
        <Text type='a' classes={'brick-1'} href='#settings'>
          <Icon name='action-settings-input-component' />
        </Text>
      </Block>
    </ListItem>
  </List>)
});

Component.list_controls.push({
  'checkbox-avatar': (
  <List type='checkbox' position='right'>
      <ListItem>
        <Block type='li'>
          <Text type='a' classes={'brick-11'} href='#attractions'>
            <Block classes={'e-list-content'}>
              <Image
                src='assets/img/card-user-img.jpg'
                alt='1st List checkbox'
                classes={'e-list-avatar'}
              />
              <Block type='span'>
                <Text type='strong'>1st List checkbox</Text>
              </Block>
            </Block>
          </Text>
          <SwitchItem
            type='checkbox'
            name='checkbox1'
          />
        </Block>
      </ListItem>

      <ListItem>
        <Block type='li'>
          <Text type='a' classes={'brick-11'} href='#attractions'>
            <Block classes={'e-list-content'}>
              <Image
                src='assets/img/card-user-img.jpg'
                alt='2nd List checkbox'
                classes={'e-list-avatar'}
              />
              <Block type='span'>
                <Text type='strong'>2nd List checkbox</Text>
              </Block>
            </Block>
          </Text>
          <SwitchItem
            type='checkbox'
            name='checkbox2'
          />
        </Block>
      </ListItem>

      <ListItem>
        <Block type='li'>
          <Text type='a' classes={'brick-11'} href='#attractions'>
            <Block classes={'e-list-content'}>
              <Image
                src='assets/img/card-user-img.jpg'
                alt='3rd List checkbox'
                classes={'e-list-avatar'}
              />
              <Block type='span'>
                <Text type='strong'>3rd List checkbox</Text>
              </Block>
            </Block>
          </Text>
          <SwitchItem
            type='checkbox'
            name='checkbox3'
          />
        </Block>
      </ListItem>

      <ListItem>
        <Block type='li'>
          <Text type='a' classes={'brick-11'} href='#attractions'>
            <Block classes={'e-list-content'}>
              <Image
                src='assets/img/card-user-img.jpg'
                alt='4th List checkbox'
                classes={'e-list-avatar'}
              />
              <Block type='span'>
                <Text type='strong'>4th List checkbox</Text>
              </Block>
            </Block>
          </Text>
          <SwitchItem
            type='checkbox'
            name='checkbox4'
          />
        </Block>
      </ListItem>
  </List>)
});

Component.list_controls.push({
  'switches': (
  <List type='switch'>
    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#wifi'>
          <Icon name='device-network-wifi' classes={'e-text-amber-900'} />
          <Text type='strong'>Wi-Fi Network</Text>
        </Text>
        <SwitchItem
          type='switches'
          name='input-network-wifi'
          checked={true}
        />
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#bluetooth'>
          <Icon name='action-settings-bluetooth' classes={'e-text-indigo-400'} />
          <Text type='strong'>Bluetooth settings</Text>
        </Text>
        <SwitchItem
          type='switches'
          name='input-settings-bluetooth'
        />
      </Block>
    </ListItem>

    <ListItem>
      <Block type='li'>
        <Text type='a' classes={'brick-11'} href='#data-usage'>
          <Icon name='device-data-usage' classes={'e-text-red-800'} />
          <Text type='strong'>Data usage</Text>
        </Text>
      </Block>
    </ListItem>
  </List>)
});

var menuAttractions =
      [{
        'link': '#',
        'text': 'Movie',
      },
      {
        'link': '#',
        'text': 'Park',
      },
      {
        'link': '#',
        'text': 'Playground'
      }]
    ,
    menuDining =
      [{
        'link': '#',
        'text': 'Breakfast & brunch',
      },
      {
        'link': '#',
        'text': 'New American',
      },
      {
        'link': '#',
        'text': 'Sushi bars'
      }]
    ,
    menuEducation =
      [{
        'link': '#Highschool',
        'text': 'Highschool',
      },
      {
        'link': '#College',
        'text': 'College',
      },
      {
        'link': '#Library',
        'text': 'Library'
      }]
    ,
    menuFamily =
      [{
        'link': '#Kids',
        'text': 'Kids',
      },
      {
        'link': '#Friends',
        'text': 'Friends',
      },
      {
        'link': '#Relatives',
        'text': 'Relatives'
      }]
    ;

Component.list_controls.push({
  'expand-offline': (
  <List
    type='expand'
    avatar={true}
    icon={true}
  >
    <ListItem
      inputName='input-1'
      icon='maps-local-attraction'
      contentLink='#'
      contentText='Attractions'
      more={true}
      avatarLink='#user-image'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='User avatar image'
      submenu={menuAttractions}
    />
    <ListItem
      inputName='input-2'
      icon='maps-local-restaurant'
      contentLink='#'
      contentText='Dining'
      more={true}
      avatarLink='#user-image'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='User avatar image'
      submenu={menuDining}
    />
    <ListItem
      inputName='input-3'
      icon='social-school'
      contentLink='#'
      contentText='Education'
      more={true}
      avatarLink='#user-image'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='User avatar image'
      submenu={menuEducation}
    />
    <ListItem
      inputName='input-3'
      icon='social-group'
      contentLink='#'
      contentText='Family'
      more={true}
      avatarLink='#user-image'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='User avatar image'
      submenu={menuFamily}
    />

  </List>)
});

Component.text_fields = [];

Component.text_fields.push({
  'reactjs': (
  <Input>
    <InputItem
      classes={'e-input-group has-success'}
      inputClasses=''
      type='text'
      name='label'
      placeholder='Did you know a bear has 42 teeth'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group has-success'}
      inputClasses=''
      type='text'
      name='label'
      placeholder='Did you know 8% of people have an extra rib'
      counter={50}
    >
    </InputItem>

    <InputItem
      classes={'e-input-group has-error'}
      inputClasses=''
      type='text'
      name='label'
      placeholder='Did you know 11% of people are left handed'
      counter={20}
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses=''
      type='text'
      name='label'
      placeholder='Did you know the Hawaiian alphabet has 12 letters'
      disabled={true}
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses=''
      type='text'
      name='label'
      label='Did you know birds need gravity to swallow'
    >
    </InputItem>
  </Input>)
});

Component.text_fields.push({
  'textarea': (
  <Input>
    <InputItem
      classes={'e-input-group'}
      inputClasses=''
      type='textarea'
      name='label'
      placeholder='Did you know Topolino is the name for Mickey Mouse Italy'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses=''
      type='textarea'
      name='label'
      label='Did you know there is no sound in space'
    >
    </InputItem>
  </Input>)
});

Component.text_fields.push({
  'validation': (
  <Input>
    <InputItem
      classes={'e-input-group'}
      inputClasses=''
      type='email'
      name='label'
      label='Did you know melophobia is the fear of music'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses=''
      type='number'
      name='label'
      placeholder='Did you know womens hearts beat faster than mens'
      hint='Did you know womens hearts beat faster than mens'
    >
    </InputItem>
  </Input>)
});

Component.text_fields.push({
  'hints': (
  <Input>
    <InputItem
      classes={'e-input-group has-error'}
      inputClasses=''
      type='text'
      name='label'
      label='Did you know each time you see a full moon you always see the same side'
      hint='Did you know each time you see a full moon you always see the same side'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group '}
      inputClasses=''
      type='email'
      name='label'
      label='Email is required'
      hint='A valid email should contain @'
      counter={40}
    >
    </InputItem>
  </Input>)
});

Component.text_fields.push({
  'styling': (
  <Input>
    <InputItem
      classes={'e-input-group has-warning'}
      inputClasses={'e-input-success'}
      type='text'
      name='label'
      placeholder='Did you know each time you see a full moon you always see the same side'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group has-info'}
      inputClasses={'e-input-success'}
      type='email'
      name='label'
      label='Floating label'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-search'}
      type='search'
      name='search'
      placeholder='Search...'
      required={true}
    >
    </InputItem>
  </Input>)
});

Component.switches = (
  <Switch>
    <SwitchItem
      type='radio'
      text='Radio Button 1'
      name='radioButton'
      defaultValue='value1'
      checked={true}
    >
    </SwitchItem>

    <SwitchItem
      type='radio'
      text='Radio Button 2'
      name='radioButton'
      defaultValue='value2'
    >
    </SwitchItem>

    <br />

    <SwitchItem
      type='checkbox'
      text='Switch Checkbox'
      name='checkbox1'
      checked={true}
    >
    </SwitchItem>

    <br />

    <SwitchItem
      type='switches'
      beforeText='Switches before'
      afterText='Switches after'
      checked={true}
      name='switches1'
    >
    </SwitchItem>
  </Switch>
);

Component.snackbars_toast = [];

Component.snackbars_toast.push({
  'list': (
  <Snackbar>
    <SnackbarItem
      id={'snackbar1'}
      classes={'e-text-yellow-400'}
    >
      Hello to you from Essence
    </SnackbarItem>
    <SnackbarItem
      id={'snackbar2'}
      classes={'snackbar-item'}
    >
      Hello to them from Essence
    </SnackbarItem>
    <SnackbarItem
      id={'snackbar3'}
      classes={'snackbar-item'}
    >
      Hello to all of you. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Donec eget augue viverra, eleifend elit in, sagittis tellus.
    </SnackbarItem>
  </Snackbar>)
});

Component.snackbars_toast.push({
  'buttons': (
  <Btn>
    <BtnItem
      classes={'raised'}
      label='Show me Snackbar 1'
      type='primary'
      disabled={false}
      rippleEffect={true}
      snackbar='snackbar1'
    >
    </BtnItem>
    <BtnItem
      classes={'raised'}
      label='Show me Snackbar 2'
      type='primary'
      disabled={false}
      rippleEffect={true}
      snackbar='snackbar2'
    />
    <BtnItem
      classes={'raised'}
      label='Show me Snackbar 3'
      type='primary'
      disabled={false}
      rippleEffect={true}
      snackbar='snackbar3'
    />
    <br />
    <BtnItem
      classes={'raised'}
      label='Toast 1 chicken'
      type='succes'
      disabled={false}
      rippleEffect={true}
      toast='toast1'
    >
    </BtnItem>
    <BtnItem
      classes={'raised'}
      label='Toast 2 chicken'
      type='succes'
      disabled={false}
      rippleEffect={true}
      toast='toast2'
    />
    <BtnItem
      classes={'raised'}
      label='Toast 3 chicken'
      type='succes'
      disabled={false}
      rippleEffect={true}
      toast='toast3'
    />
  </Btn>)
});

Component.snackbars_toast.push({
  'toasts': (
  <Toast>
    <ToastItem
      id={'toast1'}
      classes={'toasts'}
    >
      Hello to you
    </ToastItem>
    <ToastItem
      id={'toast2'}
      classes={'toasts'}
    >
      Hello to me
    </ToastItem>
    <ToastItem
      id={'toast3'}
      classes={'toasts'}
    >
      Hello to all of you. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Donec eget augue viverra, eleifend elit in, sagittis tellus.
    </ToastItem>
  </Toast>)
});

Component.progress = (
  <div>
    <Progress type='slider' />
    <br />
    <br />
    <Progress type='circle' />
    <br />
    <br />
    <Progress type='circle' small={true} />
    <br />
    <br />
    <Progress type='dots' />
    <br />
    <br />
    <Progress type='fix' />
    <br />
    <br />
    <Progress type='dynamic' />
  </div>
);

module.exports = function () {
  return Component;
};
