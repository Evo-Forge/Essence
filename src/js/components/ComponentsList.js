'use strict';

var React = require('react/addons'),
    AppBar =  require('./AppBar'),
    ToolBar =  require('./ToolBar'),
    Navigation = require('./Navigation'),
    Menu = require('./Menu'),
    Btn = require('./Btn'),
    BtnItem = require('./BtnItem'),
    List = require('./List'),
    ListItem = require('./ListItem'),
    Input = require('./Input'),
    InputItem = require('./InputItem'),
    Input = require('./Input'),
    InputItem = require('./InputItem'),
    Switch = require('./Switch'),
    SwitchItem = require('./SwitchItem'),
    Snackbar = require('./Snackbar'),
    SnackbarItem = require('./SnackbarItem'),
    Toast = require('./Toast'),
    ToastItem = require('./ToastItem'),
    TabMenu = require('./TabMenu'),
    TabItem = require('./TabItem'),
    Card = require('./Card'),
    CardItem = require('./CardItem'),
    Paper = require('./Paper'),
    PaperItem = require('./PaperItem'),
    Chip = require('./Chip'),
    ChipItem = require('./ChipItem'),
    Text = require('./Text'),
    Slider = require('./Slider'),
    SliderItem = require('./SliderItem'),
    Progress = require('./Progress');

var Component = {};

// Essence - Components
var Home =
    [
      {
        'id': 'components-home',
        'link': '#',
        'text': 'Home',
      },
      {
        'id': 'components-material-design',
        'link': '#',
        'text': 'About',
      },
      {
        'id': 'components-getting-started',
        'link': '#',
        'text': 'Getting Started',
      },
      {
        'id': 'components-contact',
        'link': '#',
        'text': 'Contact',
      }
    ],

    Styles =
    [
      {
        'id': 'components-colors',
        'link': '#',
        'text': 'Colors',
      },
      {
        'id': 'components-icons',
        'link': '#',
        'text': 'Icons',
      },
      {
        'id': 'components-typography',
        'link': '#',
        'text': 'Typography',
      },
      {
        'id': 'components-classes',
        'link': '#',
        'text': 'Useful classes',
      }
    ],

    Components =
    [
      {
        'id': 'components-appbar',
        'link': '#',
        'text': 'Appbar',
      },
      {
        'id': 'components-bottom-sheets',
        'link': '#',
        'text': 'Bottom Sheets',
      },
      {
        'id': 'components-buttons',
        'link': '#',
        'text': 'Buttons',
      },
      {
        'id': 'components-cards',
        'link': '#',
        'text': 'Cards',
      },
      {
        'id': 'components-chips',
        'link': '#',
        'text': 'Chips',
      },
      {
        'id': 'components-dialogs',
        'link': '#',
        'text': 'Dialogs',
      },
      {
        'id': 'components-dividers',
        'link': '#',
        'text': 'Dividers',
      },
      {
        'id': 'components-grids',
        'link': '#',
        'text': 'Grids',
      },
      {
        'id': 'components-lists',
        'link': '#',
        'text': 'Lists',
      },
      {
        'id': 'components-list-controls',
        'link': '#',
        'text': 'List Controls',
      },
      {
        'id': 'components-menus',
        'link': '#',
        'text': 'Menus',
      },
      {
        'id': 'components-navigation',
        'link': '#',
        'text': 'Navigation Drawer',
      },
      {
        'id': 'components-paper',
        'link': '#',
        'text': 'Paper',
      },
      {
        'id': 'components-progress',
        'link': '#',
        'text': 'Progress',
      },
      /*
      {
        'id': 'components-slider',
        'link': '#',
        'text': 'Slider',
      },
      */
      {
        'id': 'components-snackbars-toast',
        'link': '#',
        'text': 'Snackbars and Toast',
      },
      {
        'id': 'components-switches',
        'link': '#',
        'text': 'Switches',
      },
      {
        'id': 'components-tabs',
        'link': '#',
        'text': 'Tabs',
      },
      {
        'id': 'components-text-fields',
        'link': '#',
        'text': 'Text fields',
      },
      /*
      {
        'id': 'components-toolbar',
        'link': '#',
        'text': 'Toolbar',
      },
      */
      {
        'id': 'components-tooltips',
        'link': '#',
        'text': 'Tooltips',
      }
    ];

Component.navigation_menu = (
  <Navigation
    live={true}
    header='Essence'
    logo='assets/img/essence_icon.png'
    footer='Essence &copy; Privacy &amp; Terms'
  >
    <List
      type='navigation'
      avatar={false}
      icon={false}
    >
      <ListItem
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        contentText='Material Design'
        contentLink='#'
        more={true}
        submenu={Home}
      />
      <ListItem
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        contentText='Styles'
        contentLink='#styles'
        more={true}
        submenu={Styles}
      />
      <ListItem
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        contentText='Components'
        contentLink='#components'
        more={true}
        submenu={Components}
      />
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
  <Text text='Essence' id='navigationTitle' />
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
    footer='Copyright text'
  >
    <List
      type='navigation'
      avatar={false}
      icon={false}
    >
      <ListItem
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        contentText='Material Design'
        contentLink='#'
        more={true}
        submenu={NavigationHome}
      />
      <ListItem
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        contentText='Styles'
        contentLink='#styles'
        more={true}
        submenu={NavigationStyles}
      />
      <ListItem
        eventAction={'changeText'}
        changeTextId='navigationTitle'
        contentText='Components'
        contentLink='#components'
        more={true}
        submenu={NavigationComponents}
      />
    </List>
  </Navigation>
);

Component.contact = (
  <Input>
    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-input empty'}
      type='email'
      name='email'
      label='Email address'
    >
    </InputItem>
    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-input empty'}
      type='textarea'
      name='message'
      label='Type your message'
    >
    </InputItem>

    <Btn>
      <BtnItem
        classes={'raised'}
        label='Send Message'
        type='primary'
        rippleEffect={true}
      >
      </BtnItem>
    </Btn>

  </Input>
);

var appbar_menu_left = [
  {
    id: 'menu-appbar-left',
    type: 'menu',
    text: 'Options',
    link: '#',
    hide: true,
    classes: 'e-text-color-blue-500 cover e-left',
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

Component.appbar = (
  <AppBar>
    <Btn>
      <BtnItem
        icon='navigation-menu'
        classes={'simple-button e-left'}
      />
    </Btn>

    <Menu items={appbar_menu_left} />
    <Menu items={appbar_menu_right} />

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
      classes={'e-shadow-1'}
    >
      PaperItem: simple <strong>shadow-1</strong>
    </PaperItem>

    <br />
    <br />

    <PaperItem
      type={'sharp'}
      classes={'e-shadow-2'}
    >
      PaperItem: sharp <strong>shadow-2</strong>
    </PaperItem>

    <br />
    <br />

    <PaperItem
      type={'circle'}
      classes={'e-shadow-3'}
    >
      PaperItem: circle <strong>shadow-3</strong>
    </PaperItem>
  </Paper>
);

Component.tabs = (
  <TabMenu type='simple' id={'tab_menu_simple'}>
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

      <p>
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
      <p>
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
      <p>
Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.
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
    <Menu items={menus_simple} />
  )
});

Component.menus.push({
  'cover': (
    <Menu items={menus_cover} />
  )
});

Component.menus.push({
  'cascade': (
    <Menu items={menus_cascade} />
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
  'raised': (
  <Btn>
    <BtnItem
      classes={'raised'}
      label='Label Default'
      tooltip='Tooltip Default'
      type='default'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Primary'
      tooltip='Tooltip Primary'
      type='primary'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Succes'
      tooltip='Tooltip Succes'
      type='succes'
      rippleEffect={true}
      disabled={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Info'
      tooltip='Tooltip Info'
      type='info'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Warning'
      tooltip='Tooltip Warning'
      type='warning'
      rippleEffect={true}
    />
    <BtnItem
      classes={'raised'}
      label='Label Danger'
      tooltip='Tooltip Danger'
      type='danger'
      rippleEffect={true}
    />
  </Btn>)
});

Component.buttons.push({
  'flat': (
  <Btn>
    <BtnItem
      classes={'flat'}
      label='Label Default'
      type='default'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Label Primary'
      type='primary'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Label Succes'
      type='succes'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Label Info'
      type='info'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Label Warning'
      type='warning'
      rippleEffect={true}
    />
    <BtnItem
      classes={'flat'}
      label='Label Danger'
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
    <CardItem
      image='assets/img/card-img.jpg'
      imageAlt='Card Image'
      headline='Going to Ibiza'
      text='Limit supplemental actions to two actions, in addition to an overflow menu.'
      action={true}
    >
      <BtnItem
        classes={'flat e-right'}
        label='Yes'
        type='danger'
        rippleEffect={true}
      />
      <BtnItem
        classes={'flat e-right'}
        label='No'
        type='default'
        rippleEffect={true}
      />


    </CardItem>
  </Card>)
});

Component.cards.push({
  'header': (
  <Card>
    <CardItem
      image='assets/img/card-img.jpg'
      imageAlt='Card Image'
      headline='Going to Ibiza'
      text='Limit supplemental actions to two actions, in addition to an overflow menu.'
      header={true}
      headerImage='assets/img/card-user-img.jpg'
      headerImageAlt='Card Image'
      headerTitle='Title'
      headerSubhead='Subhead'
    >
    </CardItem>
  </Card>)
});

Component.cards.push({
  'gallery': (
  <Card>
    <CardItem
      imageGallery={imageGallery}
      headline='Going to Ibiza'
      text='Limit supplemental actions to two actions, in addition to an overflow menu.'
      header={true}
      headerImage='assets/img/card-user-img.jpg'
      headerImageAlt='Card Image'
      headerTitle='Title 1'
      headerSubhead='Subhead 1'
    >
      <BtnItem
        classes={'flat'}
        label='No'
        type='default'
        rippleEffect={true}
      />
      <BtnItem
        classes={'flat'}
        label='Yes'
        type='danger'
        rippleEffect={true}
      />
    </CardItem>
  </Card>)
});

Component.cards.push({
  'divider': (
  <Card>
    <CardItem
      image='assets/img/card-img.jpg'
      text='Limit supplemental actions to two actions, in addition to an overflow menu.'
    >
      <BtnItem
        classes={'flat'}
        label='A'
        type='succes'
        rippleEffect={true}
      />
      <BtnItem
        classes={'flat'}
        label='B'
        type='warning'
        rippleEffect={true}
      />
    </CardItem>
  </Card>)
});

Component.cards.push({
  'simple': (
  <Card>
    <CardItem
      header={true}
      headerTitle='Car photography'
      headerSubhead='By John Doe'
      leftImage='assets/img/car.jpg'
    >
      <BtnItem
        classes={'flat'}
        label='A'
        type='succes'
        rippleEffect={true}
      />
      <BtnItem
        classes={'flat'}
        label='B'
        type='warning'
        rippleEffect={true}
      />
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
  <List
    type='single-line'
    avatar={true}
    icon={true}
  >
    <ListItem
      contentLink='#'
      contentText='Attractions'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='communication-contacts'
    />
    <ListItem
      contentLink='#'
      contentText='Fun'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='communication-vpn-key'
    />
    <ListItem
      contentLink='#'
      contentText='Food'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='editor-insert-emoticon'
    />
    <ListItem
      contentLink='#'
      contentText='Kids'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='hardware-security'
    />

  </List>)
});

Component.lists.push({
  'two-line': (
  <List
    type='two-line'
    avatar={true}
    icon={true}
  >
    <ListItem
      contentLink='#'
      contentTitle='Attractions'
      contentText='Here are more information about Attractions'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='communication-contacts'
    />
    <ListItem
      contentLink='#'
      contentTitle='Fun'
      contentText='Here are more information about Fun'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='communication-vpn-key'
    />
    <ListItem
      contentLink='#'
      contentTitle='Food'
      contentText='Here are more information about Food'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='editor-insert-emoticon'
    />
    <ListItem
      contentLink='#'
      contentTitle='Kids'
      contentText='Here are more information about Kids'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='hardware-security'
    />

  </List>)
});

Component.lists.push({
  'multi-line': (
  <List
    type='multi-line'
    avatar={true}
    icon={true}
  >
    <ListItem
      contentLink='#'
      contentTitle='Attractions'
      contentSubTitle='Info about Attractions'
      contentText='Here are more information about Attractions'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='communication-contacts'
    />
    <ListItem
      contentLink='#'
      contentTitle='Fun'
      contentSubTitle='Info about Fun'
      contentText='Here are more information about Fun'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='communication-vpn-key'
    />
    <ListItem
      contentLink='#'
      contentTitle='Food'
      contentSubTitle='Info about Food'
      contentText='Here are more information about Food'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='editor-insert-emoticon'
    />
    <ListItem
      contentLink='#'
      contentTitle='Kids'
      contentSubTitle='Info about Kids'
      contentText='Here are more information about Kids'
      avatarImg='assets/img/card-user-img.jpg'
      avatarAlt='I am your Avatar'
      avatarLink='#user'
      icon='hardware-security'
    />
  </List>)
});

Component.list_controls = [];

Component.list_controls.push({
  'checkbox': (
  <List
    type='checkbox'
    avatar={true}
    icon={true}
  >
    <ListItem
      inputName='input-checkbox'
      contentLink='#'
      contentText='First List Checkbox'
      avatarLink='#'
      icon='action-view-list'
      isChecked={true}
    />
    <ListItem
      inputName='input-checkbox'
      contentLink='#'
      contentText='Second List Checkbox'
      avatarLink='#'
      icon='action-view-week'
    />
    <ListItem
      inputName='input-checkbox'
      contentLink='#'
      contentText='Third List Checkbox'
      avatarLink='#'
      icon='action-face-unlock'
      isChecked={true}
    />
    <ListItem
      inputName='input-checkbox'
      contentLink='#'
      contentText='Fourth List Checkbox'
      avatarLink='#'
      icon='action-settings-input-component'
    />

  </List>)
});

Component.list_controls.push({
  'checkbox-avatar': (
  <List
      type='checkbox'
      avatar={true}
      icon={true}
      position='right'
    >
      <ListItem
        inputName='input-checkbox-1'
        contentLink='#'
        contentText='First List Checkbox'
        avatarLink='#user-image'
        avatarImg='assets/img/card-user-img.jpg'
        avatarAlt='User avatar image'
      />
      <ListItem
        inputName='input-checkbox-2'
        contentLink='#'
        contentText='Second List Checkbox'
        avatarLink='#user-image'
        avatarImg='assets/img/card-user-img.jpg'
        avatarAlt='User avatar image'
        isChecked={true}
      />
      <ListItem
        inputName='input-checkbox-3'
        contentLink='#'
        contentText='Third List Checkbox'
        avatarLink='#user-image'
        avatarImg='assets/img/card-user-img.jpg'
        avatarAlt='User avatar image'
      />
      <ListItem
        inputName='input-checkbox-4'
        contentLink='#'
        contentText='Fourth List Checkbox'
        avatarLink='#user-image'
        avatarImg='assets/img/card-user-img.jpg'
        avatarAlt='User avatar image'
        isChecked={true}
      />
  </List>)
});

Component.list_controls.push({
  'switches': (
  <List
    type='switch'
    avatar={true}
    icon={true}
  >
    <ListItem
      inputName='input-network-wifi'
      contentLink='#network-wifi'
      icon='device-network-wifi'
      contentText='Wi-Fi Network'
      avatarLink='#'
      isChecked={true}
    />
    <ListItem
      inputName='input-settings-bluetooth'
      contentLink='#settings-bluetooth'
      icon='action-settings-bluetooth'
      contentText='Bluetooth settings'
      avatarLink='#'
    />
    <ListItem
      inputName='input-data-usage'
      contentLink='#data-usage'
      icon='device-data-usage'
      contentText='Data usage'
      avatarLink='#'
      isHidden={true}
    />
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
  'expand': (
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
      inputClasses={'e-input empty'}
      type='text'
      name='label'
      placeholder='Did you know a bear has 42 teeth'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group has-success'}
      inputClasses={'e-input empty'}
      type='text'
      name='label'
      placeholder='Did you know 8% of people have an extra rib'
      counter={50}
    >
    </InputItem>

    <InputItem
      classes={'e-input-group has-error'}
      inputClasses={'e-input empty'}
      type='text'
      name='label'
      placeholder='Did you know 11% of people are left handed'
      counter={20}
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-input empty'}
      type='text'
      name='label'
      placeholder='Did you know the Hawaiian alphabet has 12 letters'
      disabled={true}
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-input empty'}
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
      inputClasses={'e-input empty'}
      type='textarea'
      name='label'
      placeholder='Did you know Topolino is the name for Mickey Mouse Italy'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-input empty'}
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
      inputClasses={'e-input empty'}
      type='email'
      name='label'
      label='Did you know melophobia is the fear of music'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group'}
      inputClasses={'e-input empty'}
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
      inputClasses={'e-input empty'}
      type='text'
      name='label'
      label='Did you know each time you see a full moon you always see the same side'
      hint='Did you know each time you see a full moon you always see the same side'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group '}
      inputClasses={'e-input empty'}
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
      inputClasses={'e-input e-input-success empty'}
      type='text'
      name='label'
      placeholder='Did you know each time you see a full moon you always see the same side'
    >
    </InputItem>

    <InputItem
      classes={'e-input-group has-info'}
      inputClasses={'e-input e-input-success empty'}
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
    >
    </SwitchItem>

    <SwitchItem
      type='radio'
      text='Radio Button 2'
      name='radioButton'
      defaultValue='value2'
    >
    </SwitchItem>

    <SwitchItem
      type='checkbox'
      text='Switch Checkbox'
      name='checkbox1'
    >
    </SwitchItem>

    <SwitchItem
      type='switches'
      beforeText='Switches before'
      afterText='Switches after'
      checked={false}
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
      classes={'snackbar-item'}
    >
      Hello to you
    </SnackbarItem>
    <SnackbarItem
      id={'snackbar2'}
      classes={'snackbar-item'}
    >
      Hello to me
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
