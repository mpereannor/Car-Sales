import React from 'react';
import  {connect} from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export const AddedFeature = props => {

  const{remover} = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      onClick={remover}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect (
  //export a connected verion of a component (8 bear island)

  state => state, 
  //plug the actionCreators into the component (9 shadow tower)
  actionCreators,)(AddedFeature);



