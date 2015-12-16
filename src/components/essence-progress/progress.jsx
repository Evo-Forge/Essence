import React from 'react';
import ClassNames from 'classnames';
import './progress.less';
 
class Progress extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
        	classes: ClassNames(
                this.props.className, 
                this.props.classes
            )
        };
    }

    renderProgress() {
    	let progressType = this.props.type;

    	switch (progressType) {
            case 'circle':
                let progressClasses = ClassNames("e-progress-circle", (this.props.small ? 'small' : ''));
                return (
                    <div className={progressClasses}>
                        <div className={"ball-frame ball-frame-1"}>
                            <div className={"round-ball"} />
                        </div>
                        <div className={"ball-frame ball-frame-2"}>
                            <div className={"round-ball"} />
                        </div>
                        <div className={"ball-frame ball-frame-3"}>
                            <div className={"round-ball"} />
                        </div>
                        <div className={"ball-frame ball-frame-4"}>
                            <div className={"round-ball"} />
                        </div>
                        <div className={"ball-frame ball-frame-5"}>
                            <div className={"round-ball"} />
                        </div>
                    </div>
                );
                break;
            case 'dots':
                return (
                    <div className={"e-progress-dots"}>
                        <div className={"e-progress-dot e-progress-dot-1"} />
                        <div className={"e-progress-dot e-progress-dot-2"} />
                        <div className={"e-progress-dot e-progress-dot-3"} />
                        <div className={"e-progress-dot e-progress-dot-4"} />
                        <div className={"e-progress-dot e-progress-dot-5"} />
                    </div>
                );
                break;
            case 'fix':
                return (
                    <div className={"e-progress-fix"}>
                        <div className={"e-progress-fix-slider"} />
                    </div>
                );
                break;
            case 'dynamic':
                return (
                    <div className={"e-progress-dynamic"}>
                        <div className={"e-progress-dynamic-slider"} />
                        <div className={"e-progress-dynamic-slider second-slider"} />
                    </div>
                );
                break;
    		case 'slider':
            default:
                return (
                    <div className={'e-progress-slider'}>
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

export default Progress;