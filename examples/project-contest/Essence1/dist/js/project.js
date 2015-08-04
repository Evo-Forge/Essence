'use strict';

var body = document.body, // default React render path is html body
    // byID = document.getElementById("header"),
    header = document.querySelector("#header"),
    contact = document.querySelector("#contact"),
    content = document.querySelector(".content"),
    bpage = document.querySelector(".bpage"),
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
    ToolBar = Essence.ToolBar,
    BackgroundColor = Essence.BackgroundColor,
    ClassNames = Essence.ClassNames,
    ClickPosition = Essence.ClickPosition,
    DateFormat = Essence.DateFormat,
    Mobile = Essence.Mobile,
    Position = Essence.Position,
    PositionHorizontal = Essence.PositionHorizontal,
    PubSub = Essence.PubSub;

if (header) {
  React.render(
      <AppBar>
        <Block type='div' classes='wrapper'>
          <Block classes="e-left logo">
            Title
          </Block>
          <Menu
              id='menu-appbar-icon-menu'
              classes={'e-right line-button'}
              icon='navigation-menu'
            >
              <MenuItem>
                <Text type='a' href='#' classes='e-text-left'>Home</Text>
              </MenuItem>
              <MenuItem>
                <Text type='a' href='#' classes='e-text-left'>Blog</Text>
              </MenuItem>
              <MenuItem>
                <Text type='a' href='#' classes='e-text-left'>Contact</Text>
              </MenuItem>
          </Menu>
          <Block type='div' classes='e-right navigation'>
            <Block type='li'><Text type='a' href='#' classes='e-text-center'>Home</Text></Block>
            <Block type='li'><Text type='a' href='#' classes='e-text-center'>Blog</Text></Block>
            <Block type='li'><Text type='a' href='/Contest%20A/Essence-master/examples/project-template/contact.html' classes='e-text-center'>Contact</Text></Block>
          </Block>
        </Block>
      </AppBar>
    ,header
  );
}

if (content) {
  React.render(
      <Block type='div' classes='e-text-center'>
        <Block type='div' classes='header'>
          <Block type='div' classes='wrapper e-padding-top-100'>
            <Text type="h1" classes={"e-display-4 e-text-white"}>Main Title</Text>
            <Text type="h2" classes={"e-headline e-text-white"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
              <Block type='div' id='buttons-header'classes='e-text-center up e-padding-top-25'>
                <Text type='a' classes='e-btn raised e-background-white e-text-black modified' href='#'> Join Us</Text>
              </Block>
          </Block>
        </Block>

        <Block type='div' classes='about'>
          <Block type='div' classes='wrapper e-padding-top-100'>
            <Text type="h1" classes={"e-display-3 e-text-cyan-500"}>Another Title</Text>
            <Divider classes={'thin e-background-grey-300'} />
            <Block type='div' classes='e-row'>
              <Block classes={"brick brick-4"}>
                <Image classes='e-img-rsp' src="dist/img/section1.jpg" alt="Section Image" />
                <Text type="h3" classes={"e-headline e-text-black"}>Heading of section</Text>
                <Text type='p' classes={"e-subhead e-text-center e-text-grey-600"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
              </Block>
              <Block classes={"brick brick-4"}>
                <Image classes='e-img-rsp' src="dist/img/section2.jpg" alt="Section Image" />
                <Text type="h3" classes={"e-headline e-text-black"}>Heading of section</Text>
                <Text type='p' classes={"e-subhead e-text-center e-text-grey-600"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
              </Block>
              <Block classes={"brick brick-4"}>
                <Image classes='e-img-rsp' src="dist/img/section3.jpg" alt="Section Image" />
                <Text type="h3" classes={"e-headline e-text-black"}>Heading of section</Text>
                <Text type='p' classes={"e-subhead e-text-center e-text-grey-600"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
              </Block>
            </Block>
          </Block>
        </Block>

      
        <Block type='div' classes='join'>
          <Block type='div' classes='wrapper e-padding-top-200 e-padding-bottom-100'>
            <Text type="h2" classes={"e-headline e-text-black"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, lorem ipsum dolor sit amet, consectetuer adipiscing elit lorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
              <Block type='div' id='buttons-header'classes='e-text-center up e-padding-top-75'>
                <Text type='a' classes='e-btn raised e-background-white e-text-black modified ' href='#'> Join Us</Text>
              </Block>
          </Block>
        </Block>

      </Block>
      ,content
  );
}

if (contact){
    React.render(
      <Block type='div' classes='contact e-background-grey-200'>
        <Block type='div' classes='wrapper'>
          <Block type='div' classes='e-row'>
            <Block classes={"brick brick-9"}>
              <form id="projectForm" action="sendemail.php" method="post" encType="multipart/form-data">
              <Card>
                <CardItem>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-display-3"}>Contact</Text>
                    </Block>
                  </CardItemHeader>

                  <CardItemContent classes={"card-supporting-text e-text-light-blue-A400"}>
                    
                      <InputItem
                        classes={'e-input-group has-info e-margin-bottom-75'}
                        type='text'
                        name='label'
                        label='Name'
                      >
                      </InputItem>
                        <InputItem
                        classes={'e-input-group has-info e-margin-bottom-75'}
                        type='email'
                        name='label'
                        label='E-mail'
                      >
                      </InputItem>
                      <InputItem
                        classes={'e-input-group has-info'}
                        inputClasses={'e-padding-bottom-50'}
                        type='textarea'
                        name='text'
                        placeholder='Message'
                      >
                      >
                      </InputItem>
                      
                      <Block type='div' classes={"inline"}>
                        <BtnItem
                          classes={'raised e-background-cyan-600 modified e-margin-bottom-25'}
                          label='Send Email'
                          submit={true}
                          name='sendemail'
                          rippleEffect={true}
                          id='submit-btn'
                        />
                      </Block>
                    
                  </CardItemContent>
                </CardItem>
              </Card>
              </form>
            </Block>
            <Block classes={"brick brick-3"}>
              <Card>
                <CardItem>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-display-1"}>Adress</Text>
                    </Block>
                  </CardItemHeader>

                  <CardItemContent classes={"card-supporting-text e-text-light-blue-A400"}>
                    
                    <Text type="p" classes={"e-display-2"}>1234 Adress Street somewhere , state 75896, United States</Text>
                    
                  </CardItemContent>
                </CardItem>
              </Card>
            </Block>
          </Block>
        </Block>
      </Block>
    ,contact
  );
}

if (bpage){
  React.render(
    <Block type='div' classes='blogs e-background-grey-200'>
            <Block type='div' classes='wrapper'>
          <Block type='div' classes='e-row'>
            <Block classes={"brick brick-9"}>
              <Card>
                <CardItem>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-display-2 e-text-cyan-500"}>No Feature Image Set</Text>
                    </Block>
                  </CardItemHeader>
                  <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
                    <Block type='div' classes='entry e-padding-bottom-15'>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-device-access-time time'>
                          <Text type='a' href='#'> February 1, 2015</Text>
                        </Block>
                      </Text>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-action-account-circle time'>
                          <Text type='a' href='#'> dadmin</Text>
                        </Block>
                      </Text>
                    </Block>
                    <Block type='div' classes='card-text'>
                      <Text type='p'> Lorem ipsum dolor sit amet, et sint discere vix, eum at altera aperiam conceptam. Verear euismod theophrastus an vix. Mel natum magna aliquando cu, quo no quas persecuti. Causae iisque invenire ius ad, quem labitur voluptatum nam ne. An graeci posidonium quo, alienum eleifend et cum, nominavi mandamus ei quo. Quo docendi postulant ne, mea cu tollit phaedrum Cu usu magna admodum. Usu an facer dicunt evertitur, zril tempor omnium te per. Habeo equidem ne pro, ea suas veri zril vim, ei vel temporibus suscipiantur. Pri consul eligendi id, mel legere labitur neglegentur no, te sit quas modus. Postea dictas nostrum cu eam, ei ius ridens mentitum delectus.</Text>
                      <Text type='p'> Lorem ipsum dolor sit amet, et sint discere vix, eum at altera aperiam conceptam. Verear euismod theophrastus an vix. Mel natum magna aliquando cu, quo no quas persecuti. Causae iisque invenire ius ad, quem labitur voluptatum nam ne. An graeci posidonium quo, alienum eleifend et cum, nominavi mandamus ei quo. Quo docendi postulant ne, mea cu tollit phaedrum Cu usu magna admodum. Usu an facer dicunt evertitur, zril tempor omnium te per. Habeo equidem ne pro, ea suas veri zril vim, ei vel temporibus suscipiantur. Pri consul eligendi id, mel legere labitur neglegentur no, te sit quas modus. Postea dictas nostrum cu eam, ei ius ridens mentitum delectus.</Text>
                    </Block>
                    <Block type="div" classes={"card-btn e-margin-top-25"}>
                    <BtnItem
                        classes={'flat'}
                        label='Read more'
                        type='info'
                        rippleEffect={true}
                      />
                    </Block>
                  </CardItemContent>

                  <CardItemFooter>
                    <Block type="div" classes={"card-footer e-padding-top-15 e-padding-bottom-15"}>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-file-folder time'>
                          <Text type='a' href='#'> Cityscape</Text>
                        </Block>
                      </Text>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-communication-forum time'>
                          <Text type='a' href='#'> Leave a comment</Text>
                        </Block>
                      </Text>
                    </Block>
                  </CardItemFooter>
                </CardItem>
              </Card>

              <Card>
                <CardItem>
                  <Block type="div" classes={"card-main-image"}>
                    <Image src="dist/img/city.jpg" alt="Card Header Image" />
                    <Text type="h1" classes={"e-headline"}>
                      City
                    </Text>
                  </Block>

                  <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
                    <Block type='div' classes='entry e-padding-bottom-15'>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-device-access-time time'>
                          <Text type='a' href='#'> February 1, 2015</Text>
                        </Block>
                      </Text>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-action-account-circle time'>
                          <Text type='a' href='#'> dadmin</Text>
                        </Block>
                      </Text>
                    </Block>
                    <Block type='div' classes='card-text'>
                      <Text type='p'> Lorem ipsum dolor sit amet, et sint discere vix, eum at altera aperiam conceptam. Verear euismod theophrastus an vix. Mel natum magna aliquando cu, quo no quas persecuti. Causae iisque invenire ius ad, quem labitur voluptatum nam ne. An graeci posidonium quo, alienum eleifend et cum, nominavi mandamus ei quo. Quo docendi postulant ne, mea cu tollit phaedrum Cu usu magna admodum. Usu an facer dicunt evertitur, zril tempor omnium te per. Habeo equidem ne pro, ea suas veri zril vim, ei vel temporibus suscipiantur. Pri consul eligendi id, mel legere labitur neglegentur no, te sit quas modus. Postea dictas nostrum cu eam, ei ius ridens mentitum delectus.</Text>
                    </Block>
                    <Block type="div" classes={"card-btn e-margin-top-25"}>
                    <BtnItem
                        classes={'flat'}
                        label='Read more'
                        type='info'
                        rippleEffect={true}
                      />
                    </Block>
                  </CardItemContent>

                  <CardItemFooter>
                    <Block type="div" classes={"card-footer e-padding-top-15 e-padding-bottom-15"}>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-file-folder time'>
                          <Text type='a' href='#'> Cityscape</Text>
                        </Block>
                      </Text>
                      <Text type='span'>
                        <Block type='div' classes='e-icon-communication-forum time'>
                          <Text type='a' href='#'> Leave a comment</Text>
                        </Block>
                      </Text>
                    </Block>
                  </CardItemFooter>
                </CardItem>
              </Card>
            </Block>
            <Block classes={"brick brick-3"}>
              <Card>
                <CardItem>
                  <CardItemContent classes={"card-supporting-text e-text-light-blue-A400"}>
                      <Input>
                      <InputItem
                        classes={'e-input-group has-info'}
                        inputClasses={'e-search'}
                        type='search'
                        name='search'
                        label='Search...'
                      >
                      </InputItem>
                      </Input>
                  </CardItemContent>
                </CardItem>
              </Card>

              <Card>
                <CardItem>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-headline"}>Categories</Text>
                    </Block>
                  </CardItemHeader>
                  <CardItemContent classes={"card-supporting-text e-text-light-blue-A400 links"}>
                    <Text type='a' href='#Cityscape'> Cityscape</Text>
                    <Text type='a' href='#Image'> Image</Text>
                    <Text type='a' href='#No Image'> No Image</Text>
                  </CardItemContent>
                </CardItem>
              </Card>
            </Block>
          </Block>
        </Block>
    </Block>
    ,bpage
  );
}

if (footer) {
  React.render(
      <Block type='div' classes='widget e-background-cyan-500'>
        <Block type='div' classes='wrapper'>
          <Block type='div' classes='e-row'>

            <Block classes={"brick brick-4"}>
              <Text type="h3" classes={"e-headline e-text-white e-text-left"}>Footer Widget</Text>
              <Text type='p' classes={"e-subhead e-text-left e-text-white"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
            </Block>
            <Block classes={"brick brick-4"}>
              <Text type="h3" classes={"e-headline e-text-white e-text-left"}>Footer Widget</Text>
              <Text type='p' classes={"e-subhead e-text-left e-text-white"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
            </Block>
            <Block classes={"brick brick-4"}>
              <Text type="h3" classes={"e-headline e-text-white e-text-left"}>Footer Widget</Text>
              <Text type='p' classes={"e-subhead e-text-left e-text-white"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elitLorem ipsum dolor sit amet, consectetuer adipiscing elit</Text>
            </Block>

          </Block>
        </Block>


    <Block type='div' classes='e-background-cyan-600 e-text-left'>
      <Block type='div' classes='wrapper'>
        <Text classes={"e-subhead e-text-left e-text-white"}>&#169; 2015 Copyright Text</Text>
      </Block>
    </Block>
  </Block>
    ,footer
);
}
