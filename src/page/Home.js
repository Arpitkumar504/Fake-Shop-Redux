import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setproduct } from '../redux/action/productaction';
import Products from '../component/Products';
import Hero from '../component/Hero';

const Home = () => {
    const api = "https://fakestoreapi.com/products";
    const data = {
        name: "Fake Shop",
        image: './image/image3.png',
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
