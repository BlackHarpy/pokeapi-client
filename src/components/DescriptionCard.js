import React from 'react';
import {Card, CardMedia, CardHeader, CardText} from 'material-ui/Card';

const missingNoImage = 'https://vignette.wikia.nocookie.net/kirby--fanon/images/2/26/Missingno._sprite.png/revision/latest?cb=20130426122730&path-prefix=es';

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

const cardTextStyle = {
  general: {
    fontSize: 18
  }
}
export const DescriptionCard = ({title, imageUrl, text}) => (
  <Card>
    <CardHeader
      title={title}
      style={cardHeaderStyle.general}
      textStyle={cardHeaderStyle.text}
      titleStyle={cardHeaderStyle.title}
    />
    <CardMedia mediaStyle={cardMediaStyle.general} style={cardMediaStyle.images}>
      <div>
       <img src={imageUrl} style={cardMediaStyle.img} />
      </div>
    </CardMedia>
    <CardText style={cardTextStyle.general}>
    {text}
    </CardText>
  </Card>
);
