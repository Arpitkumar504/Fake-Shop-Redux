import React from 'react'
import { useSelector } from 'react-redux'
import Cartcard from '../component/Cartcard';

const Cart = () => {
    const cartproduct = useSelector((state) => state.productcart.cart);
    return (
        <div className='container cart'>
            {
                cartproduct.map(element => {
                    const { data: { id } } = element;
                    return (
                        <Cartcard
                            key={id}
                            {...element}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cart
