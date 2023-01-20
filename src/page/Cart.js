import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartproduct = useSelector((state) => state.productcart.cart);
    return (
        <div className='container cart'>
            <h5>Cart Page</h5>
        </div>
    )
}

export default Cart
