import React from 'react';

import './cockpit.css';
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

const cockpit = (props) => {

    const classes = [];

    if(props.persons.length <= 2)
    {
      classes.push('color');
    }
    if(props.persons.length <= 1)
    {
      classes.push('fontSize');
    }
    
return (
<div className="cockpit">
    <h1>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <StyleButton 
    bg={props.showPersons} 
    onClick={props.click}>Toggle Person</StyleButton> 
 </div>
)}

export default cockpit;