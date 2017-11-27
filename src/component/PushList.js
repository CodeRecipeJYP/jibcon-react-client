import React from 'react'
import {Grid, ListGroup} from "react-bootstrap";
import PropTypes from 'prop-types';
import Push from "./Push";

const PushList = (props) => (
    <Grid>
        <h2>Push List</h2>
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
};

export default PushList;