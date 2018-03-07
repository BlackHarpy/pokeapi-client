import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {TYPES_COLORS} from '../constants'
const flatButtonStyle = {
  label: {
    color: 'white'
  }
}

function shadeColor2(color, percent) {   
  var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

export const TypeBox = ({name}) => (
  <FlatButton label={name} backgroundColor={TYPES_COLORS[name]}
  hoverColor={shadeColor2(TYPES_COLORS[name], -0.3)}
  labelStyle={flatButtonStyle.label}/>
);
