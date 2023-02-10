import React from 'react'

const Hero = ({ name, image, description }) => {
    return (
        <div className='container hero'>
            <div className="content">
                <h1>{name}</h1>
                <h5>{description}</h5>
                <button type='button'>Explore</button>
            </div>
            <div className="image">
                <img src={image} alt="#" />
            </div>
        </div>
    )
}

export default Hero