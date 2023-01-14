import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const Products = () => {
    const data = useSelector((state) => state.product.products);
    console.log(data);
    return (
        <div className='productlist'>
            {
                data.map((element) => {
                    const { id } = element;
                    return (
                        <Card
                            key={id}
                            {...element}
                        />
                    )
                })
            }
        </div>
    )
}

export default Products
