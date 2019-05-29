// components/jobs/AddJob.js
import React, { Component } from 'react';
import jobService from '../../lib/job-service';


export class EditJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.theJob.title,
            description: this.props.theJob.description,
            progress: this.props.thejob.progress,
            price: this.props.theJob.price,
            amountpaid: this.props.theJob.amountpaid
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const { title, description, progress, price, amountpaid } = this.state;
        const { _id } = this.props.theJob;
        // Edit Client
        jobService.editClient(_id, title, description, progress, price, amountpaid)
        .then( () => {
          this.props.getTheClient();	
          this.props.history.push('/clients'); 
        })
         .catch( err => console.log(err) )
      }
    
      toggleForm = () => this.setState({isShowing: !this.state.isShowing});
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
      }
    
      deleteClient = () => {
        const { id } = this.props.match.params;
        jobService.removeClient(id)
          .then( () => this.props.history.push('/clients') )
            .catch( err => console.log(err));
      }


    render() {
        return (
            <div>
            <button className="buttonMini" onClick={this.toggleForm}>Edit Job</button>

{
      !this.state.isShowing ?
      null
      :
      (<div>

        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
          <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
          <input name="price" placeholder='Price' value={this.state.price} onChange={ (e) => this.handleChange(e)} />
          <input name="amountpaid" placeholder='Paid' value={this.state.amountpaid} onChange={ (e) => this.handleChange(e)} />
          <input type="range" min="0" max="5" step="1" name="progress" value={this.state.progress} onChange={ (e) => this.handleChange(e)} />
          <input type="submit" value="Update" />
          <button className="button" onClick={() => this.deleteClient()}> Delete client </button>
        </form>
        </div>)
      }
            </div>
        )
    }
}

export default EditJob
