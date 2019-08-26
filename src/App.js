import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch , Link } from 'react-router-dom';
import Error from './components/error/error.component';

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
        <Link to = "/"> Home </Link>
       <h1> Hats {props.match.params.id} </h1> </div>
  )
}

function App() {
  return (
    <div className="App">

      <Switch>
      <Route path = "/" component = {HomePage} exact />
      <Route path = "/shop/hats" component = {HatsPage} exact />
      <Route component = {Error} />   
      </Switch>

    </div>
  );
}

export default App;
