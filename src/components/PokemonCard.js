import React from 'react';
import {Card, CardActions, CardMedia, CardHeader, CardText} from 'material-ui/Card';
import {TypeBox} from './TypeBox'

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
    <CardActions style={cardActionsStyle.general}>
      {data.types.map(name =>  <TypeBox name={name} />)}
    </CardActions>
    <CardText style={cardTextStyle.general}>
      {data.flavorText}
    </CardText>
  </Card>
);
