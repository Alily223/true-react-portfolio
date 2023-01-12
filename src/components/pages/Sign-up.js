import React, { Component } from "react";
import axios from "axios";

class LogInSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Get the user name and password from the state
    const { name, password } = this.state;
    // Call the handleLogin prop function that was passed down from the App component
    this.props.handleLogin(name, password);
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="Sign-up-Wrapper">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LogInSignUp;

