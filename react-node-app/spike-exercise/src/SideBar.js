import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

class SideBar extends React.Component {

  render() {
    return (
      <>
        <Card style={{ width: 'calc(20vw - 5px)', marginLeft: '5px', height: 'calc(100vh - 10px)', background: '#376daf'}}>
          <Card.Body>
            <img src="MadRentals_Logo_Light.png" height="150px" width="auto"></img>
            <Card.Title style={{color: "#000"}}>{this.props.admin ? "Admin Homepage" : "Renter Homepage"}</Card.Title>
            <Form>
            </Form>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SideBar;
