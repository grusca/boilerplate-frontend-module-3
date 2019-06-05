// components/jobs/AddJob.js
import React, { Component } from 'react';
import jobService from '../../lib/job-service';
import Slider from '../jobs/Slider';

class AddJob extends Component {
  constructor(props){
    super(props);
    this.state = { title: '', description: '', progress: '', price: '', isShowing: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description, progress, price } = this.state;
    const { clientID } = this.props; 
    // we need to know to which client the job belongs to, therefore we get its 'id'
    jobService.addJob(title, description, progress, price, clientID)                                            
    .then( () => {
      // after form submit, GET client once more to display the updated job list 
      this.props.getTheClient();
      this.setState({title: '', description: '', progress: '', price: '', isShowing: false});
    })
    .catch( err => console.log(err) )
  }
  
  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState( {[name]: value} );
  }

  onChangeProgress = (newProgress) => {
    this.setState({
      progress: newProgress
    });
  }

  render(){
    return(
      <div>
        <button className="buttonMini" onClick={this.toggleForm}> Add job </button>

        {
          !this.state.isShowing ?
           null
          :
          (<div>
            <form>
              <input type="text" name="title" placeholder='Title' value={this.state.title} onChange={ (e) => this.handleChange(e)}/>
              <input name="description" placeholder='Description' value={this.state.description} onChange={ (e) => this.handleChange(e)} />
              <input name="price" placeholder='Price' value={this.state.price} onChange={ (e) => this.handleChange(e)} />
              <Slider progress = {this.state.progress} onChange={ (e) => this.handleChange(e)} changeProgress={this.onChangeProgress}/>
              <button className="button" onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>)
        }
      </div>
    )
  }
}

export default AddJob;

