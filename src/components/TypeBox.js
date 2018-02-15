import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {TYPES_COLORS} from '../constants'
const flatButtonStyle = {
  label: {
    color: 'white'
  }
}
export const TypeBox = ({name}) => (
  <FlatButton label={name} backgroundColor={TYPES_COLORS[name]}
  labelStyle={flatButtonStyle.label}/>
);
