// components/jobs/AddJob.js
import React, { Component } from 'react';
import jobService from '../../lib/job-service';
import Slider from '../jobs/Slider';


class EditJob extends Component {
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
        
        // Edit Job
        jobService.editJob(_id, title, description, progress, price, amountpaid)
        .then( () => {
          this.props.getTheJob();	
          this.props.history.push('/jobs'); 
        })
         .catch( err => console.log(err) )
      }
    
      toggleForm = () => this.setState({isShowing: !this.state.isShowing});
    
      handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
      }
    
      deleteJob = () => {
        const { id } = this.props.match.params;
        jobService.removeJob(id)
          .then( () => this.props.history.push('/jobs') )
            .catch( err => console.log(err));
      }


    render() {
      // console.log('this.state(editjob)',this.state)
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
          <input name="price" placeholder='Price' value={this.state.price} onChange={ (e) => this.handleChange(e)} />
          <input name="amountpaid" placeholder='Paid' value={this.state.amountpaid} onChange={ (e) => this.handleChange(e)} />
          <Slider progress = {this.state.progress} onChange={ (e) => this.handleChange(e)} changeProgress={this.onChangeProgress}/>
          <input type="submit" value="Update" />
          <button className="button" onClick={() => this.deleteJob()}> Delete Job </button>
        </form>
        </div>)
      }
            </div>
        )
    }
}

export default EditJob
