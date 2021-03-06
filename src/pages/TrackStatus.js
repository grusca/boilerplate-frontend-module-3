import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../img/logo.png';

class TrackStatus extends Component {
  state = {
    keycode: "",
    job: null,
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { keycode } = this.state;
 
        this.props.history.push(`/jobs/${keycode}`)

  }
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { keycode } = this.state;
    return (
      <div className='signup'>
        <Link to={"/"}><img src={logo} className="logo" alt="Logo"/></Link>
        <h1>Status</h1>
        <h2>Track progress status</h2>
        <form onSubmit={this.handleFormSubmit}>
          <input className="input" type="text" name="keycode" placeholder="Enter keycode" value={keycode} onChange={this.handleChange}/>
          <input className="button" type="submit" value="Track" />
        </form>
      </div>
    );
  }
};

export default withAuth(TrackStatus);