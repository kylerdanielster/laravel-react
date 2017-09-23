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

        this.state = {
            cardView: [],
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
        const val = name.replace(/\s/g, '+');

        axios.get('api/search/' + val)
            .then(res => {
                this.setState({ cardView: res.data.data });
            });
    }

    // TODO: update database
    addToCube(card){
        let self = this;
        console.log(card.name + ' added');
        axios.post('/api/add/card/test1', {
            name: 'name',
            set: 'set',
            image_uri: 'image_uri',
            id: 'id'
          })
          .then(function (response) {
              console.log('Respnse from api ' + response.status);
              self.setState(prevState => ({
                  cube: prevState.cube.concat(card)
              }));  
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // TODO: update database
    removeFromCube(cardName){
        let self = this;
        console.log(cardName + ' removed');
        axios.post('/api/remove/card/test1', {name: cardName })
            .then(function (response) {
                console.log('Response from api ' + response.status);
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
        let cardsToView;
        if (this.state.cardView.length === 0) {
            cardsToView = '';

        } else {
            cardsToView = <CardList addCard={this.addToCube}
                        cardView={this.state.cardView} />;
        }

        return (
            <div className="top">

                <SearchBar cardSearch={this.cardSearchAPI} />

                {cardsToView}

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
