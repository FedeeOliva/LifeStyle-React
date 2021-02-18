import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './store';
import Layout from './components/layout';
import Home from './pages/home';


function App() {  
  return (
    <Provider store={store}>      
      <Layout>
       	<Router>
       		<Switch>
       			<Route exact path='/' component={Home} />
       		</Switch>
       	</Router>
      </Layout>
    </Provider>
  );
}

export default App;
