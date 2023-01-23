import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Cartcard from '../component/Cartcard';
import FormatPrice from '../component/Formatprice';
import { clear, totalitems, totalprices } from '../redux/action/productaction';

const Cart = () => {
    const cartproduct = useSelector((state) => state.productcart.cart);
    const totalprice = useSelector((state) => state.productcart.totalprice);
    const totalitem = useSelector((state) => state.productcart.totalitem);
    const shippingfee = useSelector((state) => state.productcart.shippingfee);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(totalitems());
        dispatch(totalprices());
    }, [cartproduct])
    if (cartproduct.length == 0) {
        return (
            <div className="cartempty">
                <h5>Cart is Empty</h5>
            </div>
        )
    }
    return (
        <div className='container cart'>
            <div className="cartitem">
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
            <hr />
            <div className="cartbutton">
                <Link to="/product"><button type='button'>Continue Shopping</button></Link>
                <button type='button' onClick={() => dispatch(clear())}>Clear Cart</button>
            </div>
            <div className="carttotal">
                <div className='card'>
                    <h5>Subtotal: <FormatPrice price={totalprice * totalitem} /></h5>
                    <h5>Shipping Fee: <FormatPrice price={shippingfee} /></h5>
                    <hr />
                    <h5>Order Total: <FormatPrice price={totalprice * totalitem + shippingfee} /></h5>
                </div>
            </div>
            <div className="checkout">
                <button type='button'>Place Order</button>
            </div>
        </div>
    )
}

export default Cart
