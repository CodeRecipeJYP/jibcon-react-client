import React from 'react'
import {Button, Grid, ListGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import SensorValue from "./SensorValue";

const SensorValueList = (props) => (
  <Grid>
    <h2>SensorValueList</h2>
    <Button type="submit" onClick={props.addSensorValue}>
      Add
    </Button>
    <ListGroup>
      {props.sensorValueList.map((sensorValue, index) =>
        <SensorValue
          key={index}
          sensorValue={sensorValue} />
      )}
    </ListGroup>
  </Grid>
);

SensorValueList.propTypes = {
  sensorValueList: PropTypes.array.isRequired,
  addSensorValue: PropTypes.func.isRequired,
};

export default SensorValueList;