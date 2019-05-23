import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../img/logo.png';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    company:""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password, company } = this.state;
    this.props.signup({ username, password, company });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, company } = this.state;
    return (
      <div className='signup'>
        <img src={logo} className="logo" alt="Logo" />
        <h1> statuss </h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="Company" placeholder="Company" value={company} onChange={this.handleChange} />
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/> 
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
          <input className="button" type="submit" value="Signup" />
        </form>
        <p> Already have an account? <Link to={"/login"}> Login</Link></p>
      </div>
    );
  }
}

export default withAuth(Signup);
