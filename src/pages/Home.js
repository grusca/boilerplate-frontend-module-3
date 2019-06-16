import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from '../img/logo.png'

class Login extends Component {


  render() {
    return (
      <div className='signup'>
        <div className="blob"></div>
        <img src={logo} className="logo" alt="Logo" />
        <h1> status </h1>
        <h3>Keeping shops & customers<br/> in touch</h3>
        <form>
        <Link className="home button" to={"/login"}> Login </Link> 
        <Link className="home button" to={"/signup"}> Signup </Link> 
        <Link className="home button" to={"/trackstatus"}> Track status </Link> 
        </form>
      </div>
    );
  }
}

export default withAuth(Login);