import React from 'react'
import './Person.css'

const Person = (props) => {
    
    return (
        <div className="person">   
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>color: {props.color}</p>
        </div>
    )
}

// const Person = () => {
//     return (
//         <div className="person">   
//             <p>Name: Kunal</p>
//             <p>Age: 21</p>
//             <p>color: Green</p>
//         </div>
//     )
// }

export default Person
