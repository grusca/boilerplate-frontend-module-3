// components/clients/ClientDetails.js
import React, { Component } from 'react';
import clientService from '../../lib/client-service';
import { Link } from 'react-router-dom';
import EditClient from './EditClient';
import AddJob from './../jobs/AddJob';
import Navbar from '../Navbar';


class ClientDetails extends Component {
  constructor(props){
    super(props);
    this.state = {firstname: '', lastname: '', jobs: []};
  }
  
  renderEditForm = () => {
    /* Check if `renderEditForm` is triggered before the state gets populated. 
     If the state is empty nothing can be passed to `EditClient` as the
    value in `theClient` prop to populate the form  */
    if (!this.state.firstname && !this.state.lastname) return <p>LOADING</p>; 
    else {
      return (
        <EditClient theClient={this.state} getTheClient={this.getSingleClient} {...this.props} /> 
          // To be able to use 'this.props.history' in EditClient  
      )      
    }
  }

  renderAddJobForm = () => {
    if(!this.state.firstname && !this.state.lastname) return  <p>LOADING</p>; 
    else {
      return <AddJob clientID={this.state._id} getTheClient={this.getSingleClient} />
    }     // pass the clientID and method `getSingleClient()` to AddJob component
  }
 
  componentDidMount() {
    this.getSingleClient();
  }

  getSingleClient = () => {
    const { id } = this.props.match.params;
    clientService.getClient(id)
      .then( (apiResponse) =>{
        const theClient = apiResponse.data;
        this.setState(theClient);
      })
      .catch( err => console.log(err));
  }
  

  render() {
    return (
      <div className="clientPage">
        <div className="pageTitle">
          <h1 className="contactinfoTitle"> {this.state.firstname} {this.state.lastname} </h1>
          <p className="contactinfo"> {this.state.phonenumber} </p>
          <p className="contactinfo"> {this.state.email} </p>
        </div>

        <div className="container"> 

        { this.renderEditForm() }
        { this.renderAddJobForm() }

        { 
          (this.state.jobs.length === 0) ?
          <h2>NO JOBS TO DISPLAY</h2>

          :
           this.state.jobs.map((job) => {
            return(
              <Link className='jobCard' key={job._id} to={`/clients/${this.state._id}/jobs/${job._id}`}>
                 <h2 >{ job.title }</h2>
             </Link>
            )
          })
        }
        </div>
        <Navbar/>
      </div>
    )
  }
}

export default ClientDetails;