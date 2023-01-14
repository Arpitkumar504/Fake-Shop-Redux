import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './Formatprice'
import Star from './Star'

const Card = ({ id, image, title, rating, price }) => {
    return (
        <Link to={`/singleproduct/${id}`}>
            <div className='card'>
                <div className="image">
                    <img src={image} alt="#" />
                </div>
                <div className="content">
                    <h5 className='title'>{title.slice(0, 15)}</h5>
                    <div className="info">
                        <div className="price">
                            <h5 className='price'><FormatPrice price={price} /></h5>
                        </div>
                        <Star stars={rating.rate} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
