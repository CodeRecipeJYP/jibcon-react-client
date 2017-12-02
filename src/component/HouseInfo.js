import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import UserRepo from "../actions/UserRepo";
import {ListGroupItem, ListGroup, Grid, Row, Col} from "react-bootstrap";


const HouseInfo = (props) => (
  <div>
    <ListGroup>
      <Grid>
        <Row>
          <Col xs={3} md={2}>
            <ListGroupItem active>Master</ListGroupItem>
          </Col>
          <Col xs={3} md={2}>
            <ListGroupItem>{props.master}</ListGroupItem>
          </Col>
        </Row>

        <Row>
          <Col xs={3} md={2}>
            <ListGroupItem active>Name</ListGroupItem>
          </Col>
          <Col xs={3} md={2}>
            <ListGroupItem>{props.name}</ListGroupItem>
          </Col>
        </Row>

        <Row>
          <Col xs={3} md={2}>
            <ListGroupItem active>House</ListGroupItem>
          </Col>
          <Col xs={3} md={2}>
            <ListGroupItem>{props.house}</ListGroupItem>
          </Col>
        </Row>

        <Row>
          <Col xs={3} md={2}>
            <ListGroupItem active>Address</ListGroupItem>
          </Col>
          <Col xs={3} md={2}>
            <ListGroupItem>{props.address}</ListGroupItem>
          </Col>
        </Row>
      </Grid>
    </ListGroup>
  </div>
);

HouseInfo.propTypes = {
  master: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default HouseInfo;