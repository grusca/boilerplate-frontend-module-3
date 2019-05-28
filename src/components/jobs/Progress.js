import React, { Component } from 'react';

class ProgressBar extends Component {

    render() {  
      const progress = this.props.getProgress * 20 + "%";
      let style = { width: progress }
      let text;


      switch(this.props.getProgress) {
        case 0: text = "Pending";
        break;
        case 1: text = "In progress";
        break;
        case 2: text = "In progress";
        break;        
        case 3: text = "In progress";
        break;
        case 4: text = "In progress";
        break;        
        case 5: text = "Completed";
        break;
        default:
        text = "Pending";
      }
  
      return (
        <div className="flex-container">
          <div className="progress" data-label={`${progress} completed`}>
            <span className="{text}" style={style}></span>
          </div>                
       </div>
      )
    }
  } 
  export default ProgressBar;
