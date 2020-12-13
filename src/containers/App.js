import React, { Component } from 'react';
import './App.css';
import Persons from '../component/Persons/persons';
import Cockpit from '../component/Cockpit/cockpit';
import Styled from 'styled-components';

const StyleButton = Styled.button`
      background-color: ${ props => props.bg ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color : ${ props => props.bg ? 'pink' : 'lightgreen'};
        color: black;
      }
`;


class App extends Component {
  state = {
    persons: [
      { id:'react1', name: 'Max', age: 28 },
      { id:'react2', name: 'Manu', age: 29 },
      { id:'react3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  }

  nameChangedHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex( p => p.id === id);

    const person = {...this.state.persons[personsIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState({ persons: persons })
  }

  toggleChangeHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow});
  }

  deletPersonHandler = (personIndex) => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    console.log(person);
    this.setState({persons : person})
  }

  render () {

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          <Persons 
          persons = {this.state.persons}
          click={this.deletPersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>     
      );
    }

    return (

        <div className="App">
        <Cockpit 
              persons={this.state.persons}
              bg={this.state.showPersons}
              click={this.toggleChangeHandler}
              />
              {persons}
        </div>      

    );
  }
}

export default App;
