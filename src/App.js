import React, { Component } from "react";
import { Switch } from "react-router-dom";
import './App.css'

import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home"


import ClientList from './components/clients/ClientList';
import ClientDetails from './components/clients/ClientDetails';
import JobDetails from './components/clients/ClientDetails';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute exact path="/clients" component={ClientList} />
            <PrivateRoute exact path="/clients/:id" component={ClientDetails} />
            <PrivateRoute exact path="/clients/:id/jobs/:jobId" component={JobDetails} />

          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
