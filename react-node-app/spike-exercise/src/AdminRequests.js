import React, {useState} from "react"; 
import { TextArea, Form, Button, Row, Col, InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";
import './App.css';

function AdminRequest() {
    // FOR THE SAKE OF EXAMPLE UNTIL THE DATABASE CAN GIVE US A LIST OF REQUESTS HERE IS A DUMMY LIST
    // Essentially how it works is that a list of concatenated user request arrays are given to the admin page to use and modify, but not delete
    // note one part is that the "problemNumber" fields within each array entry must be updated accordingly as one renter can send multiple requests.
    const startingList = [{firstName: "Al", lastName: "Bundy", phoneNumber: "651-214-4155", email: "email", aptOption: "Apartment 1", bedOption: "2 Beds", 
        roomNumber: "69420", problem: "I hate my wife.", priority: "Medium", response: "", problemNumber: "0"},
    {firstName: "Walter", lastName: "White", phoneNumber: "234", email: "email2", aptOption: "Apartment 1", bedOption: "1 Bed", roomNumber: "515", problem: "Gus Fring", 
        priority: "High", response: "", problemNumber: "1"}];

    let [requestList, setRequestList] = useState(startingList);

    function handleRemove(problemNumber) {
        alert("insert updating of list here, note we shouldn't actually remove the request until the renter reads the admin response")
        const filteredList = requestList.filter((request) => request.problemNumber != problemNumber);
        setRequestList(filteredList);
    }

    const handleChange = (event) => {
        let index = 0;
        for (let i = index; i < requestList.length; i++) {
            let problem = "Admin Response to Problem #" + requestList[i].problemNumber;
            if (problem == event.target.id) {
                index = i;
                break;
            }
        }
        requestList[index].response=event.target.value;
    }

    const GenerateList = requestList.map((request) =>
            <div ><h4 className="rentalFormLabels mb-3">Request Information:</h4>
            <Form.Group as={Row} className="mb-3" controlId="validationFirstName">
                <Form.Label column sm="3" className="rentalFormLabels">First Name:</Form.Label>
                <Col sm="9" >
                    <Form.Control 
                    readOnly
                    value = {request.firstName}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationLastName">
                <Form.Label column sm="3" className="rentalFormLabels">Last Name:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.lastName}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationPhoneNumber">
                <Form.Label column sm="3" className="rentalFormLabels">Phone Number:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.phoneNumber}
                    />
                </Col>                    
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                <Form.Label column sm="3" className="rentalFormLabels">Email Address:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.email}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationCity">
                <Form.Label column sm="3" className="rentalFormLabels">Apartment:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.aptOption}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationState">
                <Form.Label column sm="3" className="rentalFormLabels">Beds:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.bedOption}
                    />
                </Col>
            </Form.Group> 
            <Form.Group as={Row} className="mb-3" controlId="validationState">
                <Form.Label column sm="3" className="rentalFormLabels">Room Number:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.roomNumber}
                    />
                </Col>      
            </Form.Group>
            <Form.Group as={Row} componentClass="textarea" className="mb-3" controlId="ProblemDescription">
                        <Form.Label column sm="3" className="rentalFormLabels">Problem Description: </Form.Label>
                        <Col sm="9" >
                        <Form.Control 
                            as="textarea" rows={10}
                            readOnly
                            value = {request.problem}
                        />
                        </Col>                  
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="validationState">
                <Form.Label column sm="3" className="rentalFormLabels">Priority:</Form.Label>
                <Col sm="9">
                    <Form.Control 
                    readOnly
                    value = {request.priority + " Priority"}
                    />
                </Col>      
            </Form.Group>
            <Form.Group as={Row} componentClass="textarea" className="mb-3" controlId={"Admin Response to Problem #"+ request.problemNumber} onChange = {handleChange}>
                        <Form.Label column sm="3" className="rentalFormLabels">Admin Response: </Form.Label>
                        <Col sm="9" >
                        <Form.Control 
                            as="textarea" rows={10}
                        />
                        </Col>                  
            </Form.Group>
            <Button onClick = {handleRemove.bind(this,request.problemNumber)} className="m-4" type="submit" size="lg" style={{display: 'inline-block'}}>Send Response & Remove From List</Button>
        </div>
    );
    
    function ShowList() {
        return GenerateList;
    }
  
    return (
        <>
            <Row>
            <div>
                <h1 className="rentalFormHeaders">Admin Maintenance Requests</h1>
            </div>
            </Row>
            <Row style={{padding: '5%'}}>
                <Form>
                    <ShowList />
                </Form>
            <div >             

                <div >
                    <a href="../" id="cancel" name="cancel" className="btn btn-danger btn-lg" style={{display: 'inline-block'}}>Back to Account Page</a>
                </div>         
            </div>
       
            </Row> 
        </>
    );
  }

class AdminRequests extends React.Component {
  render() {
    return (
        <>
            <img src="MadRentals_Logo_Light.png" height="auto" width="auto"></img>
            
            <div>
                <Row className="mx-3">
                    <AdminRequest/>
                </Row>
            </div>
        </>
    );
  }
}

export default AdminRequests;