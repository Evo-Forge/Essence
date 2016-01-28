import React from 'react';
import ClassNames from 'classnames';
import './tab.less'; // require('!css!less!./tab.less');
 
class Tab extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        	classes: ClassNames(
                this.props.classes,
                this.props.className
            ),
        };
    }

    selectTab(callback, index) {
        this.setState({
            selected: index
        });

        if (callback) {
            return callback();
        }
    }

    renderIndicator() {
        return (
           <div className={ClassNames('indicator', this.props.indicator)} /> 
        );
    }

    renderHeader() {
        let self = this,
            headers = this.props.data.header;

        let content = headers.map(function (item, key) {
                let active = self.state.selected === key ? 'active' : '',
                    indicator = self.state.selected === key ? (self.renderIndicator()) : null;

                return (
                    <li 
                        onClick={self.selectTab.bind(self, item.callback, key)}
                        onTouch={self.selectTab.bind(self, item.callback, key)}
                        key={'tab-'+key}
                        className={active}>
                        <a href={'#row-' + key}>
                            {item.context}
                        </a>
                        {indicator}
                    </li>
                )
            });

        return (
            <nav className={ClassNames('e-tabs scrollable', this.state.classes)}>
                <ul className={'e-tabs-list e-row'}>
                    {content}
                </ul>
            </nav>
        );
    }

    renderRows() {
        let self = this;
        let rows = this.props.data.rows;
        let content = React.Children.map(rows, function (item, key) {
            let active = self.state.selected === key ? ' active' : '';
            return (
                <div 
                    key={'row-'+key}
                    className={'e-card e-shadow-1 e-tab-content' + active}>
                    {item}
                </div>
            )
        });

        return (
            <div className={'e-tabs-container'}>
                {content}
            </div>
        );
    }

	render() {
		return (
            <div>
                {this.renderHeader()}
                {this.renderRows()}
            </div>
        );
	}
}

export default Tab;