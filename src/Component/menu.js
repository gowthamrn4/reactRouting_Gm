import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import About from './about';
import About1 from './about1';

class Menu extends Component{
    render(){
        return(
            <div className="container">
                <nav class="navbar navbar-expand-sm bg-light">

                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">Home</NavLink>
                    </li>
                     <li class="nav-item">
                      <NavLink to="/about" className="nav-link">About</NavLink>
                      </li>
                       <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                       </li>
                   </ul>

                 </nav>
             
                
            </div>
        )
    }
}

export default Menu