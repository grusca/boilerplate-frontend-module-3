import React, { Component } from 'react';

class Slider extends Component {

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
          <div className="progress" data-label={`${progress} completed`}>
          <input type="range" min="0" max="5" step="1" name="progress" value={this.state.progress} onChange={ (e) => this.handleChange(e)} />
            <span className="value" style={style}></span>
          </div>  
          <h3>{text}</h3>    
              
       </div>
      )
    }
  } 
  export default Slider;

