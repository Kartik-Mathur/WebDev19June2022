import React,{useState} from 'react'
import Form from './Form'
import Product from './Product'

const ShoppingList = () => {
    const DUMMY_PRODUCTS = [
        {
            name:'Iphone 14',
            price:2000,
            imageUrl:'https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
        },
        {
            name:'Macbook Pro',
            price:2500,
            imageUrl:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            name:'Ipad',
            price:1500,
            imageUrl:'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        }
    ]

    const [products, setProducts] = useState(DUMMY_PRODUCTS);

    const addProduct=(product)=>{
        console.log('Inside shopping list:',product);
        // products.push(product);
        // We always create a new array, and never update 
        // the previous 'products' array we created using
        // useState hook!!!!
        
        setProducts([...products,product]);
        console.log(products);
    }

    return (
        <div>
            <Form addProduct={addProduct} />
            {
                products.map((product,indx)=>{
                    return <Product 
                    key={indx}
                    name={product.name} 
                    price={product.price}
                    imageUrl={product.imageUrl}
                    />
                })
            }
        </div>
    )
}

export default ShoppingList
