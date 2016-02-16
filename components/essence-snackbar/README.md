# Essence SnackBar - SnackBar component

#### Options:
- visible: `true` - show the snackbar & `false` (**default**) - hide the snackbar
- delay: `2000` (**default**) - miliseconds delay to hide
- onStart: callback function when SnackBar component has **visible** toggle to `true`
- onEnd: callback function when SnackBar component has **visible** toggle to `false`
- onPause: callback function when SnackBar component has an active `mouseOver` event
- onResume: callback function when SnackBar component has an active `mouseOout` event

### How to use
```js
import SnackBar from 'essence-snackbar';

<SnackBar classes={'e-text-green-500'} visible={false} delay={5000}>
 You got a new message!
</SnackBar>
```