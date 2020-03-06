import React, { Component } from 'react';
import {connect} from 'react-redux';


class Favorite extends Component {

  componentDidMount =()=>{
    this.getMyGifs();
  }

  getMyGifs =()=>{
    this.props.dispatch({type: 'DISPLAY_FAV'});
  }

  render() {
    return (
      <div className="favorite">
        <h1>Giphy Favorites!</h1>
        <div className="container">
          <div >
              {this.props.reduxState.categoryReducer && (
                <div className="display">
                  {this.props.reduxState.categoryReducer.map(image => (
                    <div className="gif" key={image.id}>
                      <img alt="title" src={image.url} /> 
                      <br/>
                      <div className="title">
                        {image.title}
                        <br/>
                        {/* <button onClick={()=>this.addFav(image.id, image.title, image.images.fixed_width.url)}>Add to Favorites!</button> */}
                        <br/>
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