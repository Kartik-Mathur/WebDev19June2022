import React from 'react';
import './Person.css';

const Person = (props) => {
    
    return (
        <div className="person">
            <div>Name: {props.name}</div>
            {props.children}
            <div>Age: {props.age}</div>
            <div>Color: {props.color}</div>
        </div>
    )
}

export default Person;