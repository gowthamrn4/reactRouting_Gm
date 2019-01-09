import React,{Component} from 'react';

class About5 extends Component{
    render(){
        var style = {
             width:'50%'
        }
        return(
            <div>
                <div className="progress">
  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
  aria-valuemin="0" aria-valuemax="100" style={style}>
    40% Complete (success)
  </div>
</div>

<div className="progress">
  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="50"
  aria-valuemin="0" aria-valuemax="100" >
    50% Complete (info)
  </div>
</div>

<div class="progress">
  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60"
  aria-valuemin="0" aria-valuemax="100" >
    60% Complete (warning)
  </div>
</div>

<div class="progress">
  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70"
  aria-valuemin="0" aria-valuemax="100" >
    70% Complete (danger)
  </div>
</div>
            </div>
        )
    }
}
export default About5