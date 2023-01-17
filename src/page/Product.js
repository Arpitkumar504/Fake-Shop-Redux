import React, { useEffect } from 'react'
import Filterproduct from '../component/Filterproduct';
import Sortproduct from '../component/Sortproduct';
import Productitem from '../component/Productitem';
import { useDispatch, useSelector } from 'react-redux';
import { setfilterproducts, sortdata } from '../redux/action/productaction';

const Product = () => {
    const products = useSelector((state) => state.product.products);
    const sort = useSelector((state) => state.filterproduct.sortingvalue);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setfilterproducts(products));
        dispatch(sortdata());
    }, [products, sort])
    return (
        <div className='container product'>
            <div className="filterproduct">
                <Filterproduct />
            </div>
            <div className="products">
                <div className="sorting">
                    <Sortproduct />
                </div>
                <div className="productdata">
                    <Productitem />
                </div>
            </div>
        </div>
    )
}

export default Product
