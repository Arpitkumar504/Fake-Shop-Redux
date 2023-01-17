import React from 'react'
import Card from './Card'

const Grid = ({ product }) => {
    return (
        <div className='productlist'>
            {
                product.map((element) => {
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

export default Grid
