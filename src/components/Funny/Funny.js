import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


class Funny extends Component {
    componentDidMount =()=>{
        this.getMyGifs();
      }
    
      getMyGifs =()=>{
        this.props.dispatch({type: 'DISPLAY_FAV'});
      }

  render() {
    return (
      <div className="funny">
               <div className="nav">
          <Link to="/funny" className="favoriteLink">Funny</Link>
          <Link to="/cohort" className="favoriteLink">Cohort</Link>
          <Link to="/cartoon" className="favoriteLink">Cartoon</Link>
          <Link to="/nsfw" className="favoriteLink">NSFW</Link>
          <Link to="/misc" className="favoriteLink">MISC</Link>
          </div>
       <h1>Funny</h1>
       <div className="container">
          <div >
              {this.props.reduxState.categoryReducer && (
                <div className="display">
                  {this.props.reduxState.categoryReducer.map(image => {
                      return image.category_id === 1 ? 
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
                      :
                    <p></p>
                    })}
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
  
  export default connect(putReduxStateOnProps)(Funny);