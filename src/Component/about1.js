import React,{Component} from 'react';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import About4 from './about4';
import About5 from './about5';
import Home from './Home';
class About1 extends Component{
    render(){
        return(
            <div>
                <h1>Child Routing</h1>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about/about1/about4">About</NavLink>
                <NavLink to="/about/about1/about5">Status</NavLink>
                <Route path="/about/about1/about4" component={About4}/>
                <Route path="/about/about1/about5" component={About5}/>

            </div>
        )
    }
}
export default About1