import React from 'react'
import Hero from '../component/Hero'

const data = {
    name: "Brand Junction",
    image: './image/images3.png',
    description: "Brand Junction is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India."
}
const About = () => {
    return (
        <div>
            <Hero {...data} />
        </div>
    )
}

export default About
