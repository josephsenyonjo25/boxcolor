import React, {Component} from 'react';
  
class Box extends Component {
    constructor(props) {
        super(props);

        this.state= {
            color:"blue",
            clickCounter: 0
        };
  
        
        render() {
          return (
            <div className= "Box">
                <h1>Box color change</h1>
                    <div className = "box" style ={{backgroundColor: this.state.color}} onClick={()=>this.toggleColor()}>
                        <p className="name">Click Here</p>
                    </div>
                    
            </div>
          )
        }
    }
    export default Box;
    
    
   