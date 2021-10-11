import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

class MyUserAccount extends React.Component {

  render() {
    return (
      <>
        <Card style={{ width: 'calc(80vw - 10px)', height: 'calc(100vh - 10px)',  top: '40px', background: 'white'}}>
          <Card.Title>{this.props.userID}</Card.Title>
        </Card>
      </>
    )
  }
}

export default MyUserAccount;