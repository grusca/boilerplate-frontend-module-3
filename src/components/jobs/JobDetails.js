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
    // Get Job
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
        <div></div>
        <h1>{this.props.client}</h1>
        <h2>JOB DETAILS</h2>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        <ProgressBar getProgress={this.state.progress}/>
        <button onClick={this.handleClick} >GET JOKE</button>
        <button className="button" onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default JobDetails;