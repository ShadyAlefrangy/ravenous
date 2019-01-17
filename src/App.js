import React from 'react';
import logo from './logo.svg';
import './App.css';
import BussinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Yelp from '../src/util/Yelp';
import Business from './components/Business/Business';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses})
    })
  };
  
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BussinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
