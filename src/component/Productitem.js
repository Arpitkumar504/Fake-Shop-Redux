import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortdata } from '../redux/action/productaction';
import Grid from './Grid';

const Productitem = () => {
    const griddata = useSelector((state) => state.filterproduct.gridview);
    const filterdata = useSelector((state) => state.filterproduct.
        filterproduct);
    const sortingvalue = useSelector((state) => state.filterproduct.sortingvalue);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sortdata());
    }, [sortingvalue]);

    if (griddata) {
        return (
            <Grid product={filterdata} />
        )
    }
}

export default Productitem
