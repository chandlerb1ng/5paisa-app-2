import React, { Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Orders from './Components/Orders';
import Holdings from './Components/Holdings';
import Position from './Components/Positions';
import Funds from './Components/Funds';
import Profile from './Components/Profile';
import OrderStatus from './Components/OrderStatus';
import DashBoard from './Components/DashBoard'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component {



  render () {
    return (    
      
        <div className="App">
          {/* <Navigation/> */}
          <Router>
            <Route path= "/" exact component= {DashBoard} />
            <Route path= "/orders" component= {DashBoard}/>
            <Route path= "/holdings" component={DashBoard} />
            <Route path= "/positions" component={DashBoard} />
            <Route path= "/funds" component= {DashBoard} />
            <Route path= "/profile" component= {DashBoard} />
            <Route path= "/orderstatus" component= {DashBoard} />
          </Router>
          
          {/* <Route path= "/" exact component= {Orders} />
          <Route path= "/orders" component= {Orders}/>
          <Route path= "/holdings" component={Holdings} />
          <Route path= "/positions" component={Position} />
          <Route path= "/funds" component= {Funds} />
          <Route path= "/profile" component= {Profile} />
          <Route path= "/orderstatus" component= {OrderStatus} /> */}
        </div>
     
    )
  }
}

export default App
