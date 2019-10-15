import React from 'react';
import  {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';


 const AdditionalFeature = props => {
  
  // const {buyer} = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature;
