import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class UserSettings extends Component {
  state = {
    username: "",
    password: ""
  };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     const { username, password } = this.state;
//     this.props.login({ username, password });
//   };

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

  render() {
    const { username, password } = this.state;
    return (
      <div className='signup'>
        <h1> statuss </h1>
        <h3>User Settings</h3>
        <button className='button' onClick={this.props.logout}> Logout </button>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" placeholder="Username" value={username} onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
          <input className="button" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default withAuth(UserSettings);