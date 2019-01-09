import React, { Component } from 'react';
import logo from './logo.svg';
import Landingpage from './Component/landingpage';
import Error from './Component/error';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import './App.css';

const NewRoute = () =>{
  return(
    <div >
      <p>This is New Route</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
  
      <BrowserRouter>
      <div>
         <Landingpage/>
           {/* <Switch>
             <Route path="/home" component={Home}/>
             <Route path="/about" component={About}/>
             <Route component={Error}/>
           </Switch> */}

      </div>
      </BrowserRouter>
     
    
    
    );
  }
}

export default App;
