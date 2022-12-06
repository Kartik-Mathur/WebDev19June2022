import React from 'react'
import Form from './Form'
import Product from './Product'

const ShoppingList = () => {
    const products = [
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

    return (
        <div>
            <Form />
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
