import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    // <SearchBar onTermChange={this.handleTermChange} /> in App component
    this.props.onTermChange(term); // from the parent 
  }

  render() {
    return (
        <div className="search row col-md-12">
            <input onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }
}

export default SearchBar;