import React from 'react';
import ClassNames from 'classnames';
import './progress.less'; // require('!css!less!./progress.less');
 
class Progress extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'e-background-indigo-400',
        	classes: ClassNames(
                this.props.className, 
                this.props.classes
            )
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            color: nextProps.color || 'e-background-indigo-400',
            classes: ClassNames(
                nextProps.className, 
                nextProps.classes
            )
        });
    }

    renderProgress() {
    	let progressType = this.props.type;

    	switch (progressType) {
            case 'circle':
                let progressClasses = ClassNames('e-progress-circle', (this.props.small ? 'small' : ''));
                return (
                    <div className={progressClasses}>
                        <div className={'ball-frame ball-frame-1'}>
                            <div className={ClassNames('round-ball', this.state.color)} />
                        </div>
                        <div className={'ball-frame ball-frame-2'}>
                            <div className={ClassNames('round-ball', this.state.color)} />
                        </div>
                        <div className={'ball-frame ball-frame-3'}>
                            <div className={ClassNames('round-ball', this.state.color)} />
                        </div>
                        <div className={'ball-frame ball-frame-4'}>
                            <div className={ClassNames('round-ball', this.state.color)} />
                        </div>
                        <div className={'ball-frame ball-frame-5'}>
                            <div className={ClassNames('round-ball', this.state.color)} />
                        </div>
                    </div>
                );
                break;
            case 'dots':
                return (
                    <div className={'e-progress-dots'}>
                        <div className={ClassNames('e-progress-dot e-progress-dot-1', this.state.color)} />
                        <div className={ClassNames('e-progress-dot e-progress-dot-2', this.state.color)} />
                        <div className={ClassNames('e-progress-dot e-progress-dot-3', this.state.color)} />
                        <div className={ClassNames('e-progress-dot e-progress-dot-4', this.state.color)} />
                        <div className={ClassNames('e-progress-dot e-progress-dot-5', this.state.color)} />
                    </div>
                );
                break;
            case 'fix':
                return (
                    <div className={'e-progress-fix'}>
                        <div className={'e-progress-fix-slider'} />
                    </div>
                );
                break;
            case 'dynamic':
                return (
                    <div className={'e-progress-dynamic'}>
                        <div className={'e-progress-dynamic-slider'} />
                        <div className={'e-progress-dynamic-slider second-slider'} />
                    </div>
                );
                break;
    		case 'slider':
            default:
                return (
                    <div className={ClassNames('e-progress-slider', this.state.color)}>
                        <div className={'e-progress-slider-line'} />
                        <div className={'break dot1'} />
                        <div className={'break dot2'} />
                        <div className={'break dot3'} />
                    </div>
                );
    			break;
    	}
	}

	render() {
		return this.renderProgress();
	}
}

module.exports = Progress;