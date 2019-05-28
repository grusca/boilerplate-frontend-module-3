import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../img/logo.png'

class Login extends Component {
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
    const { username, password } = this.state;
    return (
      <div className='signup'>
        <Link to={"/"}><img src={logo} className="logo" alt="Logo"/></Link>
        <h1> status </h1>
        <form onSubmit={this.handleFormSubmit}>
          {/* <i class="fas fa-user"/> */}
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
          {/* <i class="fas fa-lock"/> */}
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
          <input className="button" type="submit" value="Login" />
        </form>
        <p> Don't have an account? <Link to={"/signup"}> Signup </Link> </p>
      </div>
    );
  }
}

export default withAuth(Login);
