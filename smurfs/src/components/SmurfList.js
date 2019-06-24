import React, { Component } from "react";
import { getSmurfs, addSmurf, deleteSmurfs } from "../actions";
import "./App.css";
import SmurfBody from './SmurfBody';

import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class SmurfList extends Component {

  state={
    name:'',
    age:'',
    height:''
  }


  changeHandler = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  deleteSmurf = (e, id) =>{
    e.preventDefault();
    this.props.deleteSmurfs(id);
  }

  componentDidMount() {
    this.props.getSmurfs();
  }
  
  render() {
    return (
      <div className="App">
        <h2> {this.props.smurfs.length} Smurfs in village</h2>
        <div className="smurf-village">

          {this.props.smurfs.map(smurf => (

            <div key={smurf.id} className="smurf-container">
               <SmurfBody smurf={smurf} delete={this.deleteSmurf} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf,deleteSmurfs }
)(SmurfList);
