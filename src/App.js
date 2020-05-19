import React, { Component } from 'react';
import SimpleCombined from './components/Combined/Simple/SimpleCombined';
import IconLeft from './components/Combined/IconLeft/IconLeft';
import IconRight from './components/Combined/IconRight/IconRight';
import Dropdown from './components/Combined/Dropdown/Dropdown';

class App extends Component {

  state = {
    formContent: {
      // simple: {
      //   inputType: 'text',
      //   elementType: 'input',
      //   disabled: false,
      //   focused: false,
      //   placeholder: 'Placeholder',
      //   label: 'Label',
      //   value: '',
      //   msgValue: '',
      //   msgType: '',
      // },
      dropdown: {
        inputType: 'select',
        elementType: 'select',
        disabled: false,
        focused: false,
        placeholder: 'Placeholder',
        label: 'Label',
        value: '',
        msgValue: '',
        msgType: '',
        engaged: false,
        options: [
          {value: 'value 1', label: 'Value 1'},
          {value: 'value 2', label: 'Value 2'},
          {value: 'value 3', label: 'Value 3'},
          {value: 'value 4', label: 'Value 4'}
        ]
      },
      // iconLeft: {
      //   inputType: 'text',
      //   elementType: 'iconLeft',
      //   disabled: false,
      //   focused: false,
      //   placeholder: 'Placeholder',
      //   label: 'Label',
      //   value: '',
      //   msgValue: '',
      //   msgType: 'Success'
      // }
    }
  }

  onClickHandler = (event, inputId) => {
    const updatedFormContent = {...this.state.formContent};
    const updatedFormElement = {...updatedFormContent[inputId]};
    updatedFormElement.engaged = !updatedFormElement.engaged;
    updatedFormContent[inputId] = updatedFormElement;
    this.setState({formContent: updatedFormContent});
  }

  inputChangedHandler = (event, inputId) => {
    const updatedFormContent = {...this.state.formContent};
    const updatedFormElement = {...updatedFormContent[inputId]};
    updatedFormElement.value = event.target.value;
    updatedFormContent[inputId] = updatedFormElement;
    this.setState({formContent: updatedFormContent});
  }

  dropdownChangedHandler = (val, inputId) => {
    const updatedFormContent = {...this.state.formContent};
    const updatedFormElement = {...updatedFormContent[inputId]};
    updatedFormElement.value = val;
    updatedFormContent[inputId] = updatedFormElement;
    this.setState({formContent: updatedFormContent});
  }

  focusHandler = (inputId) => {
    const updatedFormContent = {...this.state.formContent};
    const updatedFormElement = {...updatedFormContent[inputId]};
    updatedFormElement.focused = !updatedFormElement.focused;
    updatedFormContent[inputId] = updatedFormElement;
    this.setState({formContent: updatedFormContent});
  }

  render() {

    const formElementsArray = [];
    for (let key in this.state.formContent) {
      formElementsArray.push({
        id: key,
        config: this.state.formContent[key]
      });
    }

    let form = (
      <div>
        {formElementsArray.map(formElement => (
          // <SimpleCombined 
          //   key={formElement.id}
          //   id={formElement.id}
          //   elementType={formElement.config.elementType}
          //   type={formElement.config.inputType} 
          //   label={formElement.config.label} 
          //   placeholder={formElement.config.placeholder}
          //   value={formElement.config.value} 
          //   msgValue={formElement.config.msgValue}
          //   msgType={formElement.config.msgType}
          //   disabled={formElement.config.disabled}
          //   focused={formElement.config.focused}
          //   changed={(event) => this.inputChangedHandler(event, formElement.id)}
          //   focus={(inputId) => this.focusHandler(formElement.id)}
          //   blur={(inputId) => this.focusHandler(formElement.id)}
          // />
          // <IconLeft 
          //   key={formElement.id}
          //   id={formElement.id}
          //   elementType={formElement.config.elementType}
          //   type={formElement.config.inputType} 
          //   label={formElement.config.label} 
          //   placeholder={formElement.config.placeholder}
          //   value={formElement.config.value} 
          //   msgValue={formElement.config.msgValue}
          //   msgType={formElement.config.msgType}
          //   disabled={formElement.config.disabled}
          //   focused={formElement.config.focused}
          //   changed={(event) => this.inputChangedHandler(event, formElement.id)}
          //   focus={(inputId) => this.focusHandler(formElement.id)}
          //   blur={(inputId) => this.focusHandler(formElement.id)}
          // />
          <Dropdown 
            key={formElement.id}
            id={formElement.id}
            elementType={formElement.config.elementType}
            type={formElement.config.inputType} 
            label={formElement.config.label} 
            placeholder={formElement.config.placeholder}
            value={formElement.config.value}
            options={[...formElement.config.options]} 
            msgValue={formElement.config.msgValue}  
            msgType={formElement.config.msgType}
            disabled={formElement.config.disabled}
            focused={formElement.config.focused}
            changed={(val) => this.dropdownChangedHandler(val, formElement.id)}
            focus={(inputId) => this.focusHandler(formElement.id)}
            blur={(inputId) => this.focusHandler(formElement.id)}
          />
        ))}
      </div>
    );

    return (
      <div>
        {form}
      </div>
    );
  }
}

export default App;
