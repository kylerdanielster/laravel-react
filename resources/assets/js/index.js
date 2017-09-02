import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';

import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
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
        ]
      }
    }

    handleTermChange(term) {
      console.log(term);
    }

    render() {
      return (
        <div className="top">
          <SearchBar onTermChange={this.handleTermChange} />
          <CardList cards={this.state.cards} />
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
//registerServiceWorker();
