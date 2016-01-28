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

    selectTab(index) {
        this.setState({
            selected: index
        });
    }

    renderHeader() {
        let self = this;
        let headers = this.props.data.header;
        let content = React.Children.map(headers, function (item, key) {
            let active = self.state.selected === key ? (self.state.selected != key)'active' : '';
            return (
                <li 
                    onClick={self.selectTab.bind(self, key)}
                    onTouch={self.selectTab.bind(self, key)}
                    key={'tab-'+key}
                    className={active}>
                    {item}
                </li>
            )
        });

        return (
            <nav className={'e-tabs e-background-cyan-500 e-text-grey-50'}>
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
            <div {...this.props} className={this.state.classes}>
                {this.renderHeader()}
                {this.renderRows()}
            </div>
        );
	}
}

export default Tab;