import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';


class Search extends Component {

  state={}
  
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state)
    this.props.dispatch({
      type: 'SET_SEARCH',
      payload: this.state
    })
  }

  addFav = (id, title, url) => {
    console.log('unique id for gif', id, title, url);
    swal("Pick a category for your favorite", {
      buttons: {
        funny: {
          text: "Funny!",
          value: "funny",
        },
        cohort: {
          text: "Cohort!",
          value: "cohort",
        },
        cartoon: {
          text: "Cartoon!",
          value: "cartoon",
        },
        nsfw: {
          text: "NSFW",
          value: "nsfw",
        },
        misc: {
          text: "MISC!",
          value: "misc",
        },
      },
    })
    .then((value) => {
      switch (value) {
     
        case "funny":
          swal("Awesome!", "adding to funny favorites!", "success");
          this.props.dispatch({type: 'ADD_FAV', payload: {sendId: id, sendTitle: title, sendUrl: url, sendCat: "1"}});
          break;
     
        case "cohort":
          swal("Awesome!", "adding to cohort favorites!", "success");
          this.props.dispatch({type: 'ADD_FAV', payload: {sendId: id, sendTitle: title, sendUrl: url, sendCat: "2"}});
          break;
    
        case "cartoon":
          swal("Awesome!", "adding to cartoon favorites!", "success");
          this.props.dispatch({type: 'ADD_FAV', payload: {sendId: id, sendTitle: title, sendUrl: url, sendCat: "3"}});
          break;

        case "nsfw":
          swal("Awesome!", "adding to NSFW favorites!", "success");
          this.props.dispatch({type: 'ADD_FAV', payload: {sendId: id, sendTitle: title, sendUrl: url, sendCat: "4"}});
          break;

        case "misc":
          swal("Awesome!", "adding to misc favorites!", "success");
          this.props.dispatch({type: 'ADD_FAV', payload: {sendId: id, sendTitle: title, sendUrl: url, sendCat: "5"}});
          break;

        default:
          swal("Adding To Favorites!");
          this.props.dispatch({type: 'ADD_FAV', payload: {sendId: id, sendTitle: title, sendUrl: url}});
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
      <div className="search">
        <div className="searchForm">
            <input
              placeholder="Search Giphy"
              onChange={this.handleChange}
              className="input"
            />
            <button onClick={this.handleSubmit}>Search</button>
        </div>
        <div className="container">
          <div >
              {this.props.reduxState.searchReducer.data && (
                <div className="display">
                  {this.props.reduxState.searchReducer.data.map(image => (
                    <div className="gif" key={image.id}>
                      <img alt="title" src={image.images.fixed_width.url} /> 
                      <br/>
                      <div className="title">
                        {image.title}
                        <br/>
                        <button onClick={()=>this.addFav(image.id, image.title, image.images.fixed_width.url)}>Add to Favorites!</button>
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

export default connect(putReduxStateOnProps)(Search);