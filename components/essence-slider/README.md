# Essence Slider - Slider component

#### Options:
- `start`: integer value to set the initial value - values: **0** to **100**
- `fill`: return a colored track to indicate the current value position
- `discrete`: **true** it uses the `discrete` class name to render a indicator for the current value
- `disabled`: **true** it uses the `disabled` class name to render a non-editable component
- `onChange`: **callback function** returns current value of slider
- `lowerColor`: default **e-background-indigo-400** or a background color for left side of slider
- `upperColor`: default **e-background-grey-100** or a background color for right side of slider

### How to use
```js
import Slider from 'essence-slider';

<Slider step={1} fill={false} />
<Slider step={10} start={10}/>
<Slider discrete={true} step={1} start={20}/>
<Slider discrete={true} step={10} start={30}/>
<Slider discrete={true} step={10} start={40} disable={true}/>
```