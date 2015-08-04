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
      <Block type='div' classes='text'>
        <Text type='h2'classes={"e-display-3 e-text-uppercase e-text-white"}>
          Lorem ipsum dolor sit
        </Text>
        <Text type='p' classes={"e-text-left e-text-white about-text"}>
          Nam liber tempor cum solutia nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.Nam liber tempor cum solutia nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
        </Text>
        <BtnItem classes={'raised magic-button'}
        label='Button'
        tooltip='Tooltip Warning'
        type='warning'
        rippleEffect={true}/>
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
      <Block type ="div" classes='e-padding-top-50 home-section'>
        <Block classes={"e-row"}>
          <Block classes={"brick brick-6 photo-image"}>
            <Image classes='e-img-rsp' src="dist/img/photo-image.png" alt="Card Header Image" />
          </Block>
          <Block classes={"brick brick-6 text-black"}>
            <Text type='h2'classes={"e-display-3 e-text-uppercase"}>
              Lorem ipsum dolor
            </Text>
            <Text type='p' classes={"home-text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada dictum sapien. Nullam eget malesuada velit, eget ornare justo. Nulla at vestibulum sapien. Cras velit odio, pellentesque elementum sagittis ut, iaculis eget nibh.
              Phasellus rutrum condimentum enim sit amet sodales. Ut vehicula fringilla ultricies. Fusce nec arcu vel massa aliquam laoreet. Aliquam accumsan vitae magna ut pulvinar.
            </Text>
            <Text type='p' classes={"home-text"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada dictum sapien. Nullam eget malesuada velit, eget ornare justo. Nulla at vestibulum sapien. Cras velit odio, pellentesque elementum sagittis ut, iaculis eget nibh.
              Phasellus rutrum condimentum enim sit amet sodales. Ut vehicula fringilla ultricies. Fusce nec arcu vel massa aliquam laoreet. Aliquam accumsan vitae magna ut pulvinar.
            </Text>
            <Text type='p' classes={"home-text"}>
              Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio.
            </Text>
          </Block>
        </Block>
        <Block type="div" classes ='e-padding-top-100 e-text-center subscribe-section'>
          <Text type='h1' classes={'e-display-4 e-text-white e-text-uppercase'}>
            Subscribe now!
          </Text>
          <Text type="h5" classes={"e-headline e-text-white"}>
            Ut wisi enim ad minim veniam, quis nostrud exercitation.
          </Text>
          <Image classes='e-img-rsp' src="dist/img/fifty-image.png" alt="Card Header Image" />
        </Block>
        <Block type="div" classes = 'e-padding-top-100 testemonials'>
          <Text type='h2'classes={"e-display-3 e-text-uppercase e-text-center"}>
              Lorem ipsum dolor
            </Text>
          <Block classes={"e-row"}>
            <Block classes={"brick brick-6 text-left"}>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
            </Block>
            <Block classes={"brick brick-6 text-right"}>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
            </Block>
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
              Lorem ipsum dolor
            </Text>
          <Block classes={"e-row"}>
            <Block classes={"brick brick-6 text-left"}>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
            </Block>
            <Block classes={"brick brick-6 text-right"}>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis.
              </Text>
            </Block>
          </Block>
          <Image classes='e-img-rsp' src="dist/img/blog-image.png" alt="Card Header Image" />
        </Block>
        <Block type="div" classes = 'blog-content-after'>
          <Block classes={"e-row"}>
            <Block classes={"brick brick-6 text-left"}>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis.
              </Text>
            </Block>
            <Block classes={"brick brick-6 text-right"}>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien, sit amet semper est varius quis. Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Morbi ultrices ornare sapien,  sed malesuada elit aliquet quis. Phasellus ut tristique odio. Duis efficitur diam ac felis euismod, id fringilla arcu lacinia. Sed orci enim, vehicula quis nunc id, feugiat commodo ligula. Pellentesque molestie orci arcu, eget congue tortor interdum eu.
              </Text>
              <Text type='p' classes={"home-text"}>
                Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis.
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
            Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis.Maecenas tristique rutrum mi, nec auctor metus placerat vitae. Nam luctus aliquet mi, sed malesuada elit aliquet quis.
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
      <Block type='div' classes='e-background-blue-grey-900 e-text-center footer-section'>
        <Btn>
          <BtnItem classes = 'fa fa-facebook'
            icon='facebook'
            type='fab'
            rippleEffect={true}
            mini={true}/>
          <BtnItem classes = 'fa fa-twitter'
            icon='twitter'
            type='fab'
            rippleEffect={true}
            mini={true}/>
          <BtnItem classes = 'fa fa-dribbble'
            icon='dribbble'
            type='fab'
            rippleEffect={true}
            mini={true}/>
          <BtnItem classes = 'fa fa-vimeo-square'
            icon='vimeo'
            type='fab'
            rippleEffect={true}
            mini={true}/>
          <BtnItem classes = 'fa fa-google-plus'
            icon='google-plus'
            type='fab'
            rippleEffect={true}
            mini={true}/>
        </Btn>
          <Text type='p' classes={"footer-text e-text-center"}>
            © 2015 - All Rights Reserved
          </Text>
      </Block>
    ,footer
  );

}
