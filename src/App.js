import React, { Component } from "react";
import { Switch } from "react-router-dom";
import './App.css'

import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TrackStatus from "./pages/TrackStatus";
import UserSettings from "./pages/UserSettings";
import Clients from "./pages/Client";


import ClientDetails from './components/clients/ClientDetails';
import JobDetails from './components/jobs/JobDetails';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Switch>
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <AnonRoute path="/Trackstatus" component={TrackStatus} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute path="/usersettings" component={UserSettings} />
            <PrivateRoute exact path="/clients" component={Clients} />
            <PrivateRoute exact path="/clients/:id" component={ClientDetails} />
            <PrivateRoute exact path="/clients/:id/jobs/:jobId" component={JobDetails} />

          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
