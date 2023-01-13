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
import Manager from "./pages/Manager";
import UserManager from "./pages/User-manager";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogInStatus: "NOT_LOGGED_IN",
      adminLogInStatus: "NOT_LOGGED_IN",
      message: "",
      username: ""
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
      .post("http://127.0.0.1:5000/users/login", {
        name: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.admin_logged_in === true) {
            this.setState({
              userLogInStatus: "LOGGED_IN",
              adminLogInStatus: "LOGGED_IN",
              message: "Succesfully Logged In As An Admin",
              username: username
            });
          } else {
            this.setState({
              userLogInStatus: "LOGGED_IN",
              adminLogInStatus: "NOT_LOGGED_IN",
              message: "Succesfully Logged In As " + username,
              username: username
            });
          }
        } else if (response.status === 401) {
          this.setState({
            userLogInStatus: "NOT_LOGGED_IN",
            adminLogInStatus: "NOT_LOGGED_IN",
            message: "Error password incorrect, try again"
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  userAuthorizedPages(){
    return [
      <React.Fragment key="navigation">
        <Route
          path="/contact"
          component={Contact}
          location={this.props.location}
        />

        <Route
          path="/create-testimonial"
          component={CreateTestimonial}
          location={this.props.location}
        />

        <Route
          path="/hire-for-freelance-work"
          component={HireForFreelanceWork}
          location={this.props.location}
        />

        <Route
          path="/manager"
          render={(props) =>
            this.state.adminLogInStatus === "LOGGED_IN" ? (
              <Manager {...props} />
            ) : null
          }
          location={this.props.location}
        />

        <Route
          path="/user-manager"
          render={(props) =>
            this.state.adminLogInStatus === "LOGGED_IN" ? (
              <UserManager {...props} />
            ) : null
          }
          location={this.props.location}
        />

      </React.Fragment>
    ]
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationComponent
              userLogInStatus={this.state.userLogInStatus}
              adminLogInStatus={this.state.adminLogInStatus}
              setUserLogInStatus={this.setUserLogInStatus}
              setAdminLogInStatus={this.setAdminLogInStatus}
            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/sign-up"
                component={(props) => <LogInSignUp {...props} handleLogin={this.handleLogin} message={this.state.message}/>}
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

              {this.state.userLogInStatus === "LOGGED_IN" ? this.userAuthorizedPages(): null}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
