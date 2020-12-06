import React from 'react'

const person = (props) => {
    return <div>
        <h3>I am {props.name} and a professional full-stack {props.profession}</h3>
        <p>{props.children}</p>
    </div>
}

export default person;