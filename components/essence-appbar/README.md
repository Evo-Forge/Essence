# Essence AppBar - AppBar component

### How to use
```js
import ClassNames from 'classnames';
import AppBar from 'essence-appbar';
import Input from 'essence-input';
import Menu from 'essence-menu';
import Toast from 'essence-toast';

class AppBarTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'close',
      toast: false,
      classes: ClassNames(
        this.props.classes,
        this.props.className
      )
    };
  }

  renderSearch() {
    let classes = ClassNames('e-no-margin e-text-white e-left', this.state.search);
    return (
      <Input
        type={'search'}
        name='search-input'
        placeholder='Search...'
        classes={classes}/>
    );
  }

  renderToast() {
    if (this.state.toast) {
      return (
        <Toast classes={'e-text-green-500'} visible={true} delay={5000}>
          Adaugat la Favorite
        </Toast>
      );
    }

    return;
  }

  toggleSearch() {
    this.setState({
      search: (this.state.search === 'close' ? 'open' : 'close')
    });
  }

  toggleToast() {
    var toastStatus = !this.state.toast;

    this.setState({
      toast: toastStatus
    });
  }

  render() {
    return(
      <AppBar classes={'e-background-cyan-400'}>
        <Button className={'flat e-background-cyan-400 e-text-white e-left'} type={'primary'} icon={'navigation-menu'}/>

        <Text className={'e-text-white'}>Essence - test</Text>

        <Menu type={'cover'} icon={'navigation-more-vert'} classes={'e-right e-text-white e-background-cyan-400'}>
          <Text classes={'e-text-black'}>Profile</Text>
          <Text classes={'e-text-black'}>Settings</Text>
          <Text classes={'e-text-black'}>Logout</Text>
        </Menu>

        <Block className={'e-right'}>
          {this.renderToast()}
          <Button onClick={this.toggleToast.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-favorite'}/>
        </Block>

        <Block className={'e-right search-block'}>
          {this.renderSearch()}
          <Button onClick={this.toggleSearch.bind(this)} className={'flat e-background-cyan-400 e-text-white e-right'} type={'primary'} icon={'action-search'}/>
        </Block>
      </AppBar>
    );
  }
};
```