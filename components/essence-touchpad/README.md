# Essence TouchPad - TouchPad component

#### Options:
- visible: `true` - show the touchpad or `false` (**default**) - hide the touchpad
- position: `list` - **top**: offset pixels & **left**: offset pixels

### How to use
```js
import TouchPad from 'essence-touchpad';

class TouchPadTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      position: {
      start: { top: 0, left: 0},
      end: { top: 0, left: 0},
      touchpad: { top: 0, left: 0}
      },
      classes: ClassNames(
        this.props.classes,
        this.props.className
      )
    };
  }

  getPosition(event) {
    var position = this.state.position,
        mousePosition = this.mousePosition(event);

    position.start = {left: mousePosition.left, top: mousePosition.top };
    position.touchpad = {
      top: position.start.top,
      left: position.start.left
    };

    this.setState({
      position: position
    });
  }

  mousePosition(event) {
    var e = event || window.event,
      pageX = e.pageX,
      pageY = e.pageY;

    if (pageX === undefined) { // IE 8
      pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return { left: pageX, top: pageY };
  }

  selectedText(event) {
    var selectedText = window.getSelection().toString();

    this.getPosition(event);
    this.setState({
      visible: selectedText.length > 0 ? true : false
    });
  }

  render() {
    return (
      <Block>
        <Text
          className={'e-position-relative'}
          onMouseUp={this.selectedText.bind(this)}>
          <Text type={'p'}>
            Lorem ipsum dolor sit amet, duo ex malis putent possit, ea dicta vitae intellegat vel, et tamquam integre mei. Debet invidunt ius ei, ex omnesque efficiendi vis, eu elit paulo ullamcorper eam. Probatus explicari ius an, ei diceret noluisse nam, eam modo mandamus no. Vis in iudico percipitur efficiantur, sea ne maiestatis neglegentur. Assum nonumes ei pro. Sit hinc audiam meliore id, tale justo solet vim ex, quodsi molestie cu his.
            Usu eripuit principes voluptatum id, ea sint nostro vis, vel lobortis mnesarchum ex. Ne vix vide dicam delicatissimi, delenit abhorreant usu ut. Vel ne ubique mediocrem adolescens, vis sint possim omnesque id, soleat suscipiantur in eam. Paulo dolor periculis ius no, eum nisl doming corrumpit eu. Modus inermis fastidii vel ad, ei duo vocibus propriae senserit.
            Pri ut labitur debitis consequuntur, no facer lobortis mea. Democritum vituperatoribus eam ei. Ei his adipisci salutandi accommodare. Ex alia possim nam, pro ubique graeco ea. Duo molestie oporteat constituam ad, fabulas postulant corrumpit et eam.
          </Text>
          <Text type={'p'}>
            Eam sonet nihil singulis ex. Eum debet explicari voluptatum te. Vim sumo tritani ea, id agam brute vitae sed, eu labitur vituperatoribus has. Ad erant efficiendi mediocritatem cum, qui porro mucius ea, eu reque facer nec. Molestiae moderatius sit at, et qui veri apeirian. Ne per brute persecuti, ne alterum molestie sadipscing cum. Eu periculis omittantur qui, ei usu fabellas perfecto qualisque.
            Duo ei tale delectus theophrastus, urbanitas mnesarchum has et. Illum quando ex sed, posse perpetua elaboraret et ius. Atqui debet usu ea, no novum alterum eam, at sea dicant urbanitas. Duo nostrum accusata no.
          </Text>
        </Text>
        <TouchPad
          classes={'e-text-green-500'}
          visible={this.state.visible}
          position={this.state.position.touchpad}
          >
          <Btn type={'touchpad'} label={'copy'} icon={'content-content-copy'} className={'copy'} />
          <Btn type={'touchpad'} label={'paste'} icon={'content-content-paste'} className={'paste'} />
          <Btn type={'touchpad'} label={'redo'} icon={'content-redo'} className={'redo'} />
          <Btn type={'touchpad'} label={'bold'} icon={'editor-format-bold'} className={'bold'} />
          <Btn type={'touchpad'} label={'more'} icon={'navigation-more-vert'} className={'more'} />
          <Btn type={'touchpad'} label={'italic'} icon={'editor-format-italic'} className={'italic'} />
          <Btn type={'touchpad'} label={'undo'} icon={'content-undo'} className={'undo'} />
          <Btn type={'touchpad'} label={'cut'} icon={'content-content-cut'} className={'cut'} />
        </TouchPad>
      </Block>
    );
  }
}
```