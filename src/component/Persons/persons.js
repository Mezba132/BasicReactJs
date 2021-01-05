import React, { Component } from 'react';
import Person from './Person/person';

class Persons extends Component 
{

    state = {
        nothing : ''
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[Persons.js] getDerivedStateFromProps', nextProps);
        return prevState;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate' );
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering....');
        return(
            this.props.persons.map((person, index) => {
                return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    click={() => this.props.click(index)}
                    changed={event => this.props.changed(event, person.id)}
                />
            })
      )
    }

}

export default Persons;