import React from 'react'
import Table from "react-bootstrap/Table";

function Customer() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Room Title</th>
              <th>Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Tito</td>
              <td>Room 1</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Mugisha</td>
              <td>Room 3</td>
              <td>120,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Marie</td>
              <td>Tracy</td>
              <td>Room 2</td>
              <td>100,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default Customer
