# Essence Steppers - Stepper component

#### Options:
- **steps**: default `{}` empty object, see the example bellow to customize 
- **items**: default `{}` empty object, see the example bellow to customize 
- **editable**: default `true` or `false`
- **currentStep**: initial step `0`
- **onContinue**: default callback `null`
- **onBack**: default callback `null`

### How to use
```js
import Stepper from 'essence-stepper';

const Editable = {
 'steps': [
   { 'title': (<Text>Select campaign settings</Text>) },
   { 'title': (<Text>Create an ad group</Text>), 'optional': (<Text>Optional</Text>) },
   { 'title': (<Text>Create an ad</Text>) }
 ],
 'items': [ 
   { 'item': (<Text className={'e-caption'}>Campaign settings</Text>) },
   { 'item': (<Text className={'e-caption'}>Ad group</Text>) },
   { 'item': (<Text className={'e-caption'}>Ad details</Text>) }
 ]
};

const NonEditable = {
 'steps': [
   { 'title': (<Text>Select campaign settings</Text>) },
   { 'title': (<Text>Create an ad group</Text>) },
   { 'title': (<Text>Create an ad</Text>) }
 ],
 'items': [ 
   { 'item': (<Text className={'e-caption'}>Campaign settings</Text>) },
   { 'item': (<Text className={'e-caption'}>Ad group</Text>) },
   { 'item': (<Text className={'e-caption'}>Ad details</Text>) }
 ]
};
```

```js
<Stepper steps={Editable.steps} items={Editable.items} />

<Stepper editable={false} steps={NonEditable.steps} items={NonEditable.items}  onContinue={callbackOnContinue(currentStep)} onBack={callbackOnBack(currentStep)} />

```