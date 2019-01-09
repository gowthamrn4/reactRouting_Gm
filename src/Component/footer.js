import React,{Component} from 'react';

class Footer extends Component{
    render(){
        var style = {
            background:"gray",
            color:"white"
        }
        return(
            <div style={style} className="container text-center">
            <p>Footer</p>
          </div>
        )
    }
}

export default Footer