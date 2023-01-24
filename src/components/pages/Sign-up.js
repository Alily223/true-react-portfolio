import React, { Component } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";

class LogInSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",
      formLoad: "Log_In",
      userinsertmessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitNewUser = this.handleSubmitNewUser.bind(this);
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

  handleSubmitNewUser(event) {
    event.preventDefault();

    // Hash the user's password using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.state.password, salt);

    axios
      .post("http://127.0.0.1:5000/users/signup", {
        name: this.state.name,
        password: hashedPassword
      })
      .then((response) => {
        if(response.status === 201){
          this.setState({ userinsertmessage: response.data.userinsertmessage });
        }
      })
      .catch((error) => {
        if(response.status === 409){
          this.setState({ userinsertmessage: response.data.userinsertmessage });
        }
        console.error(error);
      });
  }

  LogInForm() {
    return [
      <React.Fragment key="Log-In">
        <div className="Log-In-Wrapper">
          <h1>Log-In Here</h1>
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
            <button className="submit-button" type="submit">Log In</button>
          </form>
          
          <div className="Entrance-Message">
            <h3>{this.props.message}</h3>
          </div>
          
          <button className="Fragment-Button" onClick={() => this.setState({ formLoad: "Sign-up" })}> To Sign-up</button>
        </div>
      </React.Fragment>
    ]
  }

  SignUpForm() {
    return [
      <React.Fragment key="Log-In">
        <div className="Log-In-Wrapper">
          <h1>Sign-Up Here</h1>
          <form onSubmit={this.handleSubmitNewUser}>
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
            <button className="submit-button" type="submit">Sign Up</button>
          </form>
          
          <div className="Entrance-Message">
            <h3>{this.state.userinsertmessage}</h3>
          </div>
          
          <button className="Fragment-Button" onClick={() => this.setState({ formLoad: "Log-In" })}> To Log-In</button>
        </div>
      </React.Fragment>
    ]
  }

  render() {
    return (
      <div className="page-wrapper">
        
        {this.state.formLoad === "Log_In" ? this.LogInForm(): this.state.formLoad === "Sign-up" ? this.SignUpForm(): this.LogInForm()}

      </div>
    );
  }
}

export default LogInSignUp;

