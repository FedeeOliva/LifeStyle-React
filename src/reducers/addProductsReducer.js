import { inicialState, ADD_PRODUCTS_CARS, DELETE_PRODUCTS_CARS } from '../actions/addProductsActions'

const addProductsReducer = (state = inicialState, {type, payload})=>{
    switch (type) {
        case ADD_PRODUCTS_CARS:
            
            return {
                ...state,
                addProductCar:state.addProductCar.concat(payload)
            }
            
        case DELETE_PRODUCTS_CARS:
            return {
                ...state,
                addProductCar:state.addProductCar.filter(products=>products.id !== payload.id)
            }
        default:
          return state;
    }

}
export default addProductsReducer