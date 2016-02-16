# Essence Core - Essence components

#### Components:
##### 1. GRID SYSTEM
&nbsp;
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
&nbsp;
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
&nbsp;
```js
import {Utils, RippleInk} from 'essence-core';

let boundingClient = this.currentButton.getBoundingClientRect();
let color = Utils.BackgroundColor(event);
let position = Utils.ClickPosition(event, boundingClient);

<RippleInk color={color} position={position}/>
```

##### 4. TEXT TYPOGRAPHY
&nbsp;
```js
import {Text} from 'essence-core';

{/* type: a, p, label, strong, small, caption, h1, h2, h3, h4, h5, h6, sup, sub, em */}
<Text type={a} href={'http://essence.pearlhq.com'} target={'_blank'}> Discover Essence <Text/>

{/* position: e-text-left, e-text-right, e-text-center, e-text-justify, e-text-uppercase, e-text-capitalize, e-text-lowercase */}
<Text type={'span'} classes={'e-text-right e-headline'}>Text Typography Example</Text>

{/* typography classes: e-display-4, e-display-3, e-display-2, e-display-1, e-headline, e-title, e-subhead, e-body2, e-body1, e-caption, e-button */}
<Text type={'span'} classes={'e-text-center e-headline'}>Text Typography Example</Text>
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

