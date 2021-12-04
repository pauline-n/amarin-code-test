import React from 'react'
import {Card, Button} from "react-bootstrap";
// import {mg1, room2, room3} from '.../public/images'

function Rooms() {
    return (
      <div>
        <div className="rooms">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="images/img1.jpg"
              height="196px"
              className="single"
            />
            <Card.Body className="cardbody">
              <Card.Title>Room 1</Card.Title>
              <Card.Text>
                Single bed for a single person.
                <br />
                Price per room: Ugx 20,000/=
              </Card.Text>
              <Button variant="primary">Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/room2.jpg" />
            <Card.Body className="cardbody">
              <Card.Title>Room 2</Card.Title>
              <Card.Text>
                Kingsize single bed for a couple
                <br />
                Price per room: Ugx 100,000/=
              </Card.Text>
              <Button variant="primary">Book</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/room3.jpg" />
            <Card.Body className="cardbody">
              <Card.Title>Room 3</Card.Title>
              <Card.Text>
                Double bed for a single person or two people, spacious with a
                balcony .
                <br />
                Price per room: Ugx 120,000/=
              </Card.Text>
              <Button variant="primary">Book</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
}

export default Rooms
