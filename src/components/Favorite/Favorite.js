import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Favorite extends Component {
  componentDidMount = () => {
    this.getMyGifs();
  };

  getMyGifs = () => {
    this.props.dispatch({ type: "DISPLAY_FAV" });
  };

  deleteFav = (remove) => {
    this.props.dispatch({ type: "REMOVE_FAV", payload: remove });
  };

  render() {
    return (
      <div className="favorite">
        <div className="nav">
          <Link to="/funny" className="favoriteLink">
            Funny
          </Link>
          <Link to="/cohort" className="favoriteLink">
            Cohort
          </Link>
          <Link to="/cartoon" className="favoriteLink">
            Cartoon
          </Link>
          <Link to="/nsfw" className="favoriteLink">
            NSFW
          </Link>
          <Link to="/misc" className="favoriteLink">
            MISC
          </Link>
        </div>
        <h1>Giphy Favorites!</h1>
        <div className="container">
          <div>
            {this.props.reduxState.categoryReducer && (
              <div className="display">
                {this.props.reduxState.categoryReducer.map(image => (
                  <div className="gif" key={image.id}>
                    <img alt="title" src={image.url} />
                    <br />
                    <div className="title">
                      {image.title}
                      <br />
                      <button onClick={() => this.deleteFav(image.id)}>
                        Remove From Favorites
                      </button>
                      <br />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Favorite);