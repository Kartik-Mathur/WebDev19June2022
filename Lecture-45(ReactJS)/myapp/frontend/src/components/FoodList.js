import React, { useState, useEffect } from 'react'
import Food from './Food';

const FoodList = () => {
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4444/getAllFood')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setFoods(data);
            })
    }, []);

    return (
        foods.map((food)=>{
            return <Food food={food} />
        })
    )
}

export default FoodList
