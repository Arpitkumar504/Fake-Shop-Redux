import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from './Formatprice';
import Star from './Star';

const List = ({ product }) => {
    return (
        <div className='listview'>
            {
                product.map(element => {
                    const { id, title, price, image, description, rating: { rate } } = element;
                    return (
                        <Link to={`/singleproduct/${id}`} key={id}>
                            <div className="listdata" key={id}>
                                <div className="image">
                                    <img src={image} alt="#" />
                                </div>
                                <div className="content">
                                    <h5>{title}</h5>
                                    <p>{description}</p>
                                    <div className="reviews">
                                        <Star stars={rate} />
                                        <h5><FormatPrice price={price} /></h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default List
