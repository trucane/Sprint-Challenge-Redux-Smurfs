import React, { Component } from "react";
import {getSmurfs,addSmurf} from "../actions";
import "./App.css";

import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class AddSmurf extends Component {

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

  componentDidMount(){
      this.props.getSmurfs();
  }

  addSmurf = (e) =>{
    e.preventDefault()
    const check = this.props.smurfs.find(item => `${item.name}` === this.state.name)
    if(!check){
        const newSmurf = {
            name:this.state.name.trim(),
            age:this.state.age.trim(),
            height:this.state.height.trim()
        }
        if(!newSmurf.name || !newSmurf.age || !newSmurf.height){
    
        }else{
    
          this.props.addSmurf(newSmurf);
        }
    }else{
        console.log('that smurf is already here')
    }
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit={this.addSmurf}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            placeholder="name"
            onChange={this.changeHandler}
          />

          <input
            name="age"
            type="text"
            value={this.state.age}
            placeholder="age"
            onChange={this.changeHandler}
          />

          <input
            name="height"
            type="text"
            value={this.state.height}
            placeholder="height"
            onChange={this.changeHandler}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  {addSmurf, getSmurfs}
)(AddSmurf);
