import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem, Table} from "react-bootstrap";


const SensorValue = props => (
  <Table>
    <tbody>
    <tr>
      <td>
        <ListGroupItem href="#" active>{props.sensorValue.value}</ListGroupItem>
      </td>

      <td>
        <ListGroupItem href="#" active>{props.sensorValue.sensor_id}</ListGroupItem>
      </td>

      <td>
        <ListGroupItem href="#" active>{props.sensorValue.createdAt}</ListGroupItem>
      </td>
    </tr>
    </tbody>
  </Table>
);

SensorValue.propTypes = {
  sensorValue: PropTypes.object.isRequired,
};

export default SensorValue;