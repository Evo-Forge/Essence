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
    <Block type='div'>
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
<Divider classes={'thin e-background-indigo-700'} />
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
<Divider classes={'thin e-background-indigo-700'} />

<Input>
  <InputItem
    classes={'e-input-group has-warning'}
    inputClasses={'e-input e-input-success'}
    type='text'
    name='label'
    label='Did you know each time you see a full moon you always see the same side'
  >
  </InputItem>

  <InputItem
    classes={'e-input-group has-info'}
    inputClasses={'e-input e-input-success'}
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
    label='Search...'
  >
  </InputItem>
</Input>


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
