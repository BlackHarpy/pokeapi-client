/*jshint esversion: 6 */

import React from 'react';
import {APIService} from './services/APIService'

import Drawer from 'material-ui/Drawer';
import PokemonListItem from './PokemonListItem.jsx';
import MDSpinner from "react-md-spinner";


export default class PokemonList extends React.Component {
    componentDidMount() {
        this.getPokemonList();
    }

    closeDrawer(url) {
        this.setState({open:false});
        this.props.selectUrl(url);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({open:nextProps.open});
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false, 
            pokemonList: [], 
            next:''
        };
    }

    getPokemonList(url) {
        const event = this.closeDrawer;
        APIService.getPokemonList(url).then(data => {
            let i = this.state.pokemonList.length;
            let page = data.results.map(function(record) {
                i++;
                return (<PokemonListItem  key={i} name={record.name} url={record.url} onClick={event}/>);
            })
            let output = this.state.pokemonList.concat(page);
            this.setState({pokemonList: output});
            this.setState({next: data.next});
          })
   
    }

    addPokemons(e) {
        const scrollTop = e.nativeEvent.target.scrollTop;
        const max = e.nativeEvent.target.scrollHeight - e.nativeEvent.target.clientHeight;
        const percScrolling = (scrollTop/max) * 100;
        if (percScrolling >= 100) {
            this.getPokemonList(this.state.next);
        }
    }
    render() {
        if ( this.state.pokemonList.length > 0) {
            return (
                <div ref="list" onScroll={this.addPokemons.bind(this)}>
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
}