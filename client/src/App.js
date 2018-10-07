import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CollectionPage from './pages/Collection';
import LoginPage from './pages/Login';
import ItemPage from './pages/Item';
import './stylesheets/global.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/collection/:collection" component={CollectionPage}/>
            <Route exact path="/collection/:collection/:itemId" component={ItemPage} />
          </div>
			  </Router>
      </div>
    );
  }
}

export default App;
