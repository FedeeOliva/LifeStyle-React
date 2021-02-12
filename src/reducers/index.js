import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import  addProductsReducer  from './addProductsReducer'
export default combineReducers({
	products: productsReducer,
	cars: addProductsReducer
})