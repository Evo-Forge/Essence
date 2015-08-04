'use strict';

var body = document.body, // default React render path is html body
    header = document.querySelector("#header"),
    content = document.querySelector("#content"),
    footer = document.querySelector("#footer"),
    home = document.querySelector(".home"),
    blog = document.querySelector(".blog"),
    contact= document.querySelector('.contact'),
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


if(header) {
  React.render(
    <Block type ="div" classes='e-no-padding header-image'>
      <AppBar>
        <Block classes="e-left logo">
          Your page title
        </Block>
        <Menu
            id='menu-appbar-icon-menu'
            classes={'e-right line-button'}
            icon='navigation-menu'>
            <MenuItem>
              <Text type='a' href='#' classes='e-text-left e-text-uppercase'>Home</Text>
            </MenuItem>
            <MenuItem>
              <Text type='a' href='#' classes='e-text-left e-text-uppercase'>About Us</Text>
            </MenuItem>
            <MenuItem>
              <Text type='a' href='#' classes='e-text-left e-text-uppercase'>Contact</Text>
            </MenuItem>
        </Menu>
        <Block type='div' classes='e-right navigation'>
          <Block type='li'><Text type='a' href='#' classes='e-text-center '>Home</Text></Block>
          <Block type='li'><Text type='a' href='#' classes='e-text-center '>About Us</Text></Block>
          <Block type='li'><Text type='a' href='#' classes='e-text-center '>Contact</Text></Block>
        </Block>
      </AppBar>
      <Block type='div' classes='e-padding-top-250'>
        <Block classes={"e-row"}>
          <Block classes={"brick brick-12 e-text-center text-of-header"}>
            <Text type="h1" classes={"e-display-4 e-text-white e-text-uppercase"}> main title here</Text>
            <Text type="h3" classes={"e-headline e-text-white "}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat arcu, maximus iaculis ullamcorper vel, pellentesque eu odio. Vestibulum nec volutpat nunc, nec imperdiet felis.</Text>
          </Block>
        </Block>
        <Block type='div' id='buttons-header'classes='e-text-center up e-padding-top-25'>
          <Text type='a' classes='e-btn raised e-background-white btn-modified-header' href='https://github.com/PearlVentures/Essence'> Join us </Text>
        </Block>
      </Block>
    </Block>
  ,header
);

}
if(content) {
  React.render(
    <Block type ="div" classes='e-no-padding'>
      <AppBar>
        <Block classes="e-left logo e-text-uppercase">
          Logo
        </Block>
        <Menu
            id='menu-appbar-icon-menu'
            classes={'e-right line-button'}
            icon='navigation-menu'>
            <MenuItem>
              <Text type='a' href='#' classes='e-text-left e-text-uppercase'>Home</Text>
            </MenuItem>
            <MenuItem>
              <Text type='a' href='#' classes='e-text-left e-text-uppercase'>About Us</Text>
            </MenuItem>
            <MenuItem>
              <Text type='a' href='#' classes='e-text-left e-text-uppercase'>Contact</Text>
            </MenuItem>
        </Menu>
        <Block type='div' classes='e-right navigation'>
          <Block type='li'><Text type='a' href='#' classes='e-text-center e-text-uppercase'>Home</Text></Block>
          <Block type='li'><Text type='a' href='#' classes='e-text-center e-text-uppercase'>About Us</Text></Block>
          <Block type='li'><Text type='a' href='#' classes='e-text-center e-text-uppercase'>Contact</Text></Block>
        </Block>
      </AppBar>
    </Block>
  ,content
);

}


if(home) {
  React.render(
      <Block type ="div" classes='e-padding-top-150 home-section'>
        <Block classes={"e-row"}>
          <Block classes={"brick brick-4 photo-image"}>
            <Text type='h2'classes={"e-display-3 e-text-uppercase"}>
              Change this title
            </Text>
          </Block>
          <Block classes={"brick brick-8 text-black"}>
            <Text type='p' classes={"home-text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada dictum sapien. Nullam eget malesuada velit, eget ornare justo. Nulla at vestibulum sapien. Cras velit odio, pellentesque elementum sagittis ut, iaculis eget nibh.
              Phasellus rutrum condimentum enim sit amet sodales. Ut vehicula fringilla ultricies. Fusce nec arcu vel massa aliquam laoreet. Aliquam accumsan vitae magna ut pulvinar.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada dictum sapien. Nullam eget malesuada velit, eget ornare justo. Nulla at vestibulum sapien. Cras velit odio, pellentesque elementum sagittis ut, iaculis eget nibh.
              Phasellus rutrum condimentum enim sit amet sodales. Ut vehicula fringilla ultricies. Fusce nec arcu vel massa aliquam laoreet. Aliquam accumsan vitae magna ut pulvinar.
            </Text>
            <Text type='p' classes={"home-text"}>
              Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio.
            </Text>
          </Block>
        </Block>

        <Block type="div" classes = 'testemonials'>
          <Text type='h2'classes={"e-display-3 e-text-uppercase e-text-center"}>
              Change this title
            </Text>
          <Block classes={"e-row"}>
            <Block classes={"brick brick-4 text-left"}>
              <Card>
                <CardItem>


                  <Block type="div" classes={"card-main-image"}>
                    <Image src="dist/img/photoshop.png" alt="Card Header Image" />
                  </Block>

                  <CardItemContent classes={"card-supporting-text"}>
                    <Text type="h4">
                      Into to Photoshop
                    </Text>
                  </CardItemContent>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-image"}>
                      <Image src="assets/img/card-user-img.jpg" alt="Card Header Image" />
                    </Block>

                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-title"}>Jake Caputo</Text>
                      <Text type='p' classes={"home-text"}>
                        Learn design techniques from a master in the craft.
                      </Text>
                    </Block>
                  </CardItemHeader>
                  <Block type='div' classes='entry e-padding-bottom-15'>
                    <Text type='span'>
                      <Block type='div' classes='price'>
                        <Text type='a' href='#'> $3.00</Text>
                      </Block>
                    </Text>
                    <Text type='span'>
                      <Block type='div' classes='lessons'>
                        <Text type='a' href='#'> 2 Lessons</Text>
                      </Block>
                    </Text>
                    <Text type='span'>
                      <Block type='div' classes=' e-icon-maps-local-offer lessons'>
                        <Text type='a' href='#'> Art & Design</Text>
                      </Block>
                    </Text>
                  </Block>
                  <BtnItem
                    classes={'flat'}
                    label='Preview'
                    type='warning'
                    rippleEffect={true}/>
                </CardItem>
              </Card>
            </Block>
            <Block classes={"brick brick-4 text-right"}>
              <Card>
                <CardItem>

                  <Block type="div" classes={"card-main-image"}>
                    <Image src="dist/img/css.png" alt="Card Header Image" />
                  </Block>

                  <CardItemContent classes={"card-supporting-text"}>
                    <Text type="h4">
                      Diving into CSS
                    </Text>
                  </CardItemContent>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-image"}>
                      <Image src="assets/img/card-user-img.jpg" alt="Card Header Image" />
                    </Block>

                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-title"}>Jake Caputo</Text>
                      <Text type='p' classes={"home-text"}>
                        Learn design techniques from a master in the craft.
                      </Text>
                    </Block>
                  </CardItemHeader>
                  <Block type='div' classes='entry e-padding-bottom-15'>
                    <Text type='span'>
                      <Block type='div' classes='price'>
                        <Text type='a' href='#'> $3.00</Text>
                      </Block>
                    </Text>
                    <Text type='span'>
                      <Block type='div' classes='lessons'>
                        <Text type='a' href='#'> 2 Lessons</Text>
                      </Block>
                    </Text>
                    <Text type='span'>
                      <Block type='div' classes=' e-icon-maps-local-offer lessons'>
                        <Text type='a' href='#'> Art & Design</Text>
                      </Block>
                    </Text>
                  </Block>
                  <BtnItem
                    classes={'flat'}
                    label='Preview'
                    type='warning'
                    rippleEffect={true}/>
                </CardItem>
              </Card>
            </Block>
            <Block classes={"brick brick-4 text-right"}>
              <Card>
                <CardItem>

                  <Block type="div" classes={"card-main-image"}>
                    <Image src="dist/img/html.png" alt="Card Header Image" />
                  </Block>

                  <CardItemContent classes={"card-supporting-text "}>
                    <Text type="h4">
                      Beginner HTML
                    </Text>
                  </CardItemContent>
                  <CardItemHeader>
                    <Block type="div" classes={"card-header-image"}>
                      <Image src="assets/img/card-user-img.jpg" alt="Card Header Image" />
                    </Block>

                    <Block type="div" classes={"card-header-text"}>
                      <Text type="h2" classes={"e-title"}>Jake Caputo</Text>
                      <Text type='p' classes={"home-text"}>
                        Learn design techniques from a master in the craft.
                      </Text>
                    </Block>
                  </CardItemHeader>
                  <Block type='div' classes='entry e-padding-bottom-15'>
                    <Text type='span'>
                      <Block type='div' classes='price'>
                        <Text type='a' href='#'> $3.00</Text>
                      </Block>
                    </Text>
                    <Text type='span'>
                      <Block type='div' classes='lessons'>
                        <Text type='a' href='#'> 2 Lessons</Text>
                      </Block>
                    </Text>
                    <Text type='span'>
                      <Block type='div' classes=' e-icon-maps-local-offer lessons'>
                        <Text type='a' href='#'> Art & Design</Text>
                      </Block>
                    </Text>
                  </Block>
                  <BtnItem
                    classes={'flat'}
                    label='Preview'
                    type='warning'
                    rippleEffect={true}/>
                </CardItem>
              </Card>
            </Block>
          </Block>
        </Block>
        <Block type='div' id='buttons-header'classes='e-text-center up e-padding-top-25'>
          <Text type='a' classes='e-btn raised e-background-white btn-modified-header' href='https://github.com/PearlVentures/Essence'> View All </Text>
        </Block>
        <Block type="div" classes ='e-margin-top-100 e-text-center subscribe-section'>
          <Text type='p' classes={"home-text"}>
            Maecenas tristique rutrum mi. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
          </Text>
          <Block type='div' id='buttons-header'classes='e-text-center up e-padding-top-25'>
          <Text type='a' classes='e-btn raised e-background-white btn-modified-header' href='https://github.com/PearlVentures/Essence'> Donate! </Text>
        </Block>
        </Block>
      </Block>
    ,home
  );

}

if(blog) {
  React.render(
      <Block type ="div" classes='e-no-padding'>
        <Block type="div" classes = 'e-padding-top-100 blog-content'>
          <Text type='h2'classes={"e-display-3 e-text-uppercase e-text-center"}>
              Change this title
          </Text>
          <Text type='p' classes={"blog-text-here"}>
             Phasellus ut tristique odio, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
          </Text>
          <Image classes='e-img-rsp' src="dist/img/picture-blog.jpg" alt="Card Header Image" />

          <Block classes={"e-row"}>
            <Block classes={"brick brick-12 text-blog-blog"}>
              <Text type='p' classes={"home-text"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lectus ullamcorper, consequat leo consequat, dignissim sem. Sed lacinia, tellus eu elementum rutrum, augue mi ultricies massa, vel mattis ipsum mi a lectus. Duis justo nulla, semper nec velit quis, tempus accumsan mi. Donec tellus nunc, egestas quis bibendum vel, ultricies sit amet orci. In vehicula porttitor orci, sed euismod lorem blandit placerat. Quisque porta eleifend ante eget mattis. Ut ullamcorper est metus. Sed pulvinar est at nunc sodales sagittis. Phasellus facilisis consectetur massa, vel consectetur velit consequat sit amet. Curabitur lacinia ultrices dui non porttitor. Sed consequat magna in sapien fringilla, vitae porta nisi sollicitudin. Donec pulvinar volutpat urna, luctus rhoncus risus efficitur eget. Pellentesque a convallis enim. Mauris in justo euismod, dapibus leo ut, aliquet tellus.
              </Text>
              <Text type='p' classes={"home-text"}>
                Auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae lectus ullamcorper, consequat leo consequat, dignissim sem. Sed lacinia, tellus eu elementum rutrum, augue mi ultricies massa, vel mattis ipsum mi a lectus. Duis justo nulla, semper nec velit quis, tempus accumsan mi. Donec tellus nunc, egestas quis bibendum vel, ultricies sit amet orci. In vehicula porttitor orci, sed euismod lorem blandit placerat. Quisque porta eleifend ante eget mattis. Ut ullamcorper est metus. Sed pulvinar est at nunc sodales sagittis. Phasellus facilisis consectetur massa, vel consectetur velit consequat sit amet. Curabitur lacinia ultrices dui non porttitor. Sed consequat magna in sapien fringilla, vitae porta nisi sollicitudin. Donec pulvinar volutpat urna, luctus rhoncus risus efficitur eget. Pellentesque a convallis enim. Mauris in justo euismod, dapibus leo ut, aliquet tellus.
              </Text>
            </Block>
          </Block>

        </Block>
      </Block>
    ,blog
  );

}


if(contact) {
  React.render(
      <Block type ="div" classes='e-no-padding'>
        <Block type="div" classes = 'e-padding-top-100 contact-content'>
          <Text type='h2'classes={"e-display-3 e-text-uppercase e-text-center"}>
            Contact us
          </Text>
        </Block>
        <Block type="div" classes='small-text'>
          <Text type='p' classes={"home-text"}>
            Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis.
          </Text>
        </Block>
        <Input>
          <InputItem
            classes={'e-input-group'}
            inputClasses={'e-input'}
            type='text'
            name='label'
            placeholder='Name'>
          </InputItem>

          <InputItem
            classes={'e-input-group'}
            inputClasses={'e-input'}
            type='email'
            name='label'
            label='Email'>
          </InputItem>

          <InputItem
            classes={'e-input-group'}
            inputClasses={'e-input'}
            type='text'
            name='label'
            label='Website'>
          </InputItem>

          <InputItem
            classes={'e-input-group'}
            inputClasses={'e-input'}
            type='textarea'
            name='label'
            label='Comment'>
          </InputItem>
        </Input>
        <BtnItem
          classes={'raised'}
          label='Submit'
          tooltip='Submit'
          type='submit'
          rippleEffect={true}/>
      </Block>
    ,contact
  );

}

if(footer) {
  React.render(
      <Block type='div' classes=' e-text-center e-padding-top-100 footer-section'>
        <Btn>
          <BtnItem classes = 'fa fa-facebook'
            icon='facebook'
            type='fab'            />
          <BtnItem classes = 'fa fa-twitter'
            icon='twitter'
            type='fab'/>
          <BtnItem classes = 'fa fa-google-plus'
            icon='google-plus'
            type='fab'/>
        </Btn>
          <Text type='p' classes={"footer-text e-text-center"}>
            © Copyright 2015 - yourname.
          </Text>
          <Text type='p' classes={"footer-text e-text-center"}>
            All rights reserved.
          </Text>
      </Block>
    ,footer
  );

}
