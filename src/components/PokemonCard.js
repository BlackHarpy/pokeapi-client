import React from 'react';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {TypeBox} from './TypeBox'
import {StatsBox} from './StatsBox'

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
  }
}
export const PokemonCard = ({data}) => (
  <Card>
    <CardHeader
      title={`${data.id} - ${data.name}`}
      subtitle={data.genera}
      style={cardHeaderStyle.general}
      textStyle={cardHeaderStyle.text}
      titleStyle={cardHeaderStyle.title}
      subtitleStyle={cardHeaderStyle.subtitle}
    />
    <CardMedia mediaStyle={cardMediaStyle.general} style={cardMediaStyle.images}>
      <div>
       <img src={data.sprite.front} style={cardMediaStyle.img} />
      <img src={data.sprite.back} style={cardMediaStyle.img} /> 
      </div>
    </CardMedia>
    <CardText>
      HT : {(data.height / 10).toFixed(2)}m - WT : {(data.weight / 10).toFixed(1)}kg
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
