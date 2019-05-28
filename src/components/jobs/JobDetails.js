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


  render(){
    return(
      <div>
        <div></div>
        <h1>{this.props.client}</h1>
        <h2>JOB DETAILS</h2>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        <ProgressBar getProgress={this.state.progress}/>
        <div className="priceCard">
          <div className="price">
            <h5>Price</h5>
            <h4>{this.state.price}</h4>
          </div>
          <div className="price">
            <h5>Amt Paid</h5>
            <h4>{this.state.amountpaid}</h4>
          </div>
          <div className="price">
            <h5>Balance</h5>
            <h4>{this.state.price - this.state.amountpaid}</h4>
          </div>
        </div>
        <button className="button" onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default JobDetails;