import React, { Component } from 'react';
import Search from '../Search/Search';
import './App.css';
import Header from '../Header/Header';
import {HashRouter as Router, Route} from 'react-router-dom';
import Favorite from '../Favorite/Favorite';
import Home from '../Home/Home';




class App extends Component {

  render() {
    return (
      <div className="wrapper">
       <Router>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/favorite" component={Favorite} />
          <Route path="/search" component={Search} />
        </Router>
      </div>
    );
  }
  
}

export default App;
