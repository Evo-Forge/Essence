'use strict';

var body = document.body, // default React render path is html body
    byID = document.getElementById("header"),
    header = document.querySelector(".header"),
    content = document.querySelector(".content"),
    footer = document.querySelector(".footer"),
    React = Essence.React,
    ReactDOM = Essence.ReactDOM,
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
    ToolBar = Essence.ToolBar,
    BackgroundColor = Essence.BackgroundColor,
    ClassNames = Essence.ClassNames,
    ClickPosition = Essence.ClickPosition,
    DateFormat = Essence.DateFormat,
    Mobile = Essence.Mobile,
    Position = Essence.Position,
    PositionHorizontal = Essence.PositionHorizontal,
    PubSub = Essence.PubSub;

ReactDOM.render(
    <Block type='div' classes='e-background-grey-500 e-text-center'>
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
    <h2 className='e-display-2'>Tab Item One Example</h2>
    <p>
      This is an example of a tab template!
    </p>
    <p>
      You can put any sort of HTML or Essence component in here.
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
    <h2 className='e-display-2'>Tab Item Two Example</h2>
    <p>
      This is another example of a tab two template!
    </p>
    <p>
      You can put any sort of HTML or Essence component in here.
    </p>
    
      <Btn>
        <BtnItem
          classes={'flat'}
          label='Say Hello!'
          type='danger'
          rippleEffect={true}
        />
      </Btn>
    
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
    <h2 className='e-headline'>Tab Item Two Example</h2>
    <p>
      This is another example of a tab tree template!
    </p>
    <p>
      You can put any sort of HTML or Essence component in here.
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
    </Block>
    ,byID
);

ReactDOM.render(
    <Block type='div' classes='e-background-red-500 e-text-center'>
      your content by class .header here
    </Block>
    ,header
);

ReactDOM.render(
    <Block type='div' classes='e-background-yellow-500 e-text-center'>
      your content by class .content here
    </Block>
    ,content
);

ReactDOM.render(
    <Block type='div' classes='e-background-blue-500 e-text-center'>
      your content by class .footer here
    </Block>
    ,footer
);
