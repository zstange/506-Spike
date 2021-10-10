import React, {useState} from "react"; 
import Axios from 'axios';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl"
import {Route, withRouter} from 'react-router-dom'
import './App.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
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

  /* Handles the redirect to the renter payment page */
  handleRenterPaymentTEST(event) {
    this.props.history.push("RenterPayment");
  }

  /* TODO -- Handles the redirect to the account page */
  handleLogin(event) { /* Check if either email or password boxes are blank */
    let username = this.state.email.trim();
    let password = this.state.password.trim();

    if (this.state.email.trim().length == 0 || this.state.password.trim().length == 0) { 
        alert("Please fill out both an email and password.");
        return;
      }

    Axios.post("http://localhost:3001/login",{
    username: this.state.email.trim(),
    password: this.state.password.trim()
    }).then((response) => {
      if(response.data.message){
        alert("Wrong username/password combination!");
      }
        else{
          this.props.history.push('/RenterHome');
        }
    })
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
          <Button onClick = {() => this.handleRenterPaymentTEST()}>RenterPaymetTEST</Button>
        </div>   
      </>
    );
  }
}

export default withRouter(Login);