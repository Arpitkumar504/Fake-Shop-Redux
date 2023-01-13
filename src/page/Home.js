import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setproduct } from '../redux/action/productaction';

const Home = () => {
    const api = "https://fakestoreapi.com/products";
    const dispatch = useDispatch();
    const datas = useSelector((state) => state.product.products);
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
        <div>
        </div>
    )
}

export default Home
