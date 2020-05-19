import React from 'react';
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import IconRight from './IconRight';

export default {
    component: IconRight,
    title: 'IconRight',
    decorators: [withKnobs],
    excludeStories: /.*Data$/,
};

const label = 'Message Type';
const options = {
  Error: 'Error',
  Success: 'Success',
  Link: 'Link',
};
const defaultValue = 'Error';

export const iconRightData = {
    id: 'iconRight',
    type: 'text',
    placeholder: 'Placeholder',
    label: 'Label',
    disabled: false,
    value: '',
    msgValue: '',
    msgType: '',
    focus: '',
    blur: '',
    changed: ''
}

export const Default = () => <IconRight config={{...iconRightData}} />

export const Filled = () => <IconRight config={{...iconRightData, value: text("Value", "Input Text")}} />

export const Disabled = () => <IconRight config={{...iconRightData, disabled: true}} />

export const Error = () => <IconRight config={{...iconRightData, msgValue: text("Message Value", "-Message Details-"), msgType: radios(label, options, defaultValue)}} />

