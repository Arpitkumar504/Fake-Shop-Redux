import React from 'react'

const Hero = ({ name, image }) => {
    return (
        <div className='container hero'>
            <div className="content">
                <h1>{name}</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis eaque, impedit dolorum nulla hic.</h5>
                <button type='button'>Explore</button>
            </div>
            <div className="image">
                <img src={image} alt="#" />
            </div>
        </div>
    )
}

export default Hero