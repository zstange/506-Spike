import React, {useState} from "react"; 
import { TextArea, Form, Button, Row, Col, Container, InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";
import './App.css';
import Axios from 'axios';

function AdminPay(props) {
    // FOR THE SAKE OF EXAMPLE UNTIL THE DATABASE CAN GIVE US A LIST OF RENTER INFO HERE IS A DUMMY LIST
    // This should be a list of all renters and their info
    let startingList = [{firstName: "Al", lastName: "Bundy", phoneNumber: "651-214-4155", email: "email", aptOption: "Apartment 1", bedOption: "2 Beds", 
        roomNumber: "69420", Rent: 1000, NewRent: 0, ExtraCharges: 0, renterNumber: 0},
    {firstName: "Walter", lastName: "White", phoneNumber: "234", email: "email2", aptOption: "Apartment 1", bedOption: "1 Bed", roomNumber: "515", 
         Rent: 10, NewRent: 0, ExtraCharges: 0, renterNumber: 1}];

    const [renterList, setRenterList] = useState(startingList);
    const [validRenter, setValidRenter] = useState({0: false, 1: false});
    const [renter, setRenter] = useState(renterList[0]);
    const [userID, setID] = useState(-1);
    
    const handleChange = (event) => {
        let newList = renterList;
        let renterNum = event.target.id.substring(0,1);
        let eventName = event.target.id.substring(1,event.target.id.length)
        switch (eventName) {
            case "NewRent": 
                newList[renterNum].NewRent = event.target.value;
                break;
            case "ExtraCharges": 
                newList[renterNum].ExtraCharges = event.target.value;
                break;
            default:
                console.log("bad input")
        }
        setRenterList(newList);
        console.log(renterList)
        console.log(validRenter)
    }

    const handleSubmit = (event) => {
        
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidRenter({...validRenter, [event.target.id]: true})
        
        if (form.checkValidity() === true) {
            let newList = renterList;
              newList[event.target.id].Rent+=(Number(renterList[event.target.id].NewRent)+Number(renterList[event.target.id].ExtraCharges));
              setRenterList(newList);
              
              Axios.post("http://localhost:3001/RenterPayment",{
                payment: -Number(renterList[event.target.id].rent),
                uid: userID
                }).then((response) => {
                    if(response.data.err) {
                        alert(response.data.err);
                    }
                    else if (response.data.message) {
                        alert(response.data.message);
                        window.location = `/AdminHome?id=${props.userID}`; 
                    } else {
                        alert("Payment failed.")
                        
                        
                    }
            });       
        }
        
        console.log(renterList);
    }

    const handleRenter = (event) => {
        setRenter(renterList[event.target.value])
    }

    const handleID = (event) => {
        setID(event.target.value)
    }
    
    function ShowList() {
        const GenerateList = renterList.map((renter) => 
        <option value={renter.renterNumber}>{renter.firstName + " " + renter.lastName}</option>
    );
        return GenerateList
    }
    
    return (
        <>
            <Row>
            <div>
                <h1 className="rentalFormHeaders">Admin Payment</h1>
            </div>
            
            </Row>
            <Row style={{padding: '5%'}}>

            <div className="mb-3">
            <h4 className="rentalFormLabels mt-4 mb-3">Select Renter:</h4>
                <Form.Group as={Row} controlId="AccountType" onChange = {handleRenter}>
                    <Form.Label column sm="3" className="rentalFormLabels">Renter:</Form.Label>
                        <Col sm="9">
                        <Form.Select id="AccountType" value = {renter.renterNumber} aria-label="Default select example" className="mb-3" name="aptOption" required>
                            <ShowList />
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Select account type.</Form.Control.Feedback>
                        </Col>
                </Form.Group>                            
            </div>

            <div ><h4 className="rentalFormLabels mb-3">Renter Information:</h4>
            <Form id = {renter.renterNumber} action = "AdminPayment" noValidate validated = {validRenter[renter.renterNumber]} onSubmit = {handleSubmit} onChange = {handleChange}>
            <Form.Group as={Row} className="mb-3" controlId="validationName">
                <Form.Label column sm="3" className="rentalFormLabels">Name:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    readOnly
                    value = {renter.firstName + " " + renter.lastName}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationPhone">
                <Form.Label column sm="3" className="rentalFormLabels">Phone Number:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    readOnly
                    value = {renter.phoneNumber}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationEmail">
                <Form.Label column sm="3" className="rentalFormLabels">Email:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    readOnly
                    value = {renter.email}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationApartment">
                <Form.Label column sm="3" className="rentalFormLabels">Apartment Info:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    readOnly
                    value = {renter.aptOption + " - " + renter.bedOption + " - Room " + renter.roomNumber}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="CurrentBalance" >
                <Form.Label column sm="3" className="rentalFormLabels">Current Balance:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    value = {"$"+renter.Rent}
                    readOnly
                    required
                    />
                </Col>                    
            </Form.Group>
            <Form.Group noValidate as={Row} className="mb-3" >
                <Form.Label column sm="3" className="rentalFormLabels">Enter New Charges:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    id = {renter.renterNumber+"NewRent"}
                    pattern = "^\d+.{0,1}\d{0,2}"
                    required
                    type="text"
                    placeholder="$000.00"
                    />
                    <Form.Control.Feedback type="invalid">Must be proper dollar amount.</Form.Control.Feedback>
                </Col>                    
            </Form.Group>
            <Form.Group noValidate as={Row} className="mb-3" >
                <Form.Label column sm="3" className="rentalFormLabels">Enter Extra Charges:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    id = {renter.renterNumber+"ExtraCharges"}
                    pattern = "^\d+.{0,1}\d{0,2}"
                    type="text"
                    required
                    placeholder="$000.00"
                    />
                    <Form.Control.Feedback type="invalid">Must be proper dollar amount.</Form.Control.Feedback>
                </Col>                   
            </Form.Group>  
                 
            <Button className="m-4" type="submit" size="lg" style={{display: 'inline-block'}}>Submit</Button>          
            
                </Form>
        </div>
        <div >    
            <h4 className="rentalFormLabels mt-4 mb-3">Select renter ID:</h4>         
                <Form onChange = {handleID}>
                <Col sm="9" >
                    <Form.Control 
                    id = "handleIDchange"
                    pattern = "^\d"
                    type="number"
                    required
                    />
                </Col> 
                </Form>        
            </div>
       
            </Row> 
        </>
    );
  }

class AdminPayment extends React.Component {
  render() {
    return (
        <>
            <Container fluid style={{ width: 'calc(80vw - 10px)', height: 'calc(100vh - 10px)', marginTop: '40px', background: 'white', overflowY: 'scroll'}}>
                <Row>
                    <AdminPay userID={this.props.userID}/>
                </Row>
            </Container>
        </>
    );
  }
}

export default AdminPayment;