import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.searchSubmit = this.searchSubmit.bind(this);
  }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

  searchSubmit(e) {
      e.preventDefault();
      this.props.cardSearch(this.state.value);
  }

  render() {
    return (
        <div className="search row col-md-12">
          <form onSubmit={this.searchSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button>Search</button>
          </form>
        </div>
    );
  }
}

export default SearchBar;