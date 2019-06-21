import React, { Component } from "react";
import { getSmurfs, addSmurf, deleteSmurfs } from "../actions";
import "./App.css";

import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

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

  addSmurf = (e) =>{
    e.preventDefault()
    const newSmurf = {
      name:this.state.name.trim(),
      age:this.state.age.trim(),
      height:this.state.height.trim()
    }
    if(!newSmurf.name || !newSmurf.age || !newSmurf.height){

    }else{

      this.props.addSmurf(newSmurf);
      console.log(newSmurf)
    }
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

        {this.props.smurfs.map(smurf => (
          <div key={smurf.id}>
          {smurf.name} <span onClick={(e) => this.deleteSmurf(e, smurf.id)}>x</span>
          </div>
        ))}
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
)(App);
