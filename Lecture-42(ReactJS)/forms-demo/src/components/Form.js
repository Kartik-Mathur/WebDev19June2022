import React from 'react'
import './Form.css';

const Form = () => {
    return (
        <form className="form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                placeholder="Product Name"
            ></input>
            <label htmlFor="price">Price:</label>
            <input
                type="text"
                id="price"
                placeholder="Product Price"
            ></input>
            <label htmlFor="imageUrl">ImageUrl:</label>
            <input
                type="text"
                id="imageUrl"
                placeholder="Product ImageUrl"
            ></input>
            <button type="submit">Add Product</button>
        </form>
    )
}

export default Form
