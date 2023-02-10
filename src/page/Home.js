import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setproduct } from '../redux/action/productaction';
import Products from '../component/Products';
import Hero from '../component/Hero';

const Home = () => {
    const api = "https://fakestoreapi.com/products";
    const data = {
        name: "Brand Junction",
        image: './image/image3.png',
        description: "Online Shopping Site for Fashion & Lifestyle in India. India's Fashion Expert brings you a variety of footwear, Clothing, Accessories and lifestyle products",
    }
    const dispatch = useDispatch();
    const getproducts = async (url) => {
        try {
            const data = await axios.get(url);
            dispatch(setproduct(data.data));
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getproducts(api);
    }, [])
    return (
        <div className='container'>
            <Hero {...data} />
            <Products />
        </div>
    )
}

export default Home
