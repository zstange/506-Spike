import React, {useState} from "react"; 
import Axios from 'axios';
import FormControl from "react-bootstrap/FormControl"
import { Form, Button, Row, Col} from "react-bootstrap";
import {Route, withRouter} from 'react-router-dom'
import './App.css';



class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', email: "", password: ""};  /* state array */
    this.validated = false;
    this.setValidated = false;
  }

  LoginPage() {
    // const [validated, setValidated] = React.useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      this.setValidated = true;
      
      
        
      // Output Caputured Data
      if (form.checkValidity() === true) {
        console.log(event.target.elements.password.value)
        console.log(event.target.elements.email.value)
  
        Axios.post("http://localhost:3001/Login",{
          email: event.target.elements.email.value,
          password: event.target.elements.password.value,
          }).then((response) => {
            if(response.data.message){
              alert("Wrong username/password combination!");
            }
              else{
                console.log("Im here")
                console.log("Im here")
                console.log("Im here")
                console.log(this.props.history)
                this.props.history.push('/CreateAccount');
                event.preventDefault();
              }
              
          });
        }          
      };   
  
    const handleCancel = (event) => {
        this.setValidated= true;
    }
  
    return (
        <>          
            <Row style={{padding: '2%'}}>
            <div >            
                <Form noValidate validated={this.validated} onSubmit={handleSubmit} onCancel={handleCancel}>
                    <Form.Group as={Row} className="mb-3" controlId="validationEmail">
                        <Form.Label column sm="3" className="createAccountLabels">Email</Form.Label>
                        <Col sm="9" >
                            <Form.Control 
                            required
                            type="email"
                            name="email"
                            placeholder="Email address"
                            />
                        </Col>                    
                    </Form.Group>
  
                    <Form.Group as={Row} className="mb-1" controlId="validationPassword">
                        <Form.Label column sm="3" className="createAccountLabels">Password</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            />
                        </Col>                    
                    </Form.Group>
  
                    <Button className="m-4" type="submit" style={{display: 'inline-block'}}>Submit</Button>          
                </Form>        
            </div>
       
            </Row> 
        </>
    );
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

  handleRenterRequestsTEST(event) {
    this.props.history.push("RenterRequests");
  }

  handleAdminRequestsTEST(event) {
    this.props.history.push("AdminRequests");
  }

  render() {
    return (
      <>
      
        <img src="MadRentals_Logo_Light.png" height="auto" width="auto"></img>

        {this.LoginPage()}
        <div> 
          <div>
                <p className="loginText">Don't have an account yet?</p>
          </div>         
          <Button variant="info" onClick = {() => this.handleCreateAccount()}>Create Account</Button>
		    </div>   
      </>
    );
  }
}

export default withRouter(Login);