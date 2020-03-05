import React, { Component } from 'react';
import {connect} from 'react-redux';


class Search extends Component {

  state={

  }
  
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state)
    this.props.dispatch({
      type: 'SET_SEARCH',
      payload: this.state
    })
}




  handleChange=(event)=>{
    this.setState({
        search: event.target.value
    })
}


  render() {
    
    return (
      <div className="searchForm">
        <input
          placeholder="Search Giphy"
          onChange={this.handleChange}
          className="input"
        />
        <button onClick={this.handleSubmit}>Search</button>

        <div className="random">
          {this.props.reduxState.searchReducer.data && (
            <ul>
              {this.props.reduxState.searchReducer.data.map(image => (
                <li>
                  <img alt="title" src={image.images.fixed_width.url} /> 
                  <br/>
                  {image.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});

export default connect(putReduxStateOnProps)(Search);