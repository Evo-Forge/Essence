# Essence Toast - Toast component

#### Options:
- visible: `true` - show the toast & `false` (**default**) - hide the toast
- delay: `2000` (**default**) - miliseconds delay to hide
- onStart: callback function when Toast component has **visible** toggle to `true`
- onEnd: callback function when Toast component has **visible** toggle to `false`
- onPause: callback function when Toast component has an active `mouseOver` event
- onResume: callback function when Toast component has an active `mouseOout` event

### How to use
```js
import Toast from 'essence-toast';

class SnackBarTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toast: false,
      classes: ClassNames(
        this.props.classes,
        this.props.className
      )
    };
  }

  renderToast() {
    if (this.state.toast) {
      return (
        <Toast classes={'e-text-green-500'} visible={true} delay={5000}>
          You've got a new message!
        </Toast>
      );
    }

    return;
  }

  toggleToast() {
    var toastStatus = !this.state.toast;

    this.setState({
      toast: toastStatus
    });
  }

  render() {
    return(
      <Block>
        {this.renderToast()}
        <Button onClick={this.toggleToast.bind(this)} className={'flat e-background-cyan-400 e-text-green'} type={'primary'} icon={'action-favorite'}/>
      </Block>
    );
  }
};
```