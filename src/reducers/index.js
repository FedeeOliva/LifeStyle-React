import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
<<<<<<< HEAD

export default combineReducers({
	products: productsReducer
=======
import  addProductsReducer  from './addProductsReducer'
export default combineReducers({
	products: productsReducer,
	cars: addProductsReducer
>>>>>>> beta
})