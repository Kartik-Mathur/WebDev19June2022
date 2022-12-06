import React from 'react'
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <img src={props.imageUrl} />
            <div>Name: {props.name}</div>
            <div>Price: ${props.price}</div>
        </div>
    )
}

export default Product;