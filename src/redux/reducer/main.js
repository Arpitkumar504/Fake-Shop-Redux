import { combineReducers } from 'redux';
import { product } from './productreducer';

const rootcombine = combineReducers({
    product,
})
export default rootcombine;