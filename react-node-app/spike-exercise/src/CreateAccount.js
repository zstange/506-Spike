import React, {useState} from "react"; 
import Axios from 'axios';
import { Form, Button, Row, Col} from "react-bootstrap";
import {withRouter} from 'react-router-dom'

function CreateAccountForm() {
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

      Axios.post("http://localhost:3001/CreateAccount",{
        firstName: event.target.elements.firstName.value,
        lastName: event.target.elements.lastName.value,
        password: event.target.elements.password.value,
        phoneNumber: event.target.elements.phoneNumber.value,
        email: event.target.elements.email.value,
        address1: event.target.elements.address1.value,
        address2: event.target.elements.address2.value,
        city: event.target.elements.city.value,
        state1: event.target.elements.state1.value,
        zipcode: event.target.elements.zipcode.value
        }).then((response) => {
            if(response.data.err) {
                alert(response.data.err);
            }
            else if (response.data.message) {
                alert(response.data.message);
            } else {
                window.location = "/Login";
            }
        });
      }          
    };

  return (
      <>
          <Row>
          <div>
              <h1 className="createAccountHeaders">Create Account</h1>
          </div>
          </Row>
          
          <Row style={{padding: '5%'}}>
          <div >            
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <h4 className="createAccountLabels mb-3">Personal Information:</h4>
                  <Form.Group as={Row} className="mb-3" controlId="validationFirstName">
                      <Form.Label column sm="3" className="createAccountLabels">First Name</Form.Label>
                      <Col sm="9" >
                          <Form.Control 
                          required
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          />
                      </Col>                    
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="validationLastName">
                      <Form.Label column sm="3" className="createAccountLabels">Last Name</Form.Label>
                      <Col sm="9">
                          <Form.Control
                          required
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          />
                      </Col>                    
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                      <Form.Label column sm="3" className="createAccountLabels">Email Address</Form.Label>
                      <Col sm="9">
                          <Form.Control type="email" name="email" placeholder="Enter email" required />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                      <Form.Label column sm="3" className="createAccountLabels">Create Password</Form.Label>
                      <Col sm="9">
                          <Form.Control type="password" name="password" placeholder="Enter password" required />
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="validationPhoneNumber">
                      <Form.Label column sm="3" className="createAccountLabels">Phone Number</Form.Label>
                      <Col sm="9">
                          <Form.Control
                          required
                          type="number"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          />
                      </Col>                    
                  </Form.Group>                  

                  <Form.Group as={Row} className="mb-3" controlId="validationAddress1">
                      <Form.Label column sm="3" className="createAccountLabels">Address</Form.Label>
                      <Col sm="9" className="">
                          <Form.Control type="text" name="address1" placeholder="Address" required />
                          <Form.Control.Feedback type="invalid">Please provide a valid address.
                          </Form.Control.Feedback>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="validationAddress2">
                      <Form.Label column sm="3" className="createAccountLabels">Address 2</Form.Label>
                      <Col sm="9" className="">
                          <Form.Control type="text" name="address2" placeholder="Address 2"/>
                      </Col>
                  </Form.Group>
                  
                  <Form.Group as={Row} className="mb-3" controlId="validationCity">
                      <Form.Label column sm="3" className="createAccountLabels">City</Form.Label>
                      <Col sm="9">
                          <Form.Control type="text" name="city" placeholder="City" required />
                          <Form.Control.Feedback type="invalid">Please provide a valid city.
                          </Form.Control.Feedback>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="validationState">
                      <Form.Label column sm="3" className="createAccountLabels">State</Form.Label>
                      <Col sm="9">
                          <Form.Control type="text" name="state1" placeholder="State" required />
                          <Form.Control.Feedback type="invalid">Please provide a valid state.
                          </Form.Control.Feedback>
                      </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="validationZipcode">
                      <Form.Label column sm="3" className="createAccountLabels">Zipcode</Form.Label>
                      <Col sm="5">
                          <Form.Control type="number" name="zipcode" placeholder="Zipcode" required />
                          <Form.Control.Feedback type="invalid">Please provide a valid zipcode.
                          </Form.Control.Feedback>
                      </Col>
                  </Form.Group>
              
                  <div >
                      <Form.Group as={Row} className="mb-4">
                      <Form.Label column sm={3}></Form.Label>
                          <Col sm={9}>
                              <Form.Check style={{textAlign: 'left'}}
                                  required
                                  label="Agree to terms and conditions"
                                  feedback="You must agree before submitting."
                                  feedbackType="invalid"
                              />
                          </Col>
                      </Form.Group>
                  </div>

                  <Button className="m-4" type="submit" size="lg" style={{display: 'inline-block'}}>Submit</Button>          
              </Form>

              <div >
                  <a href="/Login" id="cancel" name="cancel" className="btn btn-danger btn-lg" style={{display: 'inline-block'}}>Cancel</a>
              </div>         
          </div>     
          </Row> 
      </>
  );
}

class CreateAccount extends React.Component {
  render() {
    return (
      <>
        <img src="MadRentals_Logo_Light.png" height="auto" width="auto"></img>
        <div>
          <Row>
            <CreateAccountForm/>
          </Row>
        </div>   
      </>
    );
  }
}

export default withRouter(CreateAccount);