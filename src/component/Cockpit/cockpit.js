import React, {useEffect, useRef} from 'react';

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

  const toggleBtnRef = useRef();

  useEffect( () => {
    console.log('[Cockpit.js] useEffect runs 1');
    setTimeout( () => {
      console.log('[Cockpit.js] cockpit runs after timeout');
      toggleBtnRef.current.click();
    },3000);
    return () => {
      console.log('[Cockpit.js] cleanup function runs 1')
    }
  },[]);

  useEffect( () => {
    console.log('[Cockpit.js] useEffect runs 2');
    return () => {
      console.log('[Cockpit.js] cleanup function runs 2')
    }
  })

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
    <h1>{props.title}</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <StyleButton 
    ref={toggleBtnRef}
    bg={props.showPersons} 
    onClick={props.click}>Toggle Person</StyleButton> 
 </div>
)}

export default React.memo(cockpit);