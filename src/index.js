import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Redirect to="/index" />
      <Redirect from="/" to="/index" />
    </Switch>
  </Switch>
</BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
