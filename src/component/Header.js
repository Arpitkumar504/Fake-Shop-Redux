import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Header = () => {
    const [show, setshow] = useState(false);
    const totalitem = useSelector((state) => state.productcart.totalitem);
    return (
        <div className={show ? "header active" : "header"}>
            <div className="logo">
                <Link to="/" >
                    <img src="./image/logo.jpg" alt="#" />
                </Link>
            </div>
            <div className="navbarcart">
                <div className="navbar">
                    <ul className='navlist'>
                        <li>
                            <Link to="/" onClick={() => { setshow(false) }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => { setshow(false) }}>About</Link>
                        </li>
                        <li>
                            <Link to="/product" onClick={() => { setshow(false) }}>Products</Link>
                        </li>
                        <li>
                            <Link to="/Contact" onClick={() => { setshow(false) }}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/cart">
                    <div className='cart'>
                        <Badge color="primary" badgeContent={totalitem} defaultValue={0} >
                            <FaShoppingCart className='icon' />
                        </Badge>
                    </div>
                </Link>

            </div>
            <div className="navbutton" onClick={() => { setshow(!show) }}>
                <AiOutlineMenu className='open navbtn' />
                <GrClose className='close navbtn' />
            </div>
        </div>
    )
}

export default Header