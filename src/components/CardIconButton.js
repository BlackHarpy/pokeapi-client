import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

export const CardIconButton = ({link}) => (
  <IconButton iconStyle={{width: 45, height: 45, minWidth: 45, marginRight: 20 }} 
  tooltip="Bulbapedia Article" 
  tooltipPosition="top-right"
  href={link}
  target="_blank">
    <img src="./public/assets/60px-Bulbapedia_bulb.png" style={{width: 40, height: 40 }}/>
  </IconButton> 
);
