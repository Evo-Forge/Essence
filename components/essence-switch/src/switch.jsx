import React from 'react';
import ClassNames from 'classnames';
import './switch.less'; // require('!css!less!./switch.less');

class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
      onChange: this.props.onChange,
      checked: false,
      classes: ClassNames(
        this.props.className,
        this.props.classes
      )
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      classes: ClassNames(
        nextProps.className,
        nextProps.classes
      ),
      type: nextProps.type,
      checked: nextProps.checked || false,
      onChange: nextProps.onChange
    });
  }

  onChange(event) {
    this.setState({
      checked: event.target.checked
    });

    if (this.state.onChange) {
      return this.state.onChange();
    }
  }

  renderSwitch() {
    let switchType = this.state.type,
      switchProps = Object.assign(this.props, {});
    if (switchProps.checked) delete switchProps.checked;
    switch (switchType) {
      case 'switches':
        return (
          <span className={ClassNames('e-switches', this.state.classes)}>
              <label>
                {this.props.beforeText}
                <input
                  {...switchProps}
                  type={'checkbox'}
                  checked={this.state.checked}
                  onChange={this.onChange.bind(this)}
                />
                <span className={'e-switches-toggle'}/>
                {this.props.afterText}
              </label>
          </span>
        );
        break;
      case 'radio':
        return (
          <span className={ClassNames('e-radio', 'e-radio-success', this.state.classes)}>
              <label>
                <input
                  {...switchProps}
                  type={'radio'}
                  checked={this.state.checked}
                  onChange={this.onChange.bind(this)}
                />
                <span className={'absolute circle'}/>
                <span className={'absolute e-check'}/>
                {this.props.text}
              </label>
          </span>
        );
        break;
      case 'checkbox':
      default:
        return (
          <span className={ClassNames('e-checkbox', this.state.classes)}>
              <label>
                <input
                  {...switchProps}
                  type={'checkbox'}
                  className={'toggle'}
                  checked={this.state.checked}
                  onChange={this.onChange.bind(this)}
                />
                <span className={'absolute e-wave'}/>
                <span className={'absolute e-check-valid'}/>
                {this.props.text}
              </label>
          </span>
        );
        break;
    }
  }

  render() {
    return (
      <span className={'e-switch'}>
          {this.renderSwitch()}
      </span>
    );
  }
}

module.exports = Switch;