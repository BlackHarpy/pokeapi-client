/*jshint esversion: 6 */

import React from 'react';
import $ from 'jquery';

import Drawer from 'material-ui/Drawer';
import PokemonListItem from './PokemonListItem';
import MDSpinner from "react-md-spinner";


const PokemonList = React.createClass({
    componentDidMount: function () {
        this.getPokemonList('http://pokeapi.co/api/v2/pokemon/');
    },

    closeDrawer: function(url) {
        this.setState({open:false});
        this.props.selectUrl(url);
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({open:nextProps.open});
    },

    getInitialState: function() {
        return {open: false, pokemonList: [], next:''};
    },
    getPokemonList: function(url) {
        const event = this.closeDrawer;
        $.get(url, function(data) {
            let i = this.state.pokemonList.length;
            let page = data.results.map(function(record) {
                i++;
                return (<PokemonListItem  key={i} name={record.name} url={record.url} tapEvent={event}/>);
            })
            let output = this.state.pokemonList.concat(page);
            this.setState({pokemonList: output});
            this.setState({next: data.next});
        }.bind(this));
    },
    getNextPage: function(e) {
        $.get(this.state.next, function(data) {
            let i = this.state.pokemonList.length;
            let page = data.results.map(function(record, key) {
                i++;
                return (<PokemonListItem key={i} name={record.name} url={record.url} />);
            })
            let output = this.state.pokemonList.concat(page);
            this.setState({pokemonList: output});
            this.setState({next: data.next});
        }.bind(this));
    },
    addPokemons: function(e) {
        const scrollTop = e.nativeEvent.target.scrollTop;
        const max = e.nativeEvent.target.scrollHeight - e.nativeEvent.target.clientHeight;
        const percScrolling = (scrollTop/max) * 100;
        if (percScrolling == 100) {
            this.getPokemonList(this.state.next);
        }
    },
    render: function() {
        if ( this.state.pokemonList.length > 0) {
            return (
                <div ref="list" onScroll={this.addPokemons}>
                    <Drawer ref="drawer" docked={false}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}>
                        {this.state.pokemonList}
                    </Drawer>
                </div>

            );
        } else {
            return (<div>
                <Drawer ref="drawer" docked={false}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                    <div style={{display: 'flex', justifyContent: 'center',  alignItems: 'center'}}>
                        <MDSpinner size={100}/>
                    </div>
                </Drawer>
            </div>);
        }

    }
});

export default PokemonList;