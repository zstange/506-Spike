import React, {useState} from "react"; 
import Axios from 'axios';
import { Form, Button, Row, Col, Container, InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";
import './App.css';

function RentalForm(props) {
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
        console.log(event.target.elements.phoneNumber.value)
        console.log(event.target.elements.email.value)
        console.log(event.target.elements.address1.value)
        console.log(event.target.elements.address2.value)
        console.log(event.target.elements.city.value)
        console.log(event.target.elements.state1.value)
        console.log(event.target.elements.zipcode.value)
        console.log(event.target.elements.aptOption.value)
        console.log(event.target.elements.bedOption.value)
		
		Axios.post("http://localhost:3001/RenterApplication",{
		uid: props.userID,
        aptOption: event.target.elements.aptOption.value,
        bedOption: event.target.elements.bedOption.value,
        }).then((response) => {
            if(response.data.err) {
                alert(response.data.err);
            }
            else if (response.data.message) {
                alert(response.data.message);
            } else {
                window.location = "/RenterHome";
            }
        });
		
		
        }          
    };   

    const handleCancel = (event) => {
        setValidated(true);
    }
  
    return (
        <>
            <Row>
            <div>
                <h1 className="rentalFormHeaders">Renter Application</h1>
            </div>
            </Row>
            
            <Row style={{padding: '5%'}}>
            <div >            
                <Form noValidate validated={validated} action="RenterHome" onSubmit={handleSubmit} onCancel={handleCancel}>
                    <h4 className="rentalFormLabels mb-3">Personal Information:</h4>
                    <Form.Group as={Row} className="mb-3" controlId="validationFirstName">
                        <Form.Label column sm="3" className="rentalFormLabels">First Name</Form.Label>
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
                        <Form.Label column sm="3" className="rentalFormLabels">Last Name</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            required
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            />
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationPhoneNumber">
                        <Form.Label column sm="3" className="rentalFormLabels">Phone Number</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            required
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            />
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                        <Form.Label column sm="3" className="rentalFormLabels">Email Address</Form.Label>
                        <Col sm="9">
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationAddress1">
                        <Form.Label column sm="3" className="rentalFormLabels">Address</Form.Label>
                        <Col sm="9" className="">
                            <Form.Control type="text" name="address1" placeholder="Address" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid address.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationAddress2">
                        <Form.Label column sm="3" className="rentalFormLabels">Address 2</Form.Label>
                        <Col sm="9" className="">
                            <Form.Control type="text" name="address2" placeholder="Address 2"/>
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="validationCity">
                        <Form.Label column sm="3" className="rentalFormLabels">City</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" name="city" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid city.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationState">
                        <Form.Label column sm="3" className="rentalFormLabels">State</Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" name="state1" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid state.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="validationZipcode">
                        <Form.Label column sm="3" className="rentalFormLabels">Zipcode</Form.Label>
                        <Col sm="5">
                            <Form.Control type="number" name="zipcode" placeholder="Zipcode" required />
                            <Form.Control.Feedback type="invalid">Please provide a valid zipcode.
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    <div className="mb-3">
                        <h4 className="rentalFormLabels mt-4 mb-3">Apartment Options:</h4>
                        <Form.Group as={Row} controlId="validationApartmentOption">
                            <Form.Label column sm="4" className="rentalFormLabels">Desired Apartment</Form.Label>
                                <Col sm="8">
                                    <Form.Select aria-label="Default select example" className="mb-3" name="aptOption" required>
                                        <option value="">Choose...</option>
                                        <option value="Apartment 1">Apartment 1</option>
                                        <option value="Apartment 2">Apartment 2</option>
                                        <option value="Apartment 3">Apartment 3</option>
                                    </Form.Select>
                                </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="validationApartmentBedOption">
                            <Form.Label column sm="4" className="rentalFormLabels">Beds</Form.Label>
                                <Col sm="8">
                                    <Form.Select aria-label="Default select example" className="mb-3" name="bedOption" required>
                                        <option value="">Choose...</option>
                                        <option value="1 Bed">1 Bed</option>
                                        <option value="2 Beds">2 Beds</option>
                                        <option value="3 Beds">3 Beds</option>
                                    </Form.Select>
                                </Col>
                        </Form.Group>
                    </div>
                
                    <div >
                        <Form.Group as={Row} className="mb-4">
                        <Form.Label column sm={3}></Form.Label>
                            <Col sm={9}>
                                <Form.Check style={{textAlign: 'left', color: 'black'}}
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
                    <a href="../" id="cancel" name="cancel" className="btn btn-danger btn-lg" style={{display: 'inline-block'}}>Cancel</a>
                </div>         
            </div>
       
            </Row> 
        </>
    );
  }

class RenterApplication extends React.Component {
  render() {
    return (
        <>
            <Container fluid style={{ width: 'calc(80vw - 10px)', height: 'calc(100vh - 10px)', marginTop: '40px', background: 'white', overflowY: 'scroll'}}>
                <Row>
                    <RentalForm userID={this.props.userID}/>
                </Row>
            </Container>
        </>
    );
  }
}

export default RenterApplication;