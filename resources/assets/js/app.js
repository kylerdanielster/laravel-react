
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import CubeList from './components/CubeList';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            results: [
                {
                    id: 1,
                    name: 'Lightning Bolt',
                    description: 'Lightning Bolt deals 3 damage to target creature or player.',
                    //"photo": "https://img.scryfall.com/cards/small/en/mm2/122.jpg?1496792177",
                    imageUrl: 'http://via.placeholder.com/175x250',
                    saved: false
                },
                {
                    id: 2,
                    name: 'Terminate',
                    description: 'Destroy target creature. It can\'t be regenerated.',
                    //"photo": "https://img.scryfall.com/cards/small/en/mm3/194.jpg?1501890996",
                    imageUrl: 'http://via.placeholder.com/175x250',
                    saved: false
                },
                {
                    id: 3,
                    name: 'Thoughtseize',
                    description: 'Target player reveals his or her hand. You choose a nonland card from it. That player discards that card. You lose 2 life.',
                    //"photo": "https://img.scryfall.com/cards/small/en/ths/107.jpg?1497078879",
                    imageUrl: 'http://via.placeholder.com/175x250',
                    saved: false
                },
                {
                    id: 4,
                    name: 'Baneslayer Angel',
                    description: 'Flying, first strike, lifelink, protection from Demons and from Dragons.',
                    //"photo": "https://img.scryfall.com/cards/small/en/m11/7.jpg?1496454118",
                    imageUrl: 'http://via.placeholder.com/175x250',
                    saved: false
                }
            ],
            cube: [] // either poll server to update or update and save to server at the same time.
        };
    }

    // componentDidMount() {
    //     fetch('/api/cube')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(cube => {
    //             this.setState({ cube });
    //         });
    // }
    //TODO: Will need a load initial state function and a search function

    handleTermChange(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="top">

                <SearchBar onTermChange={this.handleTermChange} />

                <CardList results={this.state.results} />

                <h2 className="sub-header">Cube</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Colors</th>
                            <th>Casting Cost</th>
                        </tr>
                        </thead>

                            <CubeList cube={this.state.cube} />

                    </table>
                </div>
            </div>


        );
    }
}

ReactDOM.render(<App />, document.getElementById('cube'));
