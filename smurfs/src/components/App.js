import React, { Component } from "react";
import "./App.css";
import {Route} from 'react-router-dom';
import Home from './home';
import SmurfList from './SmurfList';
import AddSmurf from './AddSmurf';
import Smurf from './Smurf';
import Navigation from './Navigation/navigation'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route  path="/add" component={AddSmurf} />
        <Route path="/smurfs/:id" component={Smurf} />
        <Route exact path="/smurfs" component={SmurfList} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}

export default App


