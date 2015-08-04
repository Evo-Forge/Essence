'use strict';

var React = require('react/addons'),
    Btn =  require('./components/Btn'),
    BtnItem =  require('./components/BtnItem'),
    Snackbar =  require('./components/Snackbar'),
    SnackbarItem =  require('./components/SnackbarItem'),
    Toast =  require('./components/Toast'),
    ToastItem =  require('./components/ToastItem'),
    Input =  require('./components/Input'),
    InputItem =  require('./components/InputItem'),
    Switch =  require('./components/Switch'),
    SwitchItem =  require('./components/SwitchItem'),
    Card =  require('./components/Card'),
    CardItem =  require('./components/CardItem'),
    Chip =  require('./components/Chip'),
    ChipItem =  require('./components/ChipItem'),
    Icon =  require('./components/Icon'),
    Slider =  require('./components/Slider'),
    SliderItem =  require('./components/SliderItem'),
    Dialog =  require('./components/Dialog'),
    DialogItem =  require('./components/DialogItem'),
    Menu =  require('./components/Menu'),
    AppBar =  require('./components/AppBar'),
    ToolBar =  require('./components/ToolBar'),
    Navigation =  require('./components/Navigation'),
    Progress =  require('./components/Progress'),
    List =  require('./components/List'),
    ListItem =  require('./components/ListItem'),
    Paper =  require('./components/Paper'),
    PaperItem =  require('./components/PaperItem'),
    TabMenu =  require('./components/TabMenu'),
    TabItem =  require('./components/TabItem');

var fab = document.getElementById('btn-fab'),
    flat = document.getElementById('btn-flat'),
    raised = document.getElementById('btn-raised'),
    snackbarBtn = document.getElementById('snackbar-btn'),
    snackbars = document.getElementById('snackbars'),
    toasts = document.getElementById('toasts'),
    inputs = document.getElementById('inputs'),
    input_textarea = document.getElementById('input-textarea'),
    input_validation = document.getElementById('input-validation'),
    input_hints = document.getElementById('input-hints'),
    input_styling = document.getElementById('input-styling'),
    switches = document.getElementById('switches'),
    cards = document.getElementById('cards'),
    chips = document.getElementById('chips'),
    appbar = document.getElementById('appbar'),
    toolbar = document.getElementById('toolbar'),
    sliders = document.getElementById('sliders'),
    dialogs = document.getElementById('dialogs'),
    papers = document.getElementById('papers'),
    navigationDesktop = document.getElementById('navigation-desktop'),
    navigationMobile = document.getElementById('navigation-mobile'),
    progress = document.getElementById('progress'),
    listCheckbox = document.getElementById('list-checkbox'),
    listCheckboxRight = document.getElementById('list-checkbox-right'),
    listSwitch = document.getElementById('list-switch'),
    listReorder = document.getElementById('list-reorder'),
    listExpand = document.getElementById('list-expand'),
    listLines = document.getElementById('list-lines'),
    listSingleLine = document.getElementById('list-single-line'),
    listSingleLineIcon = document.getElementById('list-single-line-icon'),
    listSingleLineAvatar = document.getElementById('list-single-line-avatar'),
    listSingleLineAvatarIcon = document.getElementById('list-single-line-avatar-icon'),
    listTwoLine = document.getElementById('list-two-line'),
    listTwoLineIcon = document.getElementById('list-two-line-icon'),
    listTwoLineAvatar = document.getElementById('list-two-line-avatar'),
    listTwoLineAvatarIcon = document.getElementById('list-two-line-avatar-icon'),
    listMultiLine = document.getElementById('list-multi-line'),
    listMultiLineIcon = document.getElementById('list-multi-line-icon'),
    listMultiLineAvatar = document.getElementById('list-multi-line-avatar'),
    listMultiLineAvatarIcon = document.getElementById('list-multi-line-avatar-icon'),
    icons = document.getElementById('icons'),
    tooltips = document.getElementById('tooltips'),
    tabs_fixed = document.getElementById('tabs_fixed'),
    tabs_scrollable = document.getElementById('tabs_scrollable'),
    tabs_desktop = document.getElementById('tabs_desktop'),
    menu_simple = document.getElementById('menu_simple'),
    menu_cover = document.getElementById('menu_cover'),
    menu_multiple_simple = document.getElementById('menu_multiple_simple'),
    menu_multiple_cover = document.getElementById('menu_multiple_cover'),
    demoHeader = document.getElementById('demoHeader');

if (demoHeader) {
  React.render(
    <div>

      <div>
        <div>
          Please fill the form bellow:
        </div>
        <br />
        <Input>
          <InputItem
            classes={'e-input-group has-success'}
            inputClasses={'e-input empty'}
            type='text'
            name='name'
            required={true}
            label='Name'
          >
          </InputItem>

          <br />

          <InputItem
            classes={'e-input-group has-success'}
            inputClasses={'e-input empty'}
            type='email'
            required={true}
            name='email'
            label='Email Address'
            hint='Your email must contain @'
          >
          </InputItem>

          <br />

          <InputItem
            classes={'e-input-group has-success'}
            inputClasses={'e-input empty'}
            type='textarea'
            required={true}
            name='message'
            label='Message'
          >
          </InputItem>

        </Input>

        <br />

        <SwitchItem
          type='switches'
          beforeText='I am a person'
          afterText='or I am a company'
          checked={false}
          name='type'
        />

        <br />

        Overall, how much % are you satisfied on this project?
        <br />

        <SliderItem
          start={40}
          fill={true}
          discrete={true}
        >
        </SliderItem>

        <br />

        <SwitchItem
          type='checkbox'
          text='I accept all Terms and Conditions'
          name='accept'
        />

        <br />

        <BtnItem
          classes={'raised'}
          label='Send response'
          type='succes'
          disabled={false}
          rippleEffect={true}
        />

        <BtnItem
          label='?'
          type={'fab'}
          icon={false}
          mini={true}
          rippleEffect={true}
          actionClick='dialog'
        >
          <DialogItem
            title="Use Google's location service?"
            content='Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.'
          >
            <BtnItem
              classes={'flat'}
              label='Disagree'
              type='primary'
            />
            <BtnItem
              classes={'flat'}
              label='Agree'
              type='primary'
            />
          </DialogItem>
        </BtnItem>

      </div>
    </div>,
    demoHeader
  );
}

if (listCheckbox) {
  React.render(
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
          icon='communication-chat'
          isChecked={true}
        />
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='Second List Checkbox'
          avatarLink='#'
          icon='communication-chat'
        />
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='Third List Checkbox'
          avatarLink='#'
          icon='communication-chat'
          isChecked={true}
        />
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='Fourth List Checkbox'
          avatarLink='#'
          icon='communication-chat'
        />

      </List>,
    listCheckbox
  );

  React.render(
      <List
        type='checkbox'
        avatar={true}
        icon={true}
        position='right'
      >
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='First List Checkbox'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
        />
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='Second List Checkbox'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
          isChecked={true}
        />
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='Third List Checkbox'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
        />
        <ListItem
          inputName='input-checkbox'
          contentLink='#'
          contentText='Fourth List Checkbox'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
          isChecked={true}
        />

      </List>,
    listCheckboxRight
  );

  React.render(
      <List
        type='switch'
        avatar={true}
        icon={true}
      >
        <ListItem
          inputName='input-switch'
          contentLink='#'
          icon='device-network-wifi'
          contentText='WI-FI'
          avatarLink='#'
          isChecked={true}
        />
        <ListItem
          inputName='input-switch'
          contentLink='#'
          icon='action-settings-bluetooth'
          contentText='Bluetooth'
          avatarLink='#'
        />
        <ListItem
          inputName='input-switch'
          contentLink='#'
          icon='device-data-usage'
          contentText='Data usage'
          avatarLink='#'
          isHidden={true}
        />
      </List>,
    listSwitch
  );

  React.render(
      <List
        type='reorder'
        avatar={true}
        icon={true}
      >
        <ListItem
          inputName='input-1'
          contentLink='#'
          icon='action-view-headline'
          contentText='Janet Perkins'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
        />
        <ListItem
          inputName='input-2'
          contentLink='#'
          icon='action-view-headline'
          contentText='Mary Johnson'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
        />
        <ListItem
          inputName='input-3'
          contentLink='#'
          icon='action-view-headline'
          contentText='Peter Carlsson'
          avatarLink='#'
          avatarImg='http://www.wakullasworkingwaterfronts.com/wp-content/uploads/2014/01/avatar_blank_female_150.png'
          avatarAlt='Avatar Image'
        />
      </List>
    ,
    listReorder
  );

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

  React.render(
    <List
      type='expand'
      avatar={true}
      icon={true}
    >
      <ListItem
        inputName='input-1'
        contentLink='#'
        more={true}
        icon='maps-local-attraction'
        contentText='Attractions'
        avatarLink='#'
        submenu={menuAttractions}
      />
      <ListItem
        inputName='input-2'
        contentLink='#'
        more={true}
        icon='maps-local-restaurant'
        contentText='Dining'
        avatarLink='#'
        submenu={menuDining}
      />
      <ListItem
        inputName='input-3'
        contentLink='#'
        more={true}
        icon='social-school'
        contentText='Education'
        avatarLink='#'
        submenu={menuEducation}
      />
      <ListItem
        inputName='input-3'
        contentLink='#'
        more={true}
        icon='social-group'
        contentText='Family'
        avatarLink='#'
        submenu={menuFamily}
      />

    </List>,
    listExpand
  );
}

if (listSingleLine) {
  React.render(
    <List
      type='single-line'
    >
      <ListItem
        contentLink='#'
        contentText='Attractions'
      />
      <ListItem
        contentLink='#'
        contentText='Fun'
      />
      <ListItem
        contentLink='#'
        contentText='Food'
      />
      <ListItem
        contentLink='#'
        contentText='Kids'
      />

    </List>,
    listSingleLine
  );

  React.render(
    <List
      type='single-line'
      icon={true}
    >
      <ListItem
        contentLink='#'
        contentText='Attractions'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentText='Fun'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentText='Food'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentText='Kids'
        icon='communication-chat'
      />

    </List>,
    listSingleLineIcon
  );

  React.render(
    <List
      type='single-line'
      avatar={true}
    >
      <ListItem
        contentLink='#'
        contentText='Attractions'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentText='Fun'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentText='Food'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentText='Kids'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />

    </List>,
    listSingleLineAvatar
  );

  React.render(
    <List
      type='single-line'
      avatar={true}
      icon={true}
    >
      <ListItem
        contentLink='#'
        contentText='Attractions'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='communication-contacts'
      />
      <ListItem
        contentLink='#'
        contentText='Fun'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='communication-vpn-key'
      />
      <ListItem
        contentLink='#'
        contentText='Food'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='editor-insert-emoticon'
      />
      <ListItem
        contentLink='#'
        contentText='Kids'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='hardware-security'
      />

    </List>,
    listSingleLineAvatarIcon
  );
}

if (listTwoLine) {
  React.render(
    <List
      type='two-line'
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentText='Here are more information about Attractions'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentText='Here are more information about Fun'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentText='Here are more information about Food'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentText='Here are more information about Kids'
      />

    </List>,
    listTwoLine
  );

  React.render(
    <List
      type='two-line'
      icon={true}
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentText='Here are more information about Attractions'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentText='Here are more information about Fun'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentText='Here are more information about Food'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentText='Here are more information about Kids'
        icon='communication-chat'
      />

    </List>,
    listTwoLineIcon
  );

  React.render(
    <List
      type='two-line'
      avatar={true}
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentText='Here are more information about Attractions'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentText='Here are more information about Fun'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentText='Here are more information about Food'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentText='Here are more information about Kids'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />

    </List>,
    listTwoLineAvatar
  );

  React.render(
    <List
      type='two-line'
      avatar={true}
      icon={true}
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentText='Here are more information about Attractions'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='communication-contacts'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentText='Here are more information about Fun'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='communication-vpn-key'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentText='Here are more information about Food'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='editor-insert-emoticon'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentText='Here are more information about Kids'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='hardware-security'
      />

    </List>,
    listTwoLineAvatarIcon
  );
}

if (listMultiLine) {
  React.render(
    <List
      type='multi-line'
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentSubTitle='Info about Attractions'
        contentText='Here are more information about Attractions'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentSubTitle='Info about Fun'
        contentText='Here are more information about Fun'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentSubTitle='Info about Food'
        contentText='Here are more information about Food'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentSubTitle='Info about Kids'
        contentText='Here are more information about Kids'
      />

    </List>,
    listMultiLine
  );

  React.render(
    <List
      type='multi-line'
      icon={true}
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentSubTitle='Info about Attractions'
        contentText='Here are more information about Attractions'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentSubTitle='Info about Fun'
        contentText='Here are more information about Fun'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentSubTitle='Info about Food'
        contentText='Here are more information about Food'
        icon='communication-chat'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentSubTitle='Info about Kids'
        contentText='Here are more information about Kids'
        icon='communication-chat'
      />

    </List>,
    listMultiLineIcon
  );

  React.render(
    <List
      type='multi-line'
      avatar={true}
    >
      <ListItem
        contentLink='#'
        contentTitle='Attractions'
        contentSubTitle='Info about Attractions'
        contentText='Here are more information about Attractions'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentSubTitle='Info about Fun'
        contentText='Here are more information about Fun'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentSubTitle='Info about Food'
        contentText='Here are more information about Food'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentSubTitle='Info about Kids'
        contentText='Here are more information about Kids'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
      />

    </List>,
    listMultiLineAvatar
  );

  React.render(
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
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='communication-contacts'
      />
      <ListItem
        contentLink='#'
        contentTitle='Fun'
        contentSubTitle='Info about Fun'
        contentText='Here are more information about Fun'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='communication-vpn-key'
      />
      <ListItem
        contentLink='#'
        contentTitle='Food'
        contentSubTitle='Info about Food'
        contentText='Here are more information about Food'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='editor-insert-emoticon'
      />
      <ListItem
        contentLink='#'
        contentTitle='Kids'
        contentSubTitle='Info about Kids'
        contentText='Here are more information about Kids'
        avatarImg='../assets/img/card-user-img.jpg'
        avatarAlt='I am your Avatar'
        avatarLink='#user'
        icon='hardware-security'
      />

    </List>,
    listMultiLineAvatarIcon
  );

  // listMultiLineIcon
  // listMultiLineAvatar
  // listMultiLineAvatarIcon
}



/*

      <List
        type='checkbox'
        avatar={true}
        icon={true}
        position='right'
      >
        <ListItem />
      </List>

      <List
        type='switch'
        avatar={true}
        icon={true}
      >
        <ListItem />
      </List>

      <List
        type='reorder'
        avatar={true}
        icon={true}
      >
        <ListItem />
      </List>

      <List
        type='expand'
        avatar={true}
        icon={true}
      >
        <ListItem />
      </List>

      <List
        type='lines'
        avatar={true}
        icon={true}
      >
        <ListItem />
      </List>
*/

if (progress) {
  React.render(
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
    ,
    progress
  );
}

if (navigationDesktop) {

  var menu = [
    {
      type: 'menu',
      text: '...',
      link: '#',
      background: true,
      icon: false,
      classes: 'e-background-white',
      submenu: [
        {
          type: 'menu',
          text: 'Novatec',
          shortcut: 'Tab',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Shimano and company',
          shortcut: 'Tab',
          link: '#'
        },
        {
          type: 'divider'
        },
        {
          type: 'menu',
          text: 'Rhet',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Link',
          link: '#'
        },

      ]
    }
  ];

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

  React.render(
    <Navigation
      header='Essence'
      footer='Evozon'
    >
      <List
        type='navigation'
        avatar={false}
        icon={false}
      >
        <ListItem
          inputName='input-1'
          contentLink='#'
          more={true}
          icon='maps-local-attraction'
          contentText='Attractions'
          avatarLink='#'
          submenu={menuAttractions}
        />
        <ListItem
          inputName='input-2'
          contentLink='#'
          more={true}
          icon='maps-local-restaurant'
          contentText='Dining'
          avatarLink='#'
          submenu={menuDining}
        />
        <ListItem
          inputName='input-3'
          contentLink='#'
          more={true}
          icon='social-school'
          contentText='Education'
          avatarLink='#'
          submenu={menuEducation}
        />
        <ListItem
          inputName='input-3'
          contentLink='#'
          more={true}
          icon='social-group'
          contentText='Family'
          avatarLink='#'
          submenu={menuFamily}
        />
      </List>
    </Navigation>
    ,
    navigationDesktop
  );
  // show Button
  React.render(
    <Btn>
      <BtnItem
        type={'flat'}
        classes={'simple-button e-nav-toggle'}
        icon='navigation-menu'
        rippleEffect={false}
        actionClick='navigation'
      />
    </Btn>
    ,
    document.getElementById("navigation-btn")
  );
}

if (appbar) {
  var menu_left = [
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

  var menu_right = [
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

  React.render(
    <AppBar
    >
      <Btn>
        <BtnItem
          icon='navigation-menu'
          classes={'simple-button e-left'}
        />
      </Btn>

      <Menu items={menu_left} />

      <Menu items={menu_right} />

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

    </AppBar>,
    appbar
  );
}

if (toolbar) {
  var menu_left = [
    {
      id: 'menu-toolbar-left',
      type: 'menu',
      text: 'All',
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

  var menu_right = [
    {
      id: 'menu-toolbar-right',
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

  React.render(
    <ToolBar
      title='Toolbar'
    >
      <Menu items={menu_right} />
      <Btn>
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
        />
      </Btn>
    </ToolBar>,
    toolbar
  );
}

if (icons) {
  React.render(
    <div>
      <Icon name='action-3d-rotation' />
      <Icon name='action-account-box' />
      <Icon name='action-alarm' />
      <Icon name='action-explore' />
      <Icon name='action-list' />
      <Icon name='action-lock' />
      <Icon name='action-pageview' />
      <Icon name='action-payment' />
      <Icon name='action-settings' />
      <Icon name='action-today' />
    </div>
    ,
    icons
  );
}

if (fab) {
  React.render(
    <Btn>
      <BtnItem
        label='&clubs;'
        type={'fab'}
        icon={true}
        mini={false}
        rippleEffect={true}
      />
      <BtnItem
        label='&spades;'
        type={'fab'}
        icon={true}
        mini={true}
        rippleEffect={true}
      />
    </Btn>,
    document.getElementById('btn-fab')
  );
}

if (flat) {
  React.render(
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
    </Btn>,
    document.getElementById('btn-flat')
  );
}

if (raised) {
  React.render(
    <Btn>
      <BtnItem
        classes={'raised'}
        label='Label Default'
        tooltip='Tooltip Default'
        type='default'
        disabled={false}
        rippleEffect={true}
      />
      <BtnItem
        classes={'raised'}
        label='Label Primary'
        tooltip='Tooltip Primary'
        type='primary'
        disabled={false}
        rippleEffect={true}
      />
      <BtnItem
        classes={'raised'}
        label='Label Succes'
        tooltip='Tooltip Succes'
        type='succes'
        disabled={true}
        rippleEffect={true}
      />
      <BtnItem
        classes={'raised'}
        label='Label Info'
        tooltip='Tooltip Info'
        type='info'
        disabled={false}
        rippleEffect={true}
      />
      <BtnItem
        classes={'raised'}
        label='Label Warning'
        tooltip='Tooltip Warning'
        type='warning'
        disabled={false}
        rippleEffect={true}
      />
      <BtnItem
        classes={'raised'}
        label='Label Danger'
        tooltip='Tooltip Danger'
        type='danger'
        disabled={false}
        rippleEffect={true}
      />
    </Btn>,
    document.getElementById('btn-raised')
  );
}

if (snackbarBtn) {
  React.render(
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
        toast='toast3'
      />
    </Btn>,
    document.getElementById('snackbar-btn')
  );
}

if (snackbars) {
  React.render(
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
    </Snackbar>,
    document.getElementById('snackbars')
  );
}

if (toasts) {
  React.render(
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
    </Toast>,
    document.getElementById('toasts')
  );
}

if (inputs) {
  React.render(
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

    </Input>,
    inputs
  );
}

if (input_textarea) {
  React.render(
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

    </Input>,
    input_textarea
  );
}

if (input_validation) {
  React.render(
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

    </Input>,
    input_validation
  );
}

if (input_hints) {
  React.render(
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
        hint='A valid email should contains @'
        counter={40}
      >
      </InputItem>

    </Input>,
    input_hints
  );
}

if (input_styling) {
  React.render(
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

    </Input>,
    input_styling
  );
}

if (switches) {
  React.render(
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

    </Switch>,
    switches
  );
}

if (cards) {
  var imageGallery = [
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    },
    {
      src: '../assets/img/card-img.jpg',
      alt: 'Car image'
    }
  ];

  React.render(
    <Card>
      <CardItem
        image='../assets/img/card-img.jpg'
        imageAlt='Card Image'
        headline='Going to Ibiza'
        text='Limit supplemental actions to two actions, in addition to an overflow menu.'
        action={true}
      >
        <BtnItem
          classes={'flat'}
          label='No'
          type='default'
        />
        <BtnItem
          classes={'flat'}
          label='Yes'
          type='danger'
        />

      </CardItem>

      <CardItem
        image='../assets/img/card-img.jpg'
        imageAlt='Card Image'
        headline='Going to Ibiza'
        text='Limit supplemental actions to two actions, in addition to an overflow menu.'
        header={true}
        headerImage='../assets/img/card-user-img.jpg'
        headerImageAlt='Card Image'
        headerTitle='Title'
        headerSubhead='Subhead'
      >
      </CardItem>

      <CardItem
        imageGallery={imageGallery}
        headline='Going to Ibiza'
        text='Limit supplemental actions to two actions, in addition to an overflow menu.'
        header={true}
        headerImage='../assets/img/card-user-img.jpg'
        headerImageAlt='Card Image'
        headerTitle='Title 1'
        headerSubhead='Subhead 1'
      >
        <BtnItem
          classes={'flat'}
          label='No'
          type='default'
        />
        <BtnItem
          classes={'flat'}
          label='Yes'
          type='danger'
        />
      </CardItem>

      <CardItem
        image='../assets/img/card-img.jpg'
        text='Limit supplemental actions to two actions, in addition to an overflow menu.'
      >
        <BtnItem
          classes={'flat'}
          label='A'
          type='succes'
        />
        <BtnItem
          classes={'flat'}
          label='B'
          type='warning'
        />
      </CardItem>

      <CardItem
        header={true}
        headerTitle='Car photography'
        headerSubhead='By John Doe'
        leftImage='../assets/img/car.jpg'
      >
        <BtnItem
          classes={'flat'}
          label='A'
          type='succes'
        />
        <BtnItem
          classes={'flat'}
          label='B'
          type='warning'
        />
      </CardItem>

      <CardItem
        header={true}
        headerTitle='Car photography'
        headerSubhead='By John Doe'
        leftImage='../assets/img/car.jpg'
      >
        <BtnItem
          classes={'flat'}
          label='A'
          type='succes'
        />
        <BtnItem
          classes={'flat'}
          label='B'
          type='warning'
        />
      </CardItem>

    </Card>,
    cards
  );
}

if (chips) {
  React.render(
    <Chip>
      <ChipItem
        image='../assets/img/card-user-img.jpg'
        imageAlt='Card Image'
        name='Gonzales'
        email='gon@zal.es'
      >
      </ChipItem>
      <ChipItem
        image='../assets/img/card-user-img.jpg'
        imageAlt='Card Image'
        name='Iolanda Curtiz'
        email='io@lan.da'
      >
      </ChipItem>
      <ChipItem
        image='../assets/img/card-user-img.jpg'
        imageAlt='Card Image'
        name='Gizela Timliv'
        email='gizela@timl.iv'
      >
      </ChipItem>
    </Chip>,
    chips
  );
}

if (papers) {
  React.render(
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
    </Paper>,
    papers
  );
}

if (sliders) {
  React.render(
    <Slider>
      <SliderItem start={10} fill={false} />
      <br />

      <SliderItem start={40} fill={true} />
      <br />

      <SliderItem start={47} fill={true} editable={true} />
      <br />

      <SliderItem start={50} fill={true} disable={true} />
      <br />

      <SliderItem start={23} fill={true} discrete={true} />
      <br />

      <SliderItem start={20} fill={true} discrete={true} steps={true} />

    </Slider>,
    sliders
  );
}

if (dialogs) {
  React.render(
    <Dialog>
      <DialogItem
        title="Use Google's location service?"
        content='Let Google help apps determine location. This means sending
        anonymous location data to Google, even when no apps are running.'
      >
        <BtnItem
          classes={'flat'}
          label='Disagree'
          type='primary'
        />
        <BtnItem
          classes={'flat'}
          label='Agree'
          type='primary'
        />
      </DialogItem>

      <DialogItem
        content="You'll lose all photos and media!"
      >
        <BtnItem
          classes={'flat'}
          label='No, thanks'
          type='primary'
        />
        <BtnItem
          classes={'flat'}
          label='Continue'
          type='danger'
        />
      </DialogItem>

      <DialogItem
        title="Dialog is awesome"
        content="When you use it with ReactJS"
      >
      </DialogItem>

      <DialogItem
        content="You'll lose all photos and media!"
      >
      </DialogItem>

      <DialogItem
        title="Bluetooth settings"
        content="Activate bluetooth"
        fullPage={true}
      >
        <BtnItem
          classes={'flat'}
          label='Turn on'
          type='primary'
        />
        <BtnItem
          classes={'flat'}
          label='Discard'
          type='primary'
        />
      </DialogItem>

    </Dialog>,
    dialogs
  );
}

if (tooltips) {
  React.render(
    <Btn>
      <BtnItem
        classes={'flat'}
        label='Label Default'
        type='default'
        rippleEffect={true}
        tooltip="Tooltip text"
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
    </Btn>,
    tooltips
  );
}

if (menu_simple) {
  var menu_left = [
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

  var menu = [
    {
      id: 'menu-simple',
      type: 'menu',
      text: 'Simple Menu',
      link: '#',
      hide: true,
      items: [
        {
          type: 'menu',
          text: 'Novatec',
          shortcut: 'Tab',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Shimano and company',
          shortcut: 'Tab',
          link: '#'
        },
        {
          type: 'divider'
        },
        {
          type: 'menu',
          text: 'Rhet',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Link',
          link: '#'
        },

      ]
    }
  ];

  React.render(
    <Menu items={menu_left} />,
    menu_simple
  );
}

if (menu_cover) {
  var menu = [
    {
      id: 'menu-cover',
      type: 'menu',
      text: 'Simple Menu - Cover',
      link: '#',
      hide: true,
      classes: "cover",
      items: [
        {
          type: 'menu',
          text: 'Cover: Novatec',
          shortcut: 'Tab',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Cover: Shimano and company',
          shortcut: 'Tab',
          link: '#'
        },
        {
          type: 'divider'
        },
        {
          type: 'menu',
          text: 'Cover: Rhet',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Cover: Link',
          link: '#'
        },

      ]
    }
  ];

  React.render(
    <Menu items={menu} />,
    menu_cover
  );
}

if (menu_multiple_simple) {
  var menu = [
    {
      id: 'menu-multiple-simple',
      hide: true,
      items: [
        {
          type: 'menu',
          text: '1',
          shortcut: 'Tab',
          link: '#1'
        },
        {
          type: 'menu',
          text: '2',
          shortcut: 'Tab',
          link: '#2'
        },
        {
          type: 'divider'
        },
        {
          type: 'menu',
          text: '3',
          link: '#3'
        },
        {
          type: 'menu',
          text: '4',
          link: '#4',
          items: [
            {
              type: 'menu',
              text: '4.1',
              link: '#4.1'
            },
            {
              type: 'menu',
              text: '4.2',
              link: '#4.2'
            },
            {
              type: 'divider'
            },
            {
              type: 'menu',
              text: '4.3',
              link: '#4.3'
            },
            {
              type: 'menu',
              text: '4.4',
              link: '#4.4',
              items: [
                {
                  type: 'menu',
                  text: '4.4.1',
                  link: '#4.4.1'
                },
                {
                  type: 'menu',
                  text: '4.4.2',
                  link: '#4.4.2'
                },
                {
                  type: 'divider'
                },
                {
                  type: 'menu',
                  text: '4.4.3',
                  link: '#4.4.3'
                },
                {
                  type: 'menu',
                  text: '4.4.4',
                  link: '#4.4.4'
                }
              ]
            }
          ]
        },
      ]
    }
  ];

  React.render(
    <Menu items={menu} />,
    menu_multiple_simple
  );
}

if (menu_multiple_cover) {
  var menu = [
    {
      id: 'menu-multiple-cover',
      type: 'menu',
      text: 'Cascaded Menu',
      link: '#',
      hide: true,
      classes: "cover",
      items: [
        {
          type: 'menu',
          text: 'Twocows',
          link: '#'
        },
        {
          type: 'menu',
          text: 'Marvel',
          link: '#'
        },
        {
          type: 'divider'
        },
        {
          type: 'menu',
          text: 'Shuheisha',
          link: '#'
        },
        {
          type: 'more',
          text: 'DC Comics',
          link: '#',
          items: [
            {
              type: 'menu',
              text: 'Twocows',
              link: '#'
            },
            {
              type: 'menu',
              text: 'Marvel',
              link: '#'
            },
            {
              type: 'divider'
            },
            {
              type: 'menu',
              text: 'Shuheisha',
              link: '#'
            },
            {
              type: 'more',
              text: 'DC Comics',
              link: '#'
            }
          ]
        },
      ]
    }
  ];

  React.render(
    <Menu items={menu} />,
    menu_multiple_cover
  );
}

if (tabs_fixed) {
  React.render(
    <TabMenu
      type='fixed'
      id={'TabMenuFixed'}
    >
      <TabItem
        type='list'
        id='tab-fix-0'
        label='Intergeek'
      />
      <TabItem
        type='content'
        id='tab-fix-0'
      >
        irure eiusmod sunt mollit laborum elit ex ex esse tempor
      </TabItem>

      <TabItem
        type='list'
        id='tab-fix-1'
        label='Geekology'
      />
      <TabItem
        type='content'
        id='tab-fix-1'
      >
        veniam cupidatat anim eu dolor ipsum ut aliquip Lorem non
      </TabItem>

      <TabItem
        type='list'
        id='tab-fix-2'
        label='Enaut'
      />

      <TabItem
        type='content'
        id='tab-fix-2'
        label='Enaut'
      >
        mollit culpa veniam mollit adipisicing ipsum proident in et cillum
      </TabItem>

      <TabItem
        type='list'
        id='tab-fix-3'
        label='Enerforce'
      />

      <TabItem
        type='content'
        id='tab-fix-3'
        label='Enerforce'
      >
        in ea enim laborum officia amet est laboris dolor consectetur
      </TabItem>

      <TabItem
        type='list'
        id='tab-fix-4'
        label='Flexigen'
      />

      <TabItem
        type='content'
        id='tab-fix-4'
        label='Flexigen'
      >
        deserunt do commodo irure commodo velit deserunt ipsum non cupidatat
      </TabItem>

      <TabItem
        type='list'
        id='tab-fix-5'
        label='Earthmark'
      />

      <TabItem
        type='content'
        id='tab-fix-5'
        label='Earthmark'
      >
        enim consectetur tempor aliqua dolore reprehenderit laborum irure minim consectetur
      </TabItem>

    </TabMenu>,
    tabs_fixed
  );
}

if (tabs_scrollable) {
  React.render(
    <TabMenu
      type='scrollable'
      id={'TabMenuScrollable'}
    >
      <TabItem
        type='list'
        id='tab-scroll-0'
        label='Intergeek'
      />
      <TabItem
        type='content'
        id='tab-scroll-0'
      >
        irure eiusmod sunt mollit laborum elit ex ex esse tempor
      </TabItem>

      <TabItem
        type='list'
        id='tab-scroll-1'
        label='Geekology'
      />
      <TabItem
        type='content'
        id='tab-scroll-1'
      >
        veniam cupidatat anim eu dolor ipsum ut aliquip Lorem non
      </TabItem>

      <TabItem
        type='list'
        id='tab-scroll-2'
        label='Enaut'
      />

      <TabItem
        type='content'
        id='tab-scroll-2'
        label='Enaut'
      >
        mollit culpa veniam mollit adipisicing ipsum proident in et cillum
      </TabItem>

      <TabItem
        type='list'
        id='tab-scroll-3'
        label='Enerforce'
      />

      <TabItem
        type='content'
        id='tab-scroll-3'
        label='Enerforce'
      >
        in ea enim laborum officia amet est laboris dolor consectetur
      </TabItem>

      <TabItem
        type='list'
        id='tab-scroll-4'
        label='Flexigen'
      />

      <TabItem
        type='content'
        id='tab-scroll-4'
        label='Flexigen'
      >
        deserunt do commodo irure commodo velit deserunt ipsum non cupidatat
      </TabItem>

      <TabItem
        type='list'
        id='tab-scroll-5'
        label='Earthmark'
      />

      <TabItem
        type='content'
        id='tab-scroll-5'
        label='Earthmark'
      >
        enim consectetur tempor aliqua dolore reprehenderit laborum irure minim consectetur
      </TabItem>

    </TabMenu>,
    tabs_scrollable
  );
}

if (tabs_desktop) {
  React.render(
    <TabMenu
      type='simple'
      id={'TabMenuDesktop'}
    >
      <TabItem
        type='list'
        id='tab-simple-0'
        label='Intergeek'
      />
      <TabItem
        type='content'
        id='tab-simple-0'
      >
        irure eiusmod sunt mollit laborum elit ex ex esse tempor
      </TabItem>

      <TabItem
        type='list'
        id='tab-simple-1'
        label='Geekology'
      />
      <TabItem
        type='content'
        id='tab-simple-1'
      >
        veniam cupidatat anim eu dolor ipsum ut aliquip Lorem non
      </TabItem>

      <TabItem
        type='list'
        id='tab-simple-2'
        label='Enaut'
      />

      <TabItem
        type='content'
        id='tab-simple-2'
        label='Enaut'
      >
        mollit culpa veniam mollit adipisicing ipsum proident in et cillum
      </TabItem>

      <TabItem
        type='list'
        id='tab-simple-3'
        label='Enerforce'
      />

      <TabItem
        type='content'
        id='tab-simple-3'
        label='Enerforce'
      >
        in ea enim laborum officia amet est laboris dolor consectetur
      </TabItem>

      <TabItem
        type='list'
        id='tab-simple-4'
        label='Flexigen'
      />

      <TabItem
        type='content'
        id='tab-simple-4'
        label='Flexigen'
      >
        deserunt do commodo irure commodo velit deserunt ipsum non cupidatat
      </TabItem>

      <TabItem
        type='list'
        id='tab-simple-5'
        label='Earthmark'
      />

      <TabItem
        type='content'
        id='tab-simple-5'
        label='Earthmark'
      >
        enim consectetur tempor aliqua dolore reprehenderit laborum irure minim consectetur
      </TabItem>

    </TabMenu>,
    tabs_desktop
  );
}
