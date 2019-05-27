import React, { Component } from 'react';

class ProgressBar extends Component {

    render() {  
      const test = this.props.getProgress * 20 + "%";
      var style = { width: test }
  
      return (
        <div className="flex-container">
          <div className="progress" data-label={`${test} completed`}>
            <span className="value" style={style}></span>
          </div>          
       </div>
      )
    }
  } 
  export default ProgressBar;
