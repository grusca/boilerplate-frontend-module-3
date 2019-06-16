// components/jobs/JobDetails.js
import React, { Component } from 'react';
import jobService from '../../lib/job-service';
import ProgressBar from '../jobs/ProgressBar';
import EditJob from '../jobs/EditJob';

class JobDetails extends Component {
	state = {};

  componentDidMount(){
    this.getTheJob();
  }

  renderEditForm = () => {
    if (!this.state.title && !this.state.description) return <p>LOADING</p>; 
    else {
      return (
        <EditJob theJob={this.state} getTheJob={this.getTheJob} {...this.props} /> 
      )      
    }
  }

  getTheJob = () => {
    const { id, jobId } = this.props.match.params;
    // Get Job
    jobService.getJob(id, jobId)
    	.then( (apiResponse) => {
      	const theJob = apiResponse.data;
      	this.setState(theJob);
    })
    .catch( err => console.log(err))
  }


  render(){
    return(
      <div className="clientPage">
        <div className="pageTitle">
          <h1 className="contactinfo">{this.state.title}</h1>
          <p className="contactinfo">{this.state.description}</p>
        </div>
        <div className="container">
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
        {/* { this.renderEditForm() } */}
        <button className="button" onClick={this.props.history.goBack} >Go Back</button>
        </div>
      </div>

    )
  }
}

export default JobDetails;