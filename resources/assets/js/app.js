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
        this.cardsToView = this.cardsToView.bind(this);

        this.state = {
            cardView: [],
            cube: []
        };
    }

    // TODO: This should load the logged in users cube/cubes
    componentDidMount() {
         axios.get('api/cube/test1/cards')
             .then(res => {
                 this.setState({ cube: res.data });
             });
     }

    cardsToView() {
        if (this.state.cardView.length === 0) {
            return '';

        } else {
            return ( <CardList addCard={this.addToCube}
                        cardView={this.state.cardView} /> );
        }
    }

    cardSearchAPI(name){
        const val = name.replace(/\s/g, '+');

        axios.get('api/search/' + val)
            .then(res => {
                this.setState({ cardView: res.data.data });
            });
    }

    // TODO: append cube name to api endpoint
    addToCube(card){
        let self = this;
        console.log(card.name + ' added');
        axios.post('/api/add/card/test1', {
            name: card.name,
            set: card.set,
            image_uri: card.image_uri,
            unique_id: card.id
          })
          .then(function (response) {
              console.log('Add Respnse from api ' + response.status);
              self.setState(prevState => ({
                  cube: prevState.cube.concat(card)
              }));  
          })
          .catch(function (error) {
              console.log(error);
          });
    }

    // TODO: append cube name to api endpoint
    removeFromCube(cardName){
        let self = this;
        console.log(cardName + ' removed');
        axios.post('/api/remove/card/test1', {name: cardName })
            .then(function (response) {
                console.log('Remove Response from api ' + response.status);
                self.setState(prevState => ({
                    cube: prevState.cube.filter(element => 
                        element.name !== cardName)
                }));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="top">

                <SearchBar cardSearch={this.cardSearchAPI} />

                {this.cardsToView()}

                <h2 className="sub-header">Cube</h2>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Set</th>
                        </tr>
                        </thead>

                            <CubeList removeCard={this.removeFromCube}
                                      viewCard={this.viewCubeCard}
                                      cube={this.state.cube}
                            />

                    </table>
                </div>
            </div>


        );
    }
}

ReactDOM.render(<App />, document.getElementById('cube'));
