import React, { Component } from 'react';

class ProgressBar extends Component {

    render() {  
      const progress = this.props.getProgress * 20 + "%";
      let style = { width: progress }
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
          <p className="progressTitle">Progress status </p>
          <div className="progress" data-label={`${progress} completed`}>
            <span className="value" style={style}></span>
          </div>  
          <h3>{text}</h3>    
              
       </div>
      )
    }
  } 
  export default ProgressBar;
