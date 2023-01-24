import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './Formatprice'
import { AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrease, increase, remove } from '../redux/action/productaction'

const Cartcard = ({ data: { id, price, image }, quantity }) => {
    const dispatch = useDispatch();
    return (
        <div className='cartcard'>
            <Link to={`/singleproduct/${id}`}>
                <div className="image">
                    <img src={image} alt="#" />
                </div>
            </Link>
            <div className="price">
                <h5><FormatPrice price={price} /></h5>
            </div>
            <div className="quantity">
                <div className="quantitybox">
                    <AiFillPlusCircle className="icon" onClick={() => dispatch(increase(id))} />
                    <h5>{quantity}</h5>
                    <AiFillMinusCircle className="icon" onClick={() => dispatch(decrease(id))} />
                </div>
            </div>
            <div className="subtotal">
                <h5>{<FormatPrice price={price * quantity} />}</h5>
            </div>
            <div className="remove">
                <AiFillDelete className="icon" onClick={() => dispatch(remove(id))} />
            </div>
        </div>
    )
}

export default Cartcard
