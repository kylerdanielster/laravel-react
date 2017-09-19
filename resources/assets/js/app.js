require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';

import CubeList from './components/CubeList';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();

        this.addToCube = this.addToCube.bind(this);
        this.removeFromCube = this.removeFromCube.bind(this);
        this.cardSearchAPI = this.cardSearchAPI.bind(this);

        // Going to leave test data for now
        this.state = {
            results: [
                // {
                //     id: 1,
                //     name: 'Lightning Bolt',
                //     description: 'Lightning Bolt deals 3 damage to target creature or player.',
                //     //"photo": "https://img.scryfall.com/cards/small/en/mm2/122.jpg?1496792177",
                //     imageUrl: 'http://via.placeholder.com/175x250',
                //     saved: false
                // },
                // {
                //     id: 2,
                //     name: 'Terminate',
                //     description: 'Destroy target creature. It can\'t be regenerated.',
                //     //"photo": "https://img.scryfall.com/cards/small/en/mm3/194.jpg?1501890996",
                //     imageUrl: 'http://via.placeholder.com/175x250',
                //     saved: false
                // },
                // {
                //     id: 3,
                //     name: 'Thoughtseize',
                //     description: 'Target player reveals his or her hand. You choose a nonland card from it. That player discards that card. You lose 2 life.',
                //     //"photo": "https://img.scryfall.com/cards/small/en/ths/107.jpg?1497078879",
                //     imageUrl: 'http://via.placeholder.com/175x250',
                //     saved: false
                // },
                // {
                //     id: 4,
                //     name: 'Baneslayer Angel',
                //     description: 'Flying, first strike, lifelink, protection from Demons and from Dragons.',
                //     //"photo": "https://img.scryfall.com/cards/small/en/m11/7.jpg?1496454118",
                //     imageUrl: 'http://via.placeholder.com/175x250',
                //     saved: false
                // }
            ],
            cube: []
        };
    }

    componentDidMount() {
         axios.get('api/cube/test1/cards')
             .then(res => {
                 this.setState({ cube: res.data });
             });
     }

    cardSearchAPI(name){
        console.log(name);
        const val = name.replace(/\s/g, '+');

        axios.get('api/search/' + val)
            .then(res => {
                this.setState({ results: res.data.data });
            });
    }

    // TODO: update database
    addToCube(card){
        console.log(card.name + ' added');
        this.setState(prevState => ({
            cube: prevState.cube.concat(card)
        }));
    }

    // TODO: update database
    removeFromCube(card){
        console.log(card + ' removed');
        this.setState(prevState => ({
            cube: prevState.cube.filter(element => element.name !== card)
        }));
    }

    render() {
        let searchResults;
        if (this.state.results.length === 0) {
            searchResults = '';

        } else {
            searchResults = <CardList addCard={this.addToCube}
                        results={this.state.results} />;
        }

        return (
            <div className="top">

                <SearchBar cardSearch={this.cardSearchAPI} />

                {searchResults}

                <h2 className="sub-header">Cube</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Set</th>
                            <th>Rarity</th>
                        </tr>
                        </thead>

                            <CubeList removeCard={this.removeFromCube}
                                      cube={this.state.cube}
                            />

                    </table>
                </div>
            </div>


        );
    }
}

ReactDOM.render(<App />, document.getElementById('cube'));
