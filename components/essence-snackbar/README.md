# Essence SnackBar - SnackBar component

Options:
- visible: `true` - show the snackbar & `false` (**default**) - hide the snackbar
- delay: `2000` (**default**) - miliseconds delay to hide

### How to use
```js
import SnackBar from 'essence-snackbar';

class SnackBarTest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	snackbar: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    renderSnackbar() {
    	if (this.state.snackbar) {
    		return (
    			<SnackBar classes={'e-text-green-500'} visible={true} delay={5000}>
					You've got a new message!
				</SnackBar>
			);
    	}

    	return;
    }

    toggleSnackBar() {
    	var snackbarStatus = !this.state.snackbar;

    	this.setState({
    		snackbar: snackbarStatus
    	});
    }

    render() {
        return(
			<Block>
				{this.renderSnackbar()}
				<Button onClick={this.toggleSnackBar.bind(this)} className={'flat e-background-cyan-400 e-text-green'} type={'primary'} icon={'action-favorite'}/>
			</Block>
        );
    }
};
```