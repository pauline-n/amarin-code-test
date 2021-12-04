import React from 'react'
import Table from "react-bootstrap/Table";

function Pricing() {
    return (
      <div>
        <h1>Pricing of all our rooms</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Room Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Room 1</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Room 3</td>
              <td>120,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Room 2</td>
              <td>100,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
}

export default Pricing
