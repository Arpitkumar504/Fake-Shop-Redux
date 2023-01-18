import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaSearch } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { updatevalue } from '../redux/action/productaction';


const Filterproduct = () => {
  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.filterproduct.alldata);
  const category = useSelector((state) => state.filterproduct.filter.category);
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
    </div>
  )
}

export default Filterproduct