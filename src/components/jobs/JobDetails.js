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
        {/* <h1>{this.props.client}</h1> */}
        <div className="jobtitle">
        <h2>JOB DETAILS</h2>
        <h3>{this.state.title}</h3>
        <p>{this.state.description}</p>
        </div>
        <ProgressBar getProgress={this.state.progress}/>
        <div className="priceCard">
          <div className="price">
            <h5>Price</h5>
            <h4>{this.state.price} €</h4>
          </div>
          <div className="price">
            <h5>Paid</h5>
            <h4>{this.state.amountpaid} €</h4>
          </div>
          <div className="price">
            <h5>Balance</h5>
            <h4>{this.state.price - this.state.amountpaid} €</h4>
          </div>
        </div>
        <div className="keycodeCard">
          <h5>Keycode</h5>
          <div className="keycode"><h6>{this.state.keycode}</h6></div>
        </div>
        <button className="button" onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default JobDetails;