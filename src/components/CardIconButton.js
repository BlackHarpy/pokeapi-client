import React from 'react';
import IconButton from 'material-ui/IconButton';

function getWebIconButton (link, buttonConfig) {
  const iconStyle = {
    width: buttonConfig.width + 5, 
    height: buttonConfig.width + 5, 
    minWidth: buttonConfig.width + 8, 
    marginRight: 30,
    padding: 0
  }
  const imageStyle = {
    width: buttonConfig.width, 
    height: buttonConfig.height
  }
  return (
    <IconButton iconStyle={iconStyle} 
    tooltip={buttonConfig.tooltipText} 
    tooltipPosition="top-right"
    href={link}
    target="_blank"
    style={{ padding: 0 }}>
      <img src={buttonConfig.imageSrc} style={imageStyle}/>
    </IconButton>
  )
}

function getElectronIconButton (link, buttonConfig, electronConfig) {
  const iconStyle = {
    width: buttonConfig.width + 5, 
    height: buttonConfig.width + 5, 
    minWidth: buttonConfig.width, 
    marginRight: 20
  }
  const imageStyle = {
    width: buttonConfig.width, 
    height: buttonConfig.height 
  }

  return (
    <IconButton iconStyle={iconStyle} 
    tooltip={buttonConfig.tooltipText} 
    tooltipPosition="top-right"
    onClick={electronConfig.onClick}
    >
      <img src={buttonConfig.imageSrc} style={imageStyle}/>
    </IconButton>
  )
}

function getCardIconButton(link, buttonConfig, electronConfig) {
  if (electronConfig) {
    return getElectronIconButton(link, buttonConfig, electronConfig)
  }
  return getWebIconButton(link, buttonConfig)
}

export const CardIconButton = ({link, buttonConfig, electronConfig}) => (
  <div>
    { getCardIconButton(link, buttonConfig, electronConfig) }
  </div>
);
