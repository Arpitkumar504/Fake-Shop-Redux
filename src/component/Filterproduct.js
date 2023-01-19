import React from 'react'
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Star from './Star';
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { updatevalue, rating } from '../redux/action/productaction';


const Filterproduct = () => {
  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.filterproduct.alldata);
  const category = useSelector((state) => state.filterproduct.filter.category);
  const price = useSelector((state) => state.filterproduct.filter.price);
  const minprice = useSelector((state) => state.filterproduct.filter.min);
  const maxprice = useSelector((state) => state.filterproduct.filter.max);
  const getfilterproducts = (data, property) => {
    let newdata = data.map((element) => {
      return element[property];
    })
    return newdata = ["all", ...new Set(newdata)];
  }
  const categorydata = getfilterproducts(alldata, "category");
  return (
    <div className='filter'>
      <div className="search">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className="searchdata">
          <FaSearch className='icon' sx={{ color: 'action.active' }} />
          <TextField sx={{ width: "200px", ml: 1 }} autoComplete="off" id="input-with-sx" label="Search Here" variant="standard" name='name' onChange={(e) => dispatch(updatevalue(e.target))} />
        </Box>
      </div>
      <div className="category">
        <h5>Category</h5>
        {
          categorydata.map((element, index) => {
            return (
              <button
                type='button'
                name='category'
                value={element}
                key={index}
                onClick={(e) => dispatch(updatevalue(e.target))}
                className={category == element ? "active" : ""}
              >
                {element.toUpperCase()}
              </button>
            )
          })
        }
      </div>
      <div className="rating">
        <h5>Rating</h5>
        <div className="ratingbox">
          {
            Array.from({ length: 5 }, (element, indexes) => {
              return (
                <div className="rate" key={indexes} onClick={() => dispatch(rating(indexes + 1))}>
                  <Star stars={indexes + 1} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="price">
        <h5>Price</h5>
        <div className="pricebox">
          <Slider aria-label="Default" valueLabelDisplay="auto" value={price} min={minprice} max={maxprice} name="price" onChange={(e) => dispatch(updatevalue(e.target))} />
        </div>
      </div>
    </div>
  )
}

export default Filterproduct