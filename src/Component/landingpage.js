import React,{Component} from 'react';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import Menu from './menu';
import About from './about';
import About1 from './about1';
import Home from './Home';
import Footer from './footer';
class Landingpage extends Component{
    render(){
        return(
            <div>
               <Menu/>
               <Route path='/about' component={About}>
                   <Route path='about1' component={About1} />
                 </Route>
                <Route exact path="/" component={Home}/>
                <Route  path="/home" component={Home}/>
                 <Footer/>
            </div>
           
        )
    }
}

export default Landingpage