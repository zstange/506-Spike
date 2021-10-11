import React, {useState} from "react"; 
import { Form, Button, Row, Col, Container, InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";
import './App.css';

function Payment() {
    const [validated, setValidated] = useState(false)
    const [contents, setContents] = useState({AccountName: "", RoutingNumber: "", ConfirmRoutingNumber: "",
      AccountNumber: "", ConfirmAccountNumber: "", AccountType: "", PaymentAmount: 0});
    const [BalanceDue, setBalance] = useState(100.00); // dummy until database entry

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(contents);
     
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      setValidated(true);

      if (form.checkValidity() === true) {
          let newBalance = BalanceDue-contents.PaymentAmount;
          setBalance(newBalance);
          event.preventDefault();
          alert("insert payment being sent to database here")
        }
    };   

    const handleCancel = (event) => {
      setValidated(true);
    }

    const handleChange = (event) => {  
      setContents({...contents, [event.target.id]: event.target.value.trim()})
    }
  
    return (
        <>
            <Row>
            <div>
                <h1 className="rentalFormHeaders">Renter Payment</h1>
            </div>
            </Row>
            
            <Row style={{padding: '5%'}}>
            <div >            
                <h4 className="rentalFormLabels mb-3">Balance Due</h4>
                    <Form.Group as={Row} className="mb-3" value = {contents.AccountName} onChange = {handleChange} >
                        <Form.Label column sm="3" className="rentalFormLabels">Balance Due</Form.Label>
                        <Col sm="9" >
                            <Form.Control 
                            readOnly
                            value = {"$"+BalanceDue}
                            />
                        </Col>                    
                </Form.Group>
                <Form noValidate validated = {validated} onSubmit = {handleSubmit} action="RenterPayment" onCancel={handleCancel}>
                    <h4 className="rentalFormLabels mb-3">Payment Info</h4>
                    <Form.Group as={Row} className="mb-3" value = {contents.AccountName} onChange = {handleChange} >
                        <Form.Label column sm="3" className="rentalFormLabels">Account Name</Form.Label>
                        <Col sm="9" >
                            <Form.Control 
                            id="AccountName"
                            required
                            type="text"
                            name="AccountName"
                            placeholder="Account Name"
                            />
                            <Form.Control.Feedback type="invalid">Account name cannot be blank.</Form.Control.Feedback>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3"  value = {contents.RoutingNumber} onChange = {handleChange}>
                        <Form.Label column sm="3" className="rentalFormLabels">Routing Number</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            id="RoutingNumber"
                            required 
                            pattern = "^\d{9}$"
                            type="text"
                            name="RoutingNumber"
                            placeholder="Routing Number (9 digits)"
                            />
                            <Form.Control.Feedback type="invalid">Routing number must be 9 digits.</Form.Control.Feedback>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" value = {contents.ConfirmRoutingNumber} onChange = {handleChange}>
                        <Form.Label column sm="3" className="rentalFormLabels">Confirm Routing Number</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            id="ConfirmRoutingNumber"
                            required
                            pattern = {contents.RoutingNumber}
                            type="text"
                            name="ConfirmRoutingNumber"
                            placeholder="Confirm Routing Number"
                            />
                            <Form.Control.Feedback type="invalid">Routing numbers do not match.</Form.Control.Feedback>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" value = {contents.AccountNumber} onChange = {handleChange}>
                        <Form.Label column sm="3" className="rentalFormLabels">Account Number</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            id="AccountNumber"
                            required
                            pattern = "^\d{3,17}$"
                            type="text"
                            name="AccountNumber"
                            placeholder="Account Number (3-17 digits)"
                            />
                            <Form.Control.Feedback type="invalid">Account number must be 3-17 digits.</Form.Control.Feedback>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" value = {contents.ConfirmAccountNumber} onChange = {handleChange}>
                        <Form.Label column sm="3" className="rentalFormLabels">Confirm Account Number</Form.Label>
                        <Col sm="9">
                            <Form.Control
                            id="ConfirmAccountNumber"
                            required
                            pattern = {contents.AccountNumber}
                            type="text"
                            name="ConfirmAccountNumber"
                            placeholder="Confirm Account Number"
                            />
                            <Form.Control.Feedback type="invalid">Account numbers do not match.</Form.Control.Feedback>
                        </Col>                    
                    </Form.Group>

                    <div className="mb-3">
                        <h4 className="rentalFormLabels mt-4 mb-3">Account Type:</h4>
                        <Form.Group as={Row} controlId="AccountType" value = {contents.AccountType} onChange = {handleChange}>
                            <Form.Label column sm="3" className="rentalFormLabels">Account Type</Form.Label>
                                <Col sm="9">
                                    <Form.Select id="AccountType" aria-label="Default select example" className="mb-3" name="aptOption" required>
                                        <option value="">Choose...</option>
                                        <option value="Checking Account">Checking Account</option>
                                        <option value="Saving Account">Saving Account</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Select account type.</Form.Control.Feedback>
                                </Col>
                        </Form.Group>

                    </div>
                    <h4 className="rentalFormLabels mb-3">Payment Amount</h4>
                    <Form.Group as={Row} className="mb-3" value = {contents.AccountName} onChange = {handleChange} >
                        <Form.Label column sm="3" className="rentalFormLabels">Payment Amount</Form.Label>
                        <Col sm="9" >
                            <Form.Control 
                            id="PaymentAmount"
                            pattern = "^\d+.{0,1}\d{0,2}"
                            required
                            type="text"
                            name="PaymentAmount"
                            placeholder="$000.00"
                            />
                            <Form.Control.Feedback type="invalid">Must be proper dollar amount.</Form.Control.Feedback>
                        </Col>                    
                    </Form.Group>
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

class RenterPayment extends React.Component {
  render() {
    return (
        <>
            <Container fluid style={{ width: 'calc(80vw - 10px)', height: 'calc(100vh - 10px)', marginTop: '40px', background: 'white', overflowY: 'scroll'}}>
                <Row>
                    <Payment/>
                </Row>
            </Container>
        </>
    );
  }
}

export default RenterPayment;