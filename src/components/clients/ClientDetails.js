// components/clients/ClientDetails.js
import React, { Component } from 'react';
import clientService from '../../lib/client-service';
import { Link } from 'react-router-dom';
import EditClient from './EditClient';
import AddJob from './../jobs/AddJob';

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
        <EditClient theClient={this.state}
          getTheClient={this.getSingleClient} 
          {...this.props} /> // To be able to use 'this.props.history' in EditClient  
      )      
    }
  }

  renderAddJobForm = () => {
    if(!this.state.firstname && !this.state.lastname) return  <p>LOADING</p>; 
    else {
      return <AddJob clientID={this.state._id} getTheClient={this.getSingleClient} />
    }     // pass the clientID and method `getSingleClient()` to AddJob component
  }

  deleteClient = () => {
    const { id } = this.props.match.params;
    console.log(this.props.history)
    
    clientService.removeClient(id)
      .then( () => this.props.history.push('/clients') )
    	.catch( err => console.log(err));
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
      <div>
        <h3>{this.state.firstname} {this.state.lastname}</h3>

        <Link to={'/clients'}> <button className="button">Back</button> </Link>

        { this.renderEditForm() }   {/* Render the form in here */}
        <button className="button" onClick={() => this.deleteClient()}> Delete client </button>

        { this.renderAddJobForm() }

        { 
          (this.state.jobs.length === 0) ?
          <h2>NO JOBS TO DISPLAY</h2>

          :
           this.state.jobs.map((job) => {
            return(
              <Link key={job._id} to={`/clients/${this.state._id}/jobs/${job._id}`}>
                 <h2 className='job'>{ job.title }</h2>
             </Link>
            )
          })
        }

      </div>
    )
  }
}

export default ClientDetails;