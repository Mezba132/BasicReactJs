import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

const app = props => {

  const [personState, setPersonState] = useState({
    person : [
      {name:"Leo",profession:"developer"},
      {name:"Razib",profession:"Businessman"}
    ]
  })

  const [otherState, setOtherState] = useState("if you don't know,Now you know")

  const switchPersonHandler = () => {
    setPersonState ({
      person : [
        {name:"Razib",profession:"developer"},
        {name:"Leo",profession:"Businessman"}
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hello Guys</h1>
      <button onClick={switchPersonHandler}>Switch Button</button>
      <Person name={personState.person[0].name} profession={personState.person[0].profession}>My Hobbies : Traveling</Person>
      <Person name={personState.person[1].name} profession={personState.person[1].profession}/>
    </div>
  );
  
}

export default app;


