import React, { Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Orders from './Components/Orders';
import Holdings from './Components/Holdings';
import Position from './Components/Positions';
import Funds from './Components/Funds';
import Profile from './Components/Profile';
import OrderStatus from './Components/OrderStatus';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component {



  render () {
    return (    
      <Router>
        <div className="App">
          <Navigation/>
          <Route path= "/" exact component= {Orders} />
          <Route path= "/orders" component= {Orders}/>
          <Route path= "/holdings" component={Holdings} />
          <Route path= "/positions" component={Position} />
          <Route path= "/funds" component= {Funds} />
          <Route path= "/profile" component= {Profile} />
          <Route path= "/orderstatus" component= {OrderStatus} />
        </div>
      </Router>
    )
  }
}

export default App
