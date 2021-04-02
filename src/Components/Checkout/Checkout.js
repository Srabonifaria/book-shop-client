import React from 'react';
import { Table } from 'react-bootstrap';

const Checkout = () => {

    return (
        <div>
            <h1>checkout</h1>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Description</th>
      <th>Quantity</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>##</td>
      <td>JavaScript Everywhere</td>
      <td>1</td>
      <td>234</td>
     </tr>
     <tr>
      <td>##</td>
      <td>Eloquent JavaScript</td>
      <td>1</td>
      <td>334</td>
    </tr>
  </tbody>
</Table>
</div>
    );
};

export default Checkout;