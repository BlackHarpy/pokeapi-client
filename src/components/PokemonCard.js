import React from 'react';
import { connect } from 'react-redux'

import { showBulbapediaSection } from '../actions'


import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {TypeBox} from './TypeBox'
import {StatsBox} from './StatsBox'
import {CardIconButton} from './CardIconButton'


const cardHeaderStyle = {
  general: {
    textAlign: 'center',
  },
  text: {
    padding: 0
  },
  title: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 20
  }
}
const cardMediaStyle = {
  general: {
    display: 'flex',
    justifyContent: 'center'
  },
  images: {
    display: 'inline',
    textAlign: 'center'
  },
  img: {
    width: 150
  }
}

const cardActionsStyle = {
  general: {
    textAlign: 'center'
  }
}

const cardTextStyle = {
  general: {
    fontSize: 18
  },
  size: {
    fontSize: 15,    
    color: '#9e9e9e'
  }
}

function mapStateToProps(state) {
  return {
  }
}


function mapDispatchToProps(dispatch) {
  return {
    showBulbapediaSection: () => {
      dispatch(showBulbapediaSection())
    }
  }
}

function buildCardIconButton(link, usingElectron, showBulbapediaSection) {
  const buttonConfig = {
    width: 40,
    height: 40,
    tooltipText: 'Bulbapedia Article',
    imageSrc: './public/assets/60px-Bulbapedia_bulb.png'
  }
  return (
    <CardIconButton 
    link={link} 
    buttonConfig={buttonConfig}
    electronConfig={usingElectron ? { onClick: showBulbapediaSection } : undefined}
    />
  )

}

const Container = ({data, usingElectron, showBulbapediaSection}) => (
  <Card>
    <CardHeader
      title={`${data.id} - ${data.name}`}
      subtitle={data.genera}
      style={cardHeaderStyle.general}
      textStyle={cardHeaderStyle.text}
      titleStyle={cardHeaderStyle.title}
      subtitleStyle={cardHeaderStyle.subtitle}
    > 
    <div style={{ float: 'right' }}>
    { buildCardIconButton(data.bulbapediaArticle, usingElectron, showBulbapediaSection) }
    </div>
    </CardHeader>
    <CardMedia mediaStyle={cardMediaStyle.general} style={cardMediaStyle.images}>
      <div>
       <img src={data.sprite.front} style={cardMediaStyle.img} />
      <img src={data.sprite.back} style={cardMediaStyle.img} /> 
      </div>
    </CardMedia>
    <CardText style={cardTextStyle.size}>
      HT : {(data.height / 10).toFixed(1)}m - WT : {(data.weight / 10).toFixed(1)}kg
    </CardText>
    <CardActions style={cardActionsStyle.general}>
      {data.types.map((name,i) =>  <TypeBox key={i} name={name} />)}
    </CardActions>
    <CardText style={cardTextStyle.general}>
      {data.flavorText}
    </CardText>
    <Divider />    
    <StatsBox stats={data.stats} />  
  </Card>
);

export const PokemonCard = connect(mapStateToProps, mapDispatchToProps)(Container);

