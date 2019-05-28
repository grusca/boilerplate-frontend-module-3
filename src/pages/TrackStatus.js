import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../img/logo.png'

class TrackStatus extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { keycode } = this.state;
    return (
      <div className='signup'>
        <Link to={"/"}><img src={logo} className="logo" alt="Logo"/></Link>
        <h1> Track Statuss </h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="codenumber" placeholder="Enter keycode" value={keycode} onChange={this.handleChange}/>
          <input className="button" type="submit" value="Track" />
        </form>
      </div>
    );
  }
}

export default withAuth(TrackStatus);