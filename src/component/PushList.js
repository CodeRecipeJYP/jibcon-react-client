import React from 'react'
import {Button, Grid, ListGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import Push from "./Push";

const PushList = (props) => (
    <Grid>
        <h2>Push List</h2>
        <Button type="submit" onClick={props.addPush}>
          Add
        </Button>
        <ListGroup>
          {props.pushList.map((push, index) =>
            <Push
              key={index}
              push={push} />
          )}
        </ListGroup>
    </Grid>
);

PushList.propTypes = {
  pushList: PropTypes.array.isRequired,
  addPush: PropTypes.func.isRequired,
};

export default PushList;