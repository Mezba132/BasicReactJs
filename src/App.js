import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    person : [
      {name:"Leo",profession:"developer"},
      {name:"Razib",profession:"Businessman"}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello Guys</h1>
        <Person name={this.state.person[0].name} profession={this.state.person[0].profession}>My Hobbies : Traveling</Person>
        <Person name={this.state.person[1].name} profession={this.state.person[1].profession}/>
      </div>
    );
  }
  
}

export default App;
