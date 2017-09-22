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
        console.log('Card Added');
        console.log(card);
        axios.post('/api/add/card/test1', {
            name: 'name',
            set: 'set',
            image_uri: 'image_uri',
            id: 'id'
          })
          .then(function (response) {
            console.log('Respnse from api');
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState(prevState => ({
            cube: prevState.cube.concat(card)
        }));
        console.log('cardView');
        console.log(this.state.cardView[this.state.cardView.length-1]);
        //this.setState(this.state.cardView[this.state.cardView.length-1].image_url = card.image_uri);
    }

    viewCubeCard(card) {
        console.log('view card');
        console.log(card);

        //
    }

    // TODO: update database
    removeFromCube(card){
        console.log(card + ' removed');
        this.setState(prevState => ({
            cube: prevState.cube.filter(element => element.name !== card)
        }));
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
