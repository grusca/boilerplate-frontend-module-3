// components/jobs/AddJob.js
import React, { Component } from 'react';
import axios from 'axios';

class AddJob extends Component {
  constructor(props){
    super(props);
    this.state = { title: '', description: '', isShowing: false};
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;
    const { clientID } = this.props; 
 // we need to know to which client the job belongs, therefore we get its 'id'
                                                
    axios.post("http://localhost:5000/api/jobs",{ title, description, clientID })
    .then( () => {
// after form submit, GET client once more to display the updated job list 
        this.props.getTheClient();
        this.setState({title: '', description: ''});
    })
    .catch( error => console.log(error) )
  }
  
  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <button onClick={this.toggleForm}> Add job </button>

        {
          !this.state.isShowing ?
           null
          :
          (<div>
            <form>
              <input type="text" name="title" placeholder='Title' value={this.state.title} onChange={ (e) => this.handleChange(e)}/>
              <input name="description" placeholder='Description' value={this.state.description} onChange={ (e) => this.handleChange(e)} />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>)
        }
      </div>
    )
  }
}

export default AddJob;