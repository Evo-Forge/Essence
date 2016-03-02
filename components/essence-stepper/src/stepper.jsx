import React from 'react';
import ClassNames from 'classnames';
import './stepper.less';

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.currentStep,
            maxSteps: props.steps.length,
            currentStep: props.currentStep,
        	classes: ClassNames(
                props.classes,
                props.className
            ),
        };
    }

    selectStepper(callback, index) {
        if (this.props.editable) {
            this.setState({
                selected: index,
                currentStep: index
            });

            if (callback) {
                return callback();
            }
        }
    }

    continueStepper(callback) {
        let nextStep = this.state.currentStep+1;

        this.setState({
            selected: nextStep,
            currentStep: nextStep
        });

        if (callback) {
            return callback(nextStep);
        }
    }

    backStepper(callback) {
        let nextStep = this.state.currentStep-1;
        this.setState({
            selected: nextStep,
            currentStep: nextStep
        });

        if (callback) {
            return callback(nextStep);
        }
    }

    renderSteppers() {
        let self = this,
            stepsContent = null,
            steps = this.props.steps;

        if (steps.length > 0) {
            let stepsContent = steps.map(function (item, key) {
                return (
                    <li 
                        key={'stepper-'+key}
                        onClick={self.selectStepper.bind(self, item.callback, key)}
                        onTouch={self.selectStepper.bind(self, item.callback, key)}
                        className={ClassNames({progress: self.state.currentStep > key, active: self.state.selected === key})}>
                        <a>
                            <span className={'step'}>{self.state.currentStep > key ? <i className={'e-icon-action-done'} /> : (key + 1)}</span>
                            <span className={ClassNames('title', {'hasOptional': item.optional})}>
                            {item.title}
                            {item.optional ? (<div className={'optional'}>{item.optional}</div>) : null}
                            </span>
                            {(steps.length - 1) !== key ? <span className={'connector'} /> : null}
                        </a>
                    </li>
                )
            });
            
            return (
                <nav className={ClassNames('e-steppers', this.state.classes, {noneditable: !this.props.editable})}>
                    <ul className={'e-steppers-list e-no-padding'} ref={(ref) => this.stepperList = ref}>
                        {stepsContent}
                    </ul>
                </nav>
            );
        }

    }

    renderActions() {
        if (this.props.items.length > 0 || this.props.steps.length > 0) {
            return (
                <div className={'e-padding-top-10 clearfix'}>
                    {
                        this.props.onBack && this.state.currentStep > 0 ? 
                        (<button 
                            onClick={this.backStepper.bind(this, this.props.onBack)} 
                            onTouch={this.backStepper.bind(this, this.props.onBack)} 
                            className={'e-btn-default flat e-text-grey-400 e-left'} 
                            style={{backgroundColor: 'transparent'}}>BACK</button>)
                        : null
                    }
                    {
                        this.props.onContinue && this.state.currentStep < this.state.maxSteps ? 
                        (<button 
                            onClick={this.continueStepper.bind(this, this.props.onContinue)} 
                            onTouch={this.continueStepper.bind(this, this.props.onContinue)} 
                            className={'e-btn-default flat e-text-blue-500 e-right'} 
                            style={{backgroundColor: 'transparent'}}>CONTINUE</button>)
                        : null
                    }
                </div>
            )
        }
    }

    renderContent() {
        let self = this,
            itemsContent = null,
            items = this.props.items;

        if (items.length > 0) {
            itemsContent = items.map(function (step, key) {
                let active = (self.state.selected === key);
                return (
                    <div key={'stepper-content-'+key} className={ClassNames('e-stepper-content', {active: active})}>
                        {step.item}
                    </div>
                )
            });
        }

        return (
            <div className={ClassNames('e-steppers-container')}>
                {itemsContent}
                {this.renderActions()}
            </div>
        );
    }

	render() {
		return (
            <div>
                {this.renderSteppers()}
                {this.renderContent()}
            </div>
        );
	}
}

Stepper.defaultProps = {
    steps: {},
    items: {},
    editable: true,
    currentStep: 0,
    onContinue: null,
    onBack: null
};

module.exports = Stepper;