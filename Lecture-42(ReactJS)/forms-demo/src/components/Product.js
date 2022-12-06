import React,{useState} from 'react'
import './Product.css';

const Product = (props) => {
    // let price = props.price;
    const [price,setPrice] = useState(props.price);

    const clickHandler = ()=>{
        console.log('Clicked');
        // price = 200;
        setPrice(200);
        console.log(price);
    }

    return (
        <div onClick={clickHandler} className="product">
            <img src={props.imageUrl} />
            <div>Name: {props.name}</div>
            <div>Price: ${price}</div>
        </div>
    )
}

export default Product;