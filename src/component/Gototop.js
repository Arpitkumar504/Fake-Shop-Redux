import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Gototop = () => {
    const [show, setshow] = useState(false);
    const gotobtn = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    const listentoscroll = () => {
        let position = 450;
        const winscroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winscroll > position) {
            setshow(true);
        }
        else {
            setshow(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listentoscroll);
        return () => window.removeEventListener('scroll', listentoscroll);
    }, [])
    return (
        <div>
            {
                show && (
                    <div className='top' onClick={gotobtn}>
                        <AiOutlineArrowUp className="icon" />
                    </div>
                )
            }
        </div>
    )
}

export default Gototop