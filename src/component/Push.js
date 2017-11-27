import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from "react-bootstrap";


const Push = props => (
  <ListGroupItem href="#" active>{props.push.sender}</ListGroupItem>
);

Push.propTypes = {
  push: PropTypes.object.isRequired,
};

export default Push;