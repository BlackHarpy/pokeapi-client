/*jshint esversion: 6 */

import React from 'react';
import {Card, CardMedia, CardTitle, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PokemonCard = React.createClass({

    render: function() {
        return (
            <Card>
                <CardMedia>
                    <img src="images/nature-600-337.jpg"/>
                </CardMedia>
                <CardTitle title="001 Bulbasaur" subtitle="Card subtitle"/>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        );
    }
});

export default PokemonCard;
