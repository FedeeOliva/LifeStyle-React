import {Provider} from 'react-redux';
import store from './store';
import Index from './components/index'

import addProductsReducer from './reducers/addProductsReducer';
function App() {
  
  return (
    <Provider store={store}>
      
      <Index>
       
      </Index>

    </Provider>
  );
}

export default App;
