<<<<<<< HEAD
import logo from './logo.svg';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1>Hola Mundo</h1>
=======
import {Provider} from 'react-redux';
import store from './store';
import Index from './components/index'

import addProductsReducer from './reducers/addProductsReducer';
function App() {
  
  return (
    <Provider store={store}>
      
      <Index>
       
      </Index>

>>>>>>> beta
    </Provider>
  );
}

export default App;
