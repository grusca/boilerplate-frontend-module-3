// components/jobs/JobDetails.js
import React, { Component } from 'react';
import jobService from '../../lib/job-service';
import ProgressBar from '../jobs/ProgressBar';


class JobStatus extends Component {
	state = {};

  componentDidMount(){
    this.getTheJob();
  }


  getTheJob = () => {
    const { keycode } = this.props.match.params;
    // Get Job
    console.log(keycode)
    jobService.getJobByKeycode(keycode)
    	.then( (apiResponse) => {
        const theJob = apiResponse.data;
        console.log(theJob)
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
        <button className="button" onClick={this.props.history.goBack} >Go Back</button>
      </div>
    )
  }
}

export default JobStatus;