import React,{useState} from 'react'
import './Form.css';

const Form = (props) => {
    const [name,setName] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const nameChangeHandler = (ev)=>{
        // console.log(ev.target.value);
        setName(ev.target.value);
    }

    const priceChangeHandler = (ev)=>{
        // console.log(ev.target.value);
        setPrice(ev.target.value);
    }

    const imgChangeHandler = (ev)=>{
        // console.log(ev.target.value);
        setImageUrl(ev.target.value);
    }

    const submitFormHandler = (ev)=>{
        ev.preventDefault();
        // console.log(name);
        // console.log(price);
        // console.log(imageUrl);
        let newProduct = {
            name,price,imageUrl
        }
        console.log(newProduct);
        props.addProduct(newProduct);
    }

    return (
        <form className="form">
            <label htmlFor="name">Name:</label>
            <input
                onChange={nameChangeHandler}
                type="text"
                id="name"
                placeholder="Product Name"
            ></input>
            <label htmlFor="price">Price:</label>
            <input
                onChange={priceChangeHandler}
                type="text"
                id="price"
                placeholder="Product Price"
            ></input>
            <label htmlFor="imageUrl">ImageUrl:</label>
            <input
                onChange={imgChangeHandler}
                type="text"
                id="imageUrl"
                placeholder="Product ImageUrl"
            ></input>
            <button onClick={submitFormHandler} type="submit">Add Product</button>
        </form>
    )
}

export default Form
