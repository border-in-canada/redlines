import React from 'react';
import { withKnobs, text, radios } from "@storybook/addon-knobs";
import IconLeft from './IconLeft';

export default {
    component: IconLeft,
    title: 'IconLeft',
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

export const iconLeftData = {
    id: 'iconLeft',
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

export const Default = () => <IconLeft config={{...iconLeftData}} />

export const Filled = () => <IconLeft config={{...iconLeftData, value: text("Value", "Input Text")}} />

export const Disabled = () => <IconLeft config={{...iconLeftData, disabled: true}} />

export const Error = () => <IconLeft config={{...iconLeftData, msgValue: text("Message Value", "-Message Details-"), msgType: radios(label, options, defaultValue)}} />

