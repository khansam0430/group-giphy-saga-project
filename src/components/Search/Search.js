import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';


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

  addFav = (id) => {
    console.log('unique id for gif', id);
    swal("Which Favorites category would you like to add this in?", {
      buttons: {
        funny: {
          text: "Funny!",
          value: "got it",
        },
        cohort: {
          text: "Cohort!",
          value: "got it",
        },
        cartoon: {
          text: "Cartoon!",
          value: "got it",
        },
        nsfw: {
          text: "NSFW",
          value: "boom",
        },
        misc: {
          text: "MISC!",
          value: "catch",
      },
      },
    })
    .then((value) => {
      switch (value) {
     
        case "defeat":
          swal("Pikachu fainted! You gained 500 XP!");
          break;
     
        case "catch":
          swal("Gotcha!", "Pikachu was caught!", "success");
          break;
     
        default:
          swal("Got away safely!");
      }
    });
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
                <li key={image.id}>
                  <img alt="title" src={image.images.fixed_width.url} /> 
                  <br/>
                  {image.title}
                  <br/>
                  <button onClick={()=>this.addFav(image.id)}>Add to Favorites!</button>
                   <br/>
                  
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