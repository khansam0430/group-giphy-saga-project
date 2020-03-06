import React, { Component } from 'react';
import Search from '../Search/Search';
import './App.css';
import Header from '../Header/Header';
import {HashRouter as Router, Route} from 'react-router-dom';
import Favorite from '../Favorite/Favorite';

import Funny from '../Funny/Funny';
import Cohort from '../Cohort/Cohort';
import Cartoon from '../Cartoon/Cartoon';
import MISC from '../MISC/MISC';
import NSFW from '../NSFW/NSFW';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
       <Router>
          <Header/>
          <Route exact path="/" component={Search}/>
          <Route path="/favorite" component={Favorite} />
          <Route path="/Cohort" component={Cohort} />
          <Route path="/Cartoon" component={Cartoon} />
          <Route path="/MISC" component={MISC} />
          <Route path="/Funny" component={Funny} />
          <Route path="/NSFW" component={NSFW} />
        </Router>
      </div>
    );
  }
  
}

export default App;
