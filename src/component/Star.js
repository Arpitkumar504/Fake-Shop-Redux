import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaStarHalfAlt } from 'react-icons/fa';

const Star = ({ stars }) => {
    const ratingstar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (
                        <AiFillStar className="icon" />
                    ) : stars >= number ? (
                        <FaStarHalfAlt className='icon' />
                    ) : (
                        <AiOutlineStar className="icon" />
                    )
                }
            </span>
        )
    })
    return (
        <div className='reviews'>
            <h5>{ratingstar}</h5>
        </div>
    )
}

export default Star