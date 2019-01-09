import React,{Component} from 'react';
import {Route,Link,Switch,BrowserRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import About1 from './about1';
import About2 from './about2';
class About extends Component{
    render(){
        return(
            <div className="container">
             <div className="row">
               <div className="col-md-4">
               <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div class="fakeimg">Fake Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
         <NavLink to="/about/about1">About1</NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/about/about2">About2</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
               </div>

               <div className="col-md-6">
               <Route exact path="/about" component={About1}/>
               <Route path="/about/about1" component={About1}/>
               <Route path="/about/about2" component={About2}/>
               </div>

             </div>

          </div>
        )
    }
}
export default About