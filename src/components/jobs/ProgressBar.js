import React, { Component } from 'react';

class ProgressBar extends Component {

    render() {  
      const test = this.props.getProgress * 20 + "%";
      let style = { width: test }
      let text;


      switch(this.props.getProgress) {
        case 0: text = "Item received, pending turn";
        break;
        case 1: text = "Repair mode-On. Let's go!";
        break;
        case 2: text = "Hang tight, magic in progress";
        break;        
        case 3: text = "Hang tight, magic in progress";
        break;
        case 4: text = "Final touches";
        break;        
        case 5: text = "Hurray! Your item is ready!";
        break;
        default:
        text = "Pending status confirmation";
      }
  
      return (
        <div className="flex-container">
          <div className="progress" data-label={`${test} completed`}>
            <span className="value" style={style}></span>
          </div>  
          <h3>{text}</h3>    
              
       </div>
      )
    }
  } 
  export default ProgressBar;
