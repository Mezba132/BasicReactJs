import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const classes = [];

    if(this.state.persons.length <= 2)
    {
      classes.push('color');
    }
    if(this.state.persons.length <= 1)
    {
      classes.push('fontSize');
    }

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            key={person.id}
            name={person.name} 
            age={person.age} 
            click={() => this.deletPersonHandler(index)}
            changed={event => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>     
      );
      style.backgroundColor = 'purple';
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style}
          onClick={this.toggleChangeHandler}>Toggle Person</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
