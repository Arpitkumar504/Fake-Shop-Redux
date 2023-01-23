import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import FormatPrice from '../component/Formatprice';
import Star from '../component/Star';
import { addcart, setsingledata, totalitems, totalprices } from '../redux/action/productaction';

const Singleproduct = () => {
  const { id } = useParams();
  const api = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.product.singleproduct);
  const cartproduct = useSelector((state) => state.productcart.cart);
  const { image, price, description, title, category, rating } = datas;
  const getsingleproduct = async (url) => {
    try {
      const data = await axios.get(url);
      dispatch(setsingledata(data.data));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getsingleproduct(`${api}/${id}`);
  }, [id])
  useEffect(() => {
    dispatch(totalitems());
    dispatch(totalprices());
  }, [cartproduct])
  return (
    <div className='container singleproduct'>
      <div className="image">
        <img src={image} alt="#" />
      </div>
      <div className="content">
        <h5 className='title'>{title}</h5>
        <h5>MRP: <span><del><FormatPrice price={price + 500} /></del></span></h5>
        <h5>Deals of the Day: <span><FormatPrice price={price} /></span></h5>
        <p>{description}</p>
        <hr />
        <h5>Category: <span>{category}</span></h5>
        <div className='reviews'>
          <Star stars={rating?.rate} />
          <div className="stock">
            <h5>Available: <span>{rating?.count >= 0 ? "In Stock" : "Out of Stock"}</span> </h5>
          </div>
        </div>
        <hr />
        <button type='button' onClick={(e) => dispatch(addcart(datas, id))}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Singleproduct
