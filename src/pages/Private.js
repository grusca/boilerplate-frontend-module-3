import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import shop from '../img/shop.svg'
import Navbar from '../components/Navbar';


class Private extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="clientPage">
        <div className="pageTitle">
          <h1>{user.username}</h1>
          <div className="profileStats">
            <div className="stats">
              <h4> {user.clients.length} </h4>
              <h5>  Clients </h5>
            </div>
            <div className="stats">
              <h4> {user.clients.length} </h4>
              <h5>  Jobs </h5>
            </div>
            <div className="stats">
              <h4> {user.clients.length} </h4>
              <h5>  Messages </h5>
            </div>
          </div>
          
        </div>
        <img src={shop} className="profileimage" alt="Logo"/>
        <form>
          <Link className="home button" to={"/usersettings"}> Settings </Link> 
          <Link className="home button" to={"/clients/:id/jobs/:jobId"}> Current Jobs </Link> 
        </form>
        <Navbar/>
      </div>
    );
  }
}

export default withAuth(Private);
