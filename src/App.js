import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Guys</h1>
        <Person name="mezba" profession="developer">My Hobbies : Traveling</Person>
      </div>
    );
  }
  
}

export default App;
