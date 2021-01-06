import React, { Component } from 'react';
import './App.css';
import Persons from '../component/Persons/persons';
import Cockpit from '../component/Cockpit/cockpit';

class App extends Component {
  constructor(props)
  {
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] getDerivedStateFromProps', nextProps);
    return prevState;
  }

  state = {
    persons: [
      { id:'react1', name: 'Max', age: 28 },
      { id:'react2', name: 'Leo', age: 29 },
      { id:'react3', name: 'Lisa', age: 26 },
      { id:'react4', name: 'Messi', age: 27 }
    ],
    otherState: 'some other value',
    showPersons : false,
    showCockpit : true
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

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps);
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  removeCockpitHandler = () => {
    this.setState({ showCockpit : false});
  }

  render () {

    console.log('[App.js] render');

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
        <button onClick={this.removeCockpitHandler}>Remove Cockpit</button>
        {
          this.state.showCockpit ? <Cockpit 
              title={this.props.appTitle}
              persons={this.state.persons}
              bg={this.state.showPersons}
              click={this.toggleChangeHandler}
            /> : null 
        }
          {persons}
        </div>      

    );
  }
}

export default App;
