import React from 'react'

const Food = ({food}) => {
    return (
        <div >
            <li>Name: {food.name}, Price: {food.price}, Review: {food.review}</li>
        </div>
    )
}

export default Food
