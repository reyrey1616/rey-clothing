import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch , Link } from 'react-router-dom';
import Error from './components/error/error.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">

      <Switch>
      <Route path = "/" component = {HomePage} exact />
      <Route path = "/shop" component = {ShopPage} exact />
      <Route component = {Error} />   
      </Switch>

    </div>
  );
}

export default App;
