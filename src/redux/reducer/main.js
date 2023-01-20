import { combineReducers } from 'redux';
import { product, filterproduct, productcart } from './productreducer';

const rootcombine = combineReducers({
    product,
    filterproduct,
    productcart,
})
export default rootcombine;