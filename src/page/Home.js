import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setproduct } from '../redux/action/productaction';
import Products from '../component/Products';

const Home = () => {
    const api = "https://fakestoreapi.com/products";
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
            <Products />
        </div>
    )
}

export default Home
