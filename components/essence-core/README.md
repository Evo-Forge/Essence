# Essence Core - Essence components

#### Components:
##### 1. GRID SYSTEM

###### Option:
- **type**: default `div` or from the list: `span` `header` `footer` `section` `ul` `li` `hr` `br`

```js
import {Block} from 'essence-core';

<Block classes={'brick brick-12'}>brick-12</Block>

<Block classes={'brick brick-6'}>brick-6</Block>
<Block classes={'brick brick-6'}>brick-6</Block>

<Block classes={'brick brick-4'}>brick-4</Block>
<Block classes={'brick brick-4'}>brick-4</Block>
<Block classes={'brick brick-4'}>brick-4</Block>

<Block classes={'brick brick-3'}>brick-3</Block>
<Block classes={'brick brick-3'}>brick-3</Block>
<Block classes={'brick brick-3'}>brick-3</Block>
<Block classes={'brick brick-3'}>brick-3</Block>
```

##### 2. DIVIDER

###### Option:
- **classes**: className from the list: `thinnest` `thin` `regular` `thick` `thickest` `short` `medium` `long`

```js
import {Divider} from 'essence-core';

<Divider classes={'thick short e-background-indigo-400'} />
<Divider classes={'thick long e-background-indigo-400'} />
<Divider classes={'thick short e-background-indigo-400'} />
<Divider classes={'thin long e-background-indigo-400'} />
<Divider classes={'thick e-background-indigo-400'} />
<Divider classes={'thin e-background-indigo-400'} />
```

##### 3. RIPPLE INK

###### Options:
- **position**: object with `x` for **left** position in px & `y` for **top** position in px
- **color**: for `backgroundColor`

```js
import {Utils, RippleInk} from 'essence-core';

let boundingClient = this.currentButton.getBoundingClientRect();
let color = Utils.BackgroundColor(event);
let position = Utils.ClickPosition(event, boundingClient);

<RippleInk color={color} position={position}/>
```

##### 4. TEXT TYPOGRAPHY

###### Requirements:
Import **Roboto** & **Roboto Condensed** from Google Fonts:

```
Roboto: Light, Italic & Bold
<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,700italic,300italic,300,500,500italic,100italic,100,400italic' rel='stylesheet' type='text/css'>
```

```
Roboto Condensed
<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,700italic,300italic,400italic' rel='stylesheet' type='text/css'>
```

###### Options:
- **type**: string from the list explained below
- **badge**: for `data-badge` option with a maximum lenght of 3 chars

```js
import {Text} from 'essence-core';

{/* type: a, p, label, strong, small, caption, h1, h2, h3, h4, h5, h6, sup, sub, em */}
<Text type={a} href={'http://getessence.io'} target={'_blank'}> Discover Essence <Text/>

{/* position: e-text-left, e-text-right, e-text-center, e-text-justify, e-text-uppercase, e-text-capitalize, e-text-lowercase */}
<Text type={'span'} classes={'e-text-right e-headline'}>Text Typography Example</Text>

{/* typography classes: e-display-4, e-display-3, e-display-2, e-display-1, e-headline, e-title, e-subhead, e-body2, e-body1, e-caption, e-button */}
<Text type={'span'} classes={'e-text-center e-headline'}>Text Typography Example</Text>

{/* text data-badge */}
<Text badge={'3'}>Text with Badge</Text>
```

##### 5. UTILITIES
&nbsp;
```js
import {Utils} from 'essence-core';

let boundingClient = this.refs.yourElement.getBoundingClientRect();
let position = Utils.ClickPosition(event, boundingClient);
let color = Utils.BackgroundColor(event);
let isMobile = Utils.Client.isMobile();
let screenSize = Utils.Client.screenSize();
let documentSize = Utils.Client.documentSize();

this.timer = new Utils.Timer(
  function() {
   // your callback function
  },
  2000 // miliseconds
);

pauseTimer() {
 if (this.timer) {
  this.timer.pause();
 }
}

resumeTimer() {
 if (this.timer) {
  this.timer.resume();
 }
}
```

