import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import NavigationComponent from "./navigation/naviagtion-component";
import Home from "./pages/Home";
import LogInSignUp from "./pages/Sign-up";
import Projects from "./pages/Projects";
import Certificates from "./pages/certificates";
import testimonials from "./pages/testimonials";
import UnfinishedProjects from "./pages/Unfinished-Projects";
import blog from "./pages/blog";
import hackerranks from "./pages/hackerranks";
import Contact from "./pages/Contact";
import CreateTestimonial from "./pages/CreateTestimonial";
import HireForFreelanceWork from "./pages/HireForFreelanceWork";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogInStatus: "NOT_LOGGED_IN",
      adminLogInStatus: "NOT_LOGGED_IN"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.setUserLogInStatus = this.setUserLogInStatus.bind(this);
    this.setAdminLogInStatus = this.setAdminLogInStatus.bind(this);
  }

  setUserLogInStatus(status) {
    this.setState({ userLogInStatus: status });
  }

  setAdminLogInStatus(status) {
    this.setState({ adminLogInStatus: status });
  }

  handleLogin(username, password) {
    axios
      .post("http://127.0.0.1:5000/users/login", { name: username, password: password })
      .then(response => {
        if(response.status === 200) {
          if(response.data.admin === true) {
            this.setState({ userLogInStatus: "LOGGED_IN", adminLogInStatus: "LOGGED_IN" });
          } else {
            this.setState({ userLogInStatus: "LOGGED_IN", adminLogInStatus: "NOT_LOGGED_IN" });
          }
        } else if(response.status === 401) {
          this.setState({ userLogInStatus: "NOT_LOGGED_IN", adminLogInStatus: "NOT_LOGGED_IN" });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationComponent
              userLogInStatus={this.state.userLogInStatus}
              adminLogInStatus={this.state.adminLogInStatus}
              setUserLogInStatus={this.setUserLogInStatus} setAdminLogInStatus={this.setAdminLogInStatus}
            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/sign-up"
                component={() => <LogInSignUp handleLogin={this.handleLogin} />}
              />

              <Route path="/projects" component={Projects} />

              <Route path="/certificates" component={Certificates} />

              <Route path="/testimonials" component={testimonials} />

              <Route
                path="/unfinished-projects"
                component={UnfinishedProjects}
              />

              <Route path="/blog" component={blog} />

              <Route path="/hackeranks" component={hackerranks} />

              {this.state.userLogInStatus === "LOGGED_IN" ? (
                <React.Fragment>
                  <Route path="/contact" component={Contact} />
                  <Route
                    path="/create-testimonial"
                    component={CreateTestimonial}
                  />
                  <Route
                    path="/hire-for-freelance-work"
                    component={HireForFreelanceWork}
                  />
                </React.Fragment>
              ) : null}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
