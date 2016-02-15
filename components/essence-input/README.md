# Essence Input - Input component

### How to use
```js
import Input from 'essence-input';

class TextfieldTest extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    render() {
        return(
        	<Block>
				<Input
					name='input'
					placeholder='Standard input'
					classes={'has-success'}/>
		        <Input
						name='input'
						placeholder='Counter input'
						classes={'has-error'}
						counter={50}/>	
				<Input
						name='input'
						label='This label will float'
						classes={'has-success'}/>	
				<Input
				    name='input'
				    disabled={true}
				    placeholder='Disabled input'
				    classes={'has-success'}
				/>					
		        
			</Block>
		);
    }
};
```