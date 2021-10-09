import React, {useState} from "react"; 
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl"

class Login extends React.Component {

  constructor() {
    super();
    this.state = {value: '', email: "", password: ""};  /* state array */
  }

  /* Handles changes to a login box by updating the appropriate state in this.state */
  handleChange(name, event) {
    this.setState({[name]: event.target.value});
  }

  /* Handles the redirect to the create account page */
  handleCreateAccount(event) {
    this.props.history.push("CreateAccount");
  }

  /* Handles the redirect to the create account page */
  handleRentalApplicationTEST(event) {
    this.props.history.push("RenterApplication");
  }

  /* TODO -- Handles the redirect to the account page */
  handleLogin(event) { /* Check if either email or password boxes are blank */
    if (this.state.email.trim().length == 0 || this.state.password.trim().length == 0) { 
      alert("Please fill out both an email and password.");
    }
    else if (1 == 1) { /* TODO -- Check if email and password are valid*/ 
      this.props.history.push("RenterHome");
    }  
    else { 
      alert("Invalid email and/or password. Please try again.")
    }
  }

  render() {
    return (
      <>
        <img src="MadRentals_Logo_Light.png" height="auto" width="auto"></img>
        <FormControl placeholder = "Email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
        <FormControl placeholder = "Password" value={this.state.password}  onChange={this.handleChange.bind(this, "password")} />
        <div>
          <Button onClick = {() => this.handleCreateAccount()}>Create Account</Button>
          <Button onClick = {() => this.handleLogin()}>Login</Button>
          <Button onClick = {() => this.handleRentalApplicationTEST()}>RenterApplicationTEST</Button>
        </div>   
      </>
    );
  }
}

export default Login;