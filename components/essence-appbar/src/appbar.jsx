import React from 'react';
import ClassNames from 'classnames';
import {Utils} from 'essence-core';
import './appbar.less'; // require('!css!less!./appbar.less');
 
class AppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                'e-appbar clearfix',
                this.props.className,
                this.props.classes
            )
        };
    }

    componentDidMount() {
        let body = document.querySelector('body');
        let documentSize = Utils.Client.documentSize();

        switch(documentSize){
            case 1:
                body.style.marginTop = '48px';
                break;
            case 2:
                body.style.marginTop = '56px';
                break;
            case 3:
            default:
                body.style.marginTop = '64px';
                break;
        }
    }

	render() {
		return (
            <div 
                {...this.props} 
                className={this.state.classes}>
                {this.props.children}
            </div>
        );
	}
}

module.exports = AppBar;