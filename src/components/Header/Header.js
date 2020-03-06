import React, { Component } from 'react';
import {HashRouter as Route, Link, Router} from 'react-router-dom';
import Favorite from '../Favorite/Favorite'




class Header extends Component {

  render() {
    return (
      <div className="header">
       
          <h1 className="site-title" >Giphy Search!</h1>
          <div className="nav">
          <Link to="/" className="favoriteLink">Home</Link>
          <Link to="/favorite" className="favoriteLink">Favorites</Link>
          </div>
      </div>
    );
  }
  
}

export default Header;
