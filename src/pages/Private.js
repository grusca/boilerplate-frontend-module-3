import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import shop from '../img/shop.svg'


class Private extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>

        <div className="pageTitle">
          <h1>{user.username}</h1>
        </div>
        <img src={shop} className="profileimage" alt="Logo"/>
        <form>
          <Link className="home button" to={"/usersettings"}> Settings </Link> 
          <Link className="home button" to={"/clients"}> Clients </Link> 
          <Link className="home button" to={"/clients/:id/jobs/:jobId"}> Current Jobs </Link> 
          <Link className="home button" to={"/trackstatus"}> Track status </Link> 
        </form>
      </div>
    );
  }
}

export default withAuth(Private);
