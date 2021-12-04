// import {useState} from 'react'
import {Card, Button, ButtonToolbar} from "react-bootstrap";
// import AddRoomModal from './AddRoomModal';


function Rooms() {

    return (
      <div>
        <h1>Welcome to AMA HOTEL</h1>
        <p>Would you like to book a room?</p>
        <Button variant="info">Book Room</Button>
        <ButtonToolbar>
          <Button>
            Add Room
            {/* <AddRoomModal  /> */}
          </Button>
        </ButtonToolbar>

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
              <Button variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
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
              <Button variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
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
              <Button variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
}

export default Rooms
