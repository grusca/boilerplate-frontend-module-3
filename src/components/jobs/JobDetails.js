// components/jobs/JobDetails.js
import React, { Component } from 'react';
import axios from 'axios';

class JobDetails extends Component {
	state = {};

  componentDidMount(){
    this.getTheJob();
  }

  getTheJob = () => {
    const { id, jobId } = this.props.match.params;
    axios.get(`http://localhost:5000/api/clients/${id}/jobs/${jobId}`)
    	.then( (apiResponse) => {
      	const theJob = apiResponse.data;
      	this.setState(theJob);
    })
    .catch( (err) => console.log(err))
  }

  handleClick = () => {
     this.props.getData()
      .then((response) =>  {
        this.setState({ title: response.data.value})
      })
  } 

  render(){
    return(
      <div>
        <h3>JOB DETAILS</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>

        <button onClick={this.handleClick} >GET JOKE</button>
        <button onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default JobDetails;