import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import { Form, Button, Row, Col, CardGroup} from "react-bootstrap";


class PropertiesArea extends React.Component {

  render() {
    return (
      <>
       <div>
        <Row >
          <Col>
          <h1 className="my-5 propertiesHeaderText">Available Properties</h1>
          </Col>
          <Row>

          </Row>
          
        </Row>
       
        <CardGroup>

        <Card className="mx-2 propertiesCardText">
          <Card.Img variant="top" src="apartment1.jpg"/>
          <Card.Body>
            <Card.Title className="cardText">Apartment 1</Card.Title>
            <Card.Text className="cardText">
            This immaculately presented apartment is set amongst manicured grounds within a private
             and secure complex. As a resident, you will have access to lifestyle amenities including 
             a lap pool, gymnasium, communal terraces, concierge service and basement parking.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mx-2 propertiesCardText">
          <Card.Img variant="top" src="apartment2.jpg"/>
          <Card.Body>
            <Card.Title className="cardText">Apartment 2</Card.Title>
            <Card.Text className="cardText">
            The living is easy in this impressive, generously proportioned contemporary 
            residence with lake views, located in the center of Madison .
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mx-2  propertiesCardText">
          <Card.Img variant="top" src="apartment3.jpg"/>
          <Card.Body>
            <Card.Title className="cardText">Apartment 3</Card.Title>
            <Card.Text className="cardText">
            This stylish residence is nestled in the heart of a large level block in a highly desirably location.
            </Card.Text>
          </Card.Body>
        </Card>
        
        </CardGroup>

        </div>
      </>
    )
  }
}

export default PropertiesArea;