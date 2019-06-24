import React from "react";
import {Link} from 'react-router-dom'; 

const SmurfBody = props => {
    return(
    <div>
      <div className="smurfs">
        <Link to={`/smurfs/${props.smurf.id}`}> {props.smurf.name} </Link>
      </div>
      <div className="smurf-footer">
        <span onClick={e => props.delete(e, props.smurf.id)}>x</span>
        <span>
          <Link to={`/smurfs/${props.smurf.id}/edit`}> edit</Link>
        </span>
      </div>
    </div>
    )
  
};

export default SmurfBody;
