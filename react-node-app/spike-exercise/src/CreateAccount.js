import React, {useState} from "react"; 
import Axios from 'axios';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl"
import {withRouter} from 'react-router-dom'

class CreateAccount extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', email: "", password: ""};  /* state array */
  }

  /* Handles changes to a account box by updating the appropriate state in this.state */
  handleChange(name, event) {
    this.setState({[name]: event.target.value});
  }

  /* Handles the redirect to the login page */
  handleCancel(event) {
    this.props.history.go(-1);
  }

  /* TODO -- Handles account registration */
  handleRegister(event) { /* Check if either email or password boxes are blank */
    let username = this.state.email.trim();
    let password = this.state.password.trim();

    if (username == "" || password == "") { 
        alert("Please fill out both an email and password.");
        return;
    }

    Axios.post("http://localhost:3001/CreateAccount",{
    username,password
    }).then((response) => {
        this.props.history.push('/Login');
    });
    
  }

  render() {
    return (
      <>
        <img src="MadRentals_Logo_Light.png" height="auto" width="auto"></img>
          <FormControl placeholder = "Email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
          <FormControl placeholder = "Password" value={this.state.password} onChange={this.handleChange.bind(this, "password")} />
        <div>
          <Button onClick = {() => this.handleCancel()}>Cancel</Button>
          <Button onClick = {() => this.handleRegister()}>Register</Button>
        </div>   
      </>
    );
  }
}

export default withRouter(CreateAccount);