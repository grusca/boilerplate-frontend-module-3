import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
       <Link className="navItem" to={"/private"}> <i className="icon far fa-user" ></i> </Link>
       <Link className="navItem" to={"/clients"}> <i className="icon far fa-address-book" ></i> </Link>
       <Link className="navItem" to={"/clients"}> <i className="icon fas fa-list-ul" ></i> </Link>
       <Link className="navItem" to={"/clients"}> <i className="icon far fa-comments"></i></Link>
      </div>
    );
  }
}

export default withAuth(Navbar);
