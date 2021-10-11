import React, {useState} from "react"; 
import Axios from 'axios';
import { TextArea, Form, Button, Row, Col, Container, InputGroup, FormControl, Dropdown, DropdownButton} from "react-bootstrap";
import './App.css';

function RenterRequest(props) {
    const [validated, setValidated] = useState(false);

    const [contents, setContents] = useState({ProblemDescription: "", PriorityLevel: ""});

  // FOR THE SAKE OF EXAMPLE UNTIL THE DATABASE CAN GIVE US A LIST OF REQUESTS FOR THE RENTER HERE IS A DUMMY LIST
    const startingList = [
    {firstName: "Walter", lastName: "White", phoneNumber: "234", email: "email2", aptOption: "Apartment 1", bedOption: "1 Bed", roomNumber: "515", problem: "Gus Fring", 
        priority: "High", response: "Jesse Pinkman.", problemNumber: "1"}];

    const [requestList, setRequestList] = useState(startingList);

    function handleRemove(problemNumber) {
        alert("insert updating of list here, note we can now actually remove requests because we are assuming they got an admin response or it's no longer an issue")
        const filteredList = requestList.filter((request) => request.problemNumber != problemNumber);
        setRequestList(filteredList);
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      console.log(contents)
      setValidated(true);
        
      // Output Caputured Data
      if (form.checkValidity() === true) {
        Axios.post("http://localhost:3001/RenterRequests",{
		uid: props.userID,
        message: event.target.elements.message.value,
        priority: event.target.elements.priority.value,
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
		let newList = requestList.filter((request) => request);
        newList.push({firstName: "Walter", lastName: "White", phoneNumber: "234", email: "email2", aptOption: "Apartment 1", 
        bedOption: "1 Bed", roomNumber: "515", problem: contents.ProblemDescription, priority: contents.PriorityLevel, response: "", problemNumber: ""})
        setRequestList(newList);
        }          
    };   

    const handleChange = (event) => {     
        setContents({...contents, [event.target.id]: event.target.value.trim()})
      }

    const handleCancel = (event) => {
        setValidated(true);
    }

    const GenerateList = requestList.map((request) =>
            <div ><h4 className="rentalFormLabels mb-3"> </h4>
            <Form.Group as={Row} componentClass="textarea" className="mb-3" controlId="ProblemDescription">
                        <Form.Label column sm="3" className="rentalFormLabels">Request: </Form.Label>
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
                         readOnly
                         value = {request.response}
                            as="textarea" rows={10}
                        />
                        </Col>                  
            </Form.Group>
            <Button onClick = {handleRemove.bind(this,request.problemNumber)} className="m-4" type="submit" size="lg" style={{display: 'inline-block'}}>Delete Request</Button>
        </div>
    );
    
    function ShowList() {
        return GenerateList;
    }
  
    return (
        <>
            <Row>
            <div>
                <h1 className="rentalFormHeaders">Renter Maintenance Requests</h1>
            </div>
            </Row>
            
            <Row style={{padding: '5%'}}>
            <div >            
                <Form noValidate validated={validated} action="RenterHome" onSubmit={handleSubmit} onCancel={handleCancel}>
                    <h4 className="rentalFormLabels mb-3">Problem Description: </h4>
                    <Form.Group as={Row} componentClass="textarea" className="mb-3" controlId="ProblemDescription" onChange = {handleChange}>
                        <Form.Label column sm="3" className="rentalFormLabels"></Form.Label>
                        <Col sm="9" >
                        <Form.Control 
                            as="textarea" rows={10}
                            required
                            type="textarea"
                            name="message"
                        />
                        <Form.Control.Feedback type="invalid">Please provide a description of your maintenance request.</Form.Control.Feedback>
                        </Col>                  
                    </Form.Group>
                    <div className="mb-3">
                        <h4 className="rentalFormLabels mt-4 mb-3">Priority:</h4>
                        <Form.Group as={Row} controlId="PriorityLevel" onChange = {handleChange}>
                            <Form.Label column sm="4" className="rentalFormLabels"></Form.Label>
                                <Col sm="5">
                                    <Form.Select aria-label="Default select example" className="mb-3" name="priority" required>
                                        <option value="">Choose...</option>
                                        <option value={"Low"}>Low Priority</option>
                                        <option value={"Medium"}>Medium Priority</option>
                                        <option value={"High"}>High Priority</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">Please choose a priority level.</Form.Control.Feedback>
                                </Col>
                        </Form.Group>           
                    </div>
                    <Button className="m-4" type="submit" size="lg" style={{display: 'inline-block'}}>Submit New Maintenance Request</Button>          
                </Form>

                <div >
                    <a href="../" id="cancel" name="cancel" className="btn btn-danger btn-lg" style={{display: 'inline-block'}}>Back to Account Page</a>
                </div>         
            </div>
            <h4 className="rentalFormLabels mb-3">Previous Requests: </h4>
            <Form>
                    <ShowList />
                </Form>
            </Row> 
        </>
    );
  }

class RenterRequests extends React.Component {
  render() {
    return (
        <>
            <Container fluid style={{ width: 'calc(80vw - 10px)', height: 'calc(100vh - 10px)', marginTop: '40px', background: 'white', overflowY: 'scroll'}}>
                <Row>
                    <RenterRequest userID={this.props.userID}/>
                </Row>
            </Container>
        </>
    );
  }
}

export default RenterRequests;