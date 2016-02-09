import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

import Tab from 'essence-tab';
import Btn from 'essence-button';
import Switch from 'essence-switch';
import {Block, Text, Divider, Utils} from 'essence-core';
import {Card, CardHeader, CardContent, CardFooter} from 'essence-card';

class AppButton extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	buttonType: 'primary',
        	buttonColor: 'raised',
        	buttonRipple: false,
        	buttonDisabled: false,
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    changeButton(options) {
    	this.setState({
    		buttonType: options.type || this.state.buttonType,
        	buttonColor: options.color || this.state.buttonColor,
        	buttonRipple: options.ripple ? true : false,
        	buttonDisabled: options.disabled ? true : false
    	});
    }

    renderRaised() {
		let raisedList = [
			(<Btn 
				key={'button-raised-default'}
				onClick={this.changeButton.bind(this, {type: 'default', color: 'raised'} )}
				ripple={false}
				className={'raised'}
				label={'DEFAULT'}
				type={'default'} />),
			(<Btn 
				key={'button-raised-primary'}
				onClick={this.changeButton.bind(this, {type: 'primary', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'PRIMARY'}
				type={'primary'} />),
			(<Btn 
				key={'button-raised-succes'}
				onClick={this.changeButton.bind(this, {type: 'succes', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'SUCCESS'}
				type={'succes'} />),
			(<Btn 
				key={'button-raised-info'}
				onClick={this.changeButton.bind(this, {type: 'info', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'INFO'}
				type={'info'} />),
			(<Btn 
				key={'button-raised-warning'}
				onClick={this.changeButton.bind(this, {type: 'warning', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'WARNING'}
				type={'warning'} />),
			(<Btn 
				key={'button-raised-danger'}
				onClick={this.changeButton.bind(this, {type: 'danger', color: 'raised'} )}
				ripple={false}
				className={'raised'} 
				label={'DANGER'}
				type={'danger'} />)
		];

		return raisedList;
    }

    renderFlat() {
		let flatList = [
			(<Btn 
				key={'button-flat-default'}
				onClick={this.changeButton.bind(this, {type: 'default', color: 'flat'} )}
				ripple={false}
				className={'flat'}
				label={'DEFAULT'}
				type={'default'} />),
			(<Btn 
				key={'button-flat-primary'}
				onClick={this.changeButton.bind(this, {type: 'primary', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'PRIMARY'}
				type={'primary'} />),
			(<Btn 
				key={'button-flat-succes'}
				onClick={this.changeButton.bind(this, {type: 'succes', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'SUCCESS'}
				type={'succes'} />),
			(<Btn 
				key={'button-flat-info'}
				onClick={this.changeButton.bind(this, {type: 'info', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'INFO'}
				type={'info'} />),
			(<Btn 
				key={'button-flat-warning'}
				onClick={this.changeButton.bind(this, {type: 'warning', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'WARNING'}
				type={'warning'} />),
			(<Btn 
				key={'button-flat-danger'}
				onClick={this.changeButton.bind(this, {type: 'danger', color: 'flat'} )}
				ripple={false}
				className={'flat'} 
				label={'DANGER'}
				type={'danger'} />)
		];

		return flatList;
    }

    renderFab() {
		let fabList = [
			(<Btn 
				key={'button-fab'}
				ripple={false}
				label={'FAB'}
				type={'fab'}
				className={'fab e-text-white'} />),
			(<Btn 
				key={'button-fab-mini'}
				ripple={false}
				label={'MINI'}
				type={'fab'}
				className={'fab-mini e-text-white'} />)
		];

		return fabList;
    }

    renderOptions(self) {

		let optionsList = [
			(
				<Block key={'options-ripple'}
					className={'e-padding-top-25'}>
					<Text type={'p'}>Switch ON or OFF the option for <strong>Ripple Effect</strong></Text>
					<Switch 
						type={'switches'} 
						afterText={'ON'} 
						beforeText={'OFF'} 
						name={'switch-ripple'} 
						onClick={this.changeButton.bind(this, {ripple: !self.state.buttonRipple} )}/>
				</Block>
			),
			(
				<Block key={'options-disable'}
					className={'e-padding-top-25 e-padding-bottom-25'}>
					<Text type={'p'}>Switch ON or OFF the option for <strong>Disabled</strong> option</Text>
					<Switch 
						type={'switches'} 
						afterText={'ON'} 
						beforeText={'OFF'} 
						name={'switch-disable'}
						onClick={this.changeButton.bind(this, {disabled: !self.state.buttonDisabled} )}/>
				</Block>
			)
		];

		return optionsList;
    }

    render() {
        return (
			<Block classes={ClassNames('e-container e-padding-top-25', this.state.classes)}>
				<Block classes={'brick brick-12'}>
		        	<Card>
		        		<CardHeader> 
		        			<Text type={'h3'} classes={'e-text-indigo-400'}>BUTTONS</Text>
		        			<Divider classes={'thick short e-background-indigo-400'} />
		        		</CardHeader>
		        		<CardContent>

			        		<Block classes={'e-text-center'}>
		        				<Block className={ClassNames('e-padding-bottom-25')}>
									<Btn
										type={this.state.buttonType}
										ripple={this.state.buttonRipple === true ? true : false}
										label={'Button Example'}
										isDisabled={this.state.buttonDisabled === true ? true : false}
										className={ClassNames(this.state.buttonColor)} />
								</Block>
		        			</Block>
			        		<Divider />
			        		
			        		<Block className={'e-padding-top-25 e-padding-bottom-25'}>
								<Text type={'h4'} classes={'e-text-indigo-400'}>CHOOSE BUTTON TYPE</Text>
								<Divider classes={'thick short e-background-indigo-400'} />

			        			<Tab data={{
									'header': [{
											'context': (<Text>Raised</Text>)
										},{
											'context': (<Text>Flat</Text>)
										},{
											'context': (<Text>Fab</Text>)
										},{
											'context': (<Text>Options</Text>)
										}
									],
									'rows': [ 
										(
											<Block className={'e-text-center'}>
												{this.renderRaised()}
											</Block>
										),
										(
											<Block className={'e-text-center'}>
												{this.renderFlat()}
											</Block>
										),
										(
											<Block className={'e-text-center'}>
												{this.renderFab()}
											</Block>
										),
										(
											<Block className={'e-text-center'}>
												<Block className={'e-padding-top-25'}>
													<Text type={'p'}>Switch ON or OFF the option for <strong>Ripple Effect</strong></Text>
													<Switch 
														type={'switches'} 
														afterText={'ON'} 
														beforeText={'OFF'} 
														name={'switch-ripple'} 
														onClick={this.changeButton.bind(this, {ripple: !this.state.buttonRipple} )}/>
												</Block>
												<Block className={'e-padding-top-25 e-padding-bottom-25'}>
													<Text type={'p'}>Switch ON or OFF the option for <strong>Disabled</strong> option</Text>
													<Switch 
														type={'switches'} 
														afterText={'ON'} 
														beforeText={'OFF'} 
														name={'switch-disable'}
														onClick={this.changeButton.bind(this, {disabled: !this.state.buttonDisabled} )}/>
												</Block>
											</Block>
										)
									]
								}}
								classes={'e-background-indigo-400 e-text-grey-50'} />
			        		</Block>
		        			
		        			<Block className={'e-padding-top-25'}>
		        				<Text type={'h4'} classes={'e-text-indigo-400'}>HOW TO USE:</Text>
		        				<Divider classes={'thick short e-background-indigo-400'} />

		        				<pre className={'e-background-grey-100 e-text-black'}>
			        				<code>
										import Btn from 'essence-button';
										<br />
										<br />
										&lt;Btn
										label=&#123;'Button Example'&#125; 
										ripple=&#123;{this.state.buttonRipple.toString()}&#125; 
										type=&#123;'{this.state.buttonType}'&#125; 
										className=&#123;'{ClassNames(this.state.buttonColor)}'&#125; /&gt; 
			        				</code>
		        				</pre>
		        			</Block>
		        		</CardContent>
					</Card>
				</Block>
			</Block>
		);
    }
}

exports.AppButton = AppButton;