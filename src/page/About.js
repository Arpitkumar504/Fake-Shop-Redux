import React from 'react'
import Hero from '../component/Hero'

const data = {
    name: "Fake Shop",
    image: './image/images3.png',
}
const About = () => {
    return (
        <div>
            <Hero {...data} />
        </div>
    )
}

export default About
