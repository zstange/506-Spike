import React, {useState} from "react"; 
import Axios from 'axios';
import FormControl from "react-bootstrap/FormControl"
import { Form, Button, Row, Col} from "react-bootstrap";
import {Route, withRouter} from 'react-router-dom'
import './App.css';


function LoginPage() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
      
    // Output Caputured Data
    if (form.checkValidity() === true) {
      console.log(event.target.elements.firstName.value)
      console.log(event.target.elements.lastName.value)
      console.log(event.target.elements.password.value)
      console.log(event.target.elements.phoneNumber.value)
      console.log(event.target.elements.email.value)
      console.log(event.target.elements.address1.value)
      console.log(event.target.elements.address2.value)
      console.log(event.target.elements.city.value)
      console.log(event.target.elements.state1.value)
      console.log(event.target.elements.zipcode.value)

      Axios.post("http://localhost:3001/CreateAccount",{
        email: this.state.email.trim(),
        password: this.state.password.trim(),
        }).then((response) => {
            this.props.history.push('/Login');
        });
      }          
    };   

  const handleCancel = (event) => {
      setValidated(true);
  }

  return (
      <>          
          <Row style={{padding: '2%'}}>
          <div >            
              <Form noValidate validated={validated} action="RenterHome" onSubmit={handleSubmit} onCancel={handleCancel}>
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

                  <Form.Group as={Row} className="mb-3" controlId="validationPassword">
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

                  <Button className="m-4" type="submit"  style={{display: 'inline-block'}}>Submit</Button>          
              </Form>        
          </div>
     
          </Row> 
      </>
  );
}

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

        <LoginPage />
        <div>          
          <Button className="my-2 "onClick = {() => this.handleCreateAccount()}>Create Account</Button>
          <br />
          <Button onClick = {() => this.handleRentalApplicationTEST()}>RenterApplicationTEST</Button>&nbsp;
          <Button onClick = {() => this.handleRenterPaymentTEST()}>RenterPaymetTEST</Button>&nbsp;
          <Button onClick = {() => this.handleRenterRequestsTEST()}>RenterRequestsTEST</Button>&nbsp;
          <Button onClick = {() => this.handleAdminRequestsTEST()}>AdminRequestsTEST</Button>&nbsp;
        </div>   
      </>
    );
  }
}

export default withRouter(Login);