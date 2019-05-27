// components/jobs/JobDetails.js
import React, { Component } from 'react';
import jobService from '../../lib/job-service';
import ProgressBar from '../jobs/ProgressBar';


class JobDetails extends Component {
	state = {};

  componentDidMount(){
    this.getTheJob();
  }

  getTheJob = () => {
    const { id, jobId } = this.props.match.params;
    jobService.getJob(id, jobId)
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
        <ProgressBar getProgress={this.state.progress}/>
        <button onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default JobDetails;