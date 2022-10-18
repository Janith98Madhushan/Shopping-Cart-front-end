

import './App.css';

import FooterComponent from './component/FooterComponent';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent';

import SelectProduct from './component/SelectProduct';
import ItemList from './component/ItemList'

function App() {
  return (
    
        <div>
          <Router>
          <HeaderComponent/>

          <div className='container'>
            <Switch>
              <Route exact path={"/"} component={ItemList}></Route>
              <Route path={"/list"} component={ItemList}></Route>
              <Route path={"/add-product"} component={SelectProduct}></Route>
            </Switch>

          </div>

          
          <FooterComponent/>
          </Router>
        </div>        
  );
}

export default App;
