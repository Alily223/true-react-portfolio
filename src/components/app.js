import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationComponent from './navigation/naviagtion-component';
import Home from './pages/Home';
import SignUp from "./pages/Sign-up";
import Projects from "./pages/Projects";
import Certificates from "./pages/certificates";
import testimonials from "./pages/testimonials";
import UnfinishedProjects from "./pages/Unfinished-Projects";
import blog from "./pages/blog";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div className="container">
        <Router>
          <div>
            <NavigationComponent/>

            <Switch>

              <Route exact path="/" component={Home} />

              <Route path="/sign-up" component={SignUp} />

              <Route path="/projects" component={Projects} />

              <Route path="/certificates" component={Certificates} />

              <Route path="/testimonials" component={testimonials} />

              <Route path="/unfinished-projects" component={UnfinishedProjects} />

              <Route path="/blog" component={blog} />
              
            </Switch>

          </div>
        </Router>
        

      </div>

    );
  }
}
