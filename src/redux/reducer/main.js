import { combineReducers } from 'redux';
import { product, filterproduct } from './productreducer';

const rootcombine = combineReducers({
    product,
    filterproduct,
})
export default rootcombine;