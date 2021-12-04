import {useState} from 'react'
import {Button, Row, Col, Modal, Form} from 'react-bootstrap'

function AddRoomModal({...props}) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    

    const handleSubmit = (e) => {
        e.preventdefault();
        fetch(process.env.REACT_APP_API+'rooms', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                RoomId:null,
                RoomTitle: e.target.RoomTitle.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result)
        },
        (error)=>{
            alert('failed')
        }
        )
    }

    return (
      <div>
        <Modal.Dialog
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Room</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter title r.g Room 20"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Decription</Form.Label>
                    <Form.Control type="text" placeholder="Decribe the room" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price per Night</Form.Label>
                    <Form.Control type="text" placeholder="price" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onHide={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default AddRoomModal
