import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import About from './about';
import About1 from './about1';


class Menu extends Component{
    render(){
        var style={
            padding:'10px'
        }
        return(
            <div className="container">
    
                 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header" style={style}>
     <NavLink to="/home"> <button class="btn btn-danger navbar-btn">Home</button></NavLink> 
    </div>
    <div class="navbar-header" style={style}>
     <NavLink to="/about"> <button class="btn btn-danger navbar-btn">About</button></NavLink> 
    </div>
    <div class="navbar-header" style={style}>
     <NavLink to="/about"> <button class="btn btn-danger navbar-btn">Contact</button></NavLink> 
    </div>
    <div class="navbar-header" style={style}>
     <NavLink to="/about"> <button class="btn btn-danger navbar-btn">Gallery</button></NavLink> 
    </div>
    <div class="navbar-header" style={style}>
     <NavLink to="/about"> <button class="btn btn-danger navbar-btn">Message</button></NavLink> 
    </div>

  </div>
</nav>
                
            </div>
        )
    }
}

export default Menu