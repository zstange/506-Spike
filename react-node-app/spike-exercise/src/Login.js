import React, {useState} from "react"; 
import Axios from 'axios';
import FormControl from "react-bootstrap/FormControl"
import { Form, Button, Row, Col} from "react-bootstrap";
import {Route, withRouter, useHistory} from 'react-router-dom'
import './App.css';


function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [contents, setContents] = useState({Email: "", Password: ""})

  const history = useHistory();

  const handleChange = (event) => {
    console.log(event.target.id)
    setContents({...contents, [event.target.id]: event.target.value.trim()})
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
      
    // Output Caputured Data
    if (form.checkValidity() === true) {
      event.preventDefault();
  
      
      
      
      
      console.log("apple");
      history.push('/RenterHome');
      

    }
    };   

  const handleCancel = (event) => {
      setValidated(true);
  }

  return (
      <>          
          <Row style={{padding: '2%'}}>
          <div >            
              <Form noValidate validated={validated} onChange = {handleChange} onSubmit={handleSubmit} onCancel={handleCancel}>
                  <Form.Group as={Row} className="mb-3" controlId="Email">
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

                  <Form.Group as={Row} className="mb-1" controlId="Password">
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

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', email: "", password: ""};  /* state array */
  }

  /* Handles changes to a login box by updating the appropriate state in this.state */
  handleChange(name, event) {
    
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