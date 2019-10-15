import React from 'react';

import {combineReducers, createStore} from 'redux';
import * as reducers from './state/reducers';

import * as actionCreators from './state/actionCreators';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import  {connect} from 'react-redux';


//Combine All reducers into monsterReducer ( 4 dreadfort)

//declare your slices of state : carDetails, shop, cost

const monsterReducer = combineReducers({
  // delete : reducers.removeFeatureReducer,
  state: reducers.carReducer
});


//Use createStore to create a Redux Store (5 white harbour)

export const store = createStore(
  monsterReducer,
  //chrome redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//app renders everything

export const App = ({state,removeFeature, addFeature}) => {
 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature ={addFeature} store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export  default connect (
  
    //export a connected verion of a component (8 bear island)
  
    state => state, 
    //plug the actionCreators into the component (9 shadow tower)
    actionCreators,)(App);
  
  

