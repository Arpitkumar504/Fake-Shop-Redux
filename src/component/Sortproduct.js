import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sorting } from '../redux/action/productaction';
import { useDispatch, useSelector } from 'react-redux';

const Sortproduct = () => {
    const dispatch = useDispatch();
    const filterdata = useSelector((state) => state.filterproduct.filterproduct);
    return (
        <div className='sortproduct'>
            <div className="view">
                <button type='button'><BsFillGridFill className='icon' /></button>
                <button type='button'><FaThList className='icon' /></button>
            </div>
            <div className="content">
                <h5>{`${filterdata.length} Product Found`}</h5>
            </div>
            <div className="sort">
                <FormControl sx={{ minWidth: 150 }}>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        defaultValue="lowest"
                        onChange={(e) => { dispatch(sorting(e.target.value)) }}
                    >
                        <MenuItem value="lowest" sx={{ fontWeight: "bold" }}>Price(Lowest)</MenuItem>
                        <MenuItem value="highest" sx={{ fontWeight: "bold" }}>Price(Highest)</MenuItem>
                        <MenuItem value="a-z" sx={{ fontWeight: "bold" }}>Price(A-Z)</MenuItem>
                        <MenuItem value="z-a" sx={{ fontWeight: "bold" }}>Price(Z-A)</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default Sortproduct
