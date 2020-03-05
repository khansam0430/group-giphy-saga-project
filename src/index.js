import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from "redux-saga/effects";
import Axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('SET_SEARCH', addGiphy);

}

function* addGiphy(giphy) {
    const searchResponse = yield Axios.get(`/api/search/${giphy.payload.search}`);
    console.log("giphy payload", giphy.payload)
    yield put({type: 'GIF_SEARCH', payload: searchResponse.data})
    console.log('its snowing outside now', searchResponse.data)
}

function* postGiphy() {
  
}

function* deleteGiphy(action) {

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// This function (our reducer) will be called when an 
// action is dipatched. state = ['Apple'] sets the default 
// value of the array.
const searchReducer = (state = {}, action) => {
    switch(action.type){
        case 'GIF_SEARCH':
            return state = action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        searchReducer
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('react-root'));


