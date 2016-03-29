# Essence Steppers - Stepper component

#### Options:
- **steps**: default `{}` empty object, see the example bellow to customize
- **editable**: default `true` or `false`
- **type**: default `horizontal` or `vertical`
- **currentStep**: initial step `0`
- **onContinue**: default callback `null`
- **onBack**: default callback `null`
- **activeColor**: default color `e-background-indigo-400`, use a background color class to change the default active color
- **inactiveColor**: default color `e-background-grey-400`, use a background color class to change the default inactive color

### How to use
```js
import Stepper from 'essence-stepper';

const Steps = {
  'editable': [
    {
      'title': (<Text>Select campaign settings</Text>),
      'content': (<Text className={'e-caption'}>Campaign settings</Text>)
    },
    {
      'title': (<Text>Create an ad group</Text>),
      'optional': (<Text>Optional</Text>),
      'content': (<Text className={'e-caption'}>Ad group</Text>)
    },
    {
      'title': (<Text>Create an ad</Text>),
      'content': (<Text className={'e-caption'}>Ad details</Text>)
    }
  ],
  'non-editable': [
    {
      'title': (<Text>Select campaign settings</Text>),
      'content': (<Text className={'e-caption'}>Campaign settings</Text>)
    },
    {
      'title': (<Text>Create an ad group</Text>),
      'content': (<Text className={'e-caption'}>Ad group</Text>)
    },
    {
      'title': (<Text>Create an ad</Text>),
      'content': (<Text className={'e-caption'}>Ad details</Text>)
    },
    {
      'content': (<Text className={'e-caption'}>Summary</Text>)
    }
  ]
};
```

```js
<Stepper steps={Steps['editable']} />

<Stepper editable={false} steps={Steps['non-editable']} onContinue={this.continueStep.bind(this)} onBack={this.backStep.bind(this)} />

<Stepper type={'vertical'} editable={false} steps={Steps['non-editable']} onContinue={this.continueStep.bind(this)} onBack={this.backStep.bind(this)} />

```