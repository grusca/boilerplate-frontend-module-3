import React, { Component } from 'react';

class Slider extends Component {

  onChangeProgress = (e) => {
    this.props.changeProgress(e.target.value);
  }

  render() {  
    const progress = this.props.progress * 20 + "%";
    let style = { width: progress }
    let text;
  
    switch(Number(this.props.progress)) {
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
      <div className="flex-container-slider">
        <input type="range" min="0" max="5" step="1" name="progress"
         value={this.props.progress} onChange={ this.onChangeProgress} />
          <span className="value" style={style}></span>
        <h3>{text}</h3>       
      </div>
    )
 
  } 
}
export default Slider;
