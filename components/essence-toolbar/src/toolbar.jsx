import React from 'react';
import ClassNames from 'classnames';
import {Utils} from 'essence-core';
import './toolbar.less';

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: ClassNames(
                'e-toolbar',
                {'bottom': props.bottom},
                {'no-shadow': props.noShadow},
                {'floating': props.floating},
                props.className,
                props.classes
            )
        };
    }

	render() {
		return (
            <div className='e-toolbar-container'>
                <div {...this.props} className={this.state.classes}>
                    {this.props.children}
                </div>
            </div>
        );
	}
}

ToolBar.defaultProps = {
    bottom: false,
    noShadow: false,
    floating: false
};

module.exports = ToolBar;