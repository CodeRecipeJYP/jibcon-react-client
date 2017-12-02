import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import UserRepo from "../actions/UserRepo";
import {Button, Col, Grid, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import Consts from "../utils/Consts"

const playstoreUrl = Consts.playstoreUrl;

const PlayStore = (props) => {
  if (props.visibility) {
    return (
      <Button >
        <a href={playstoreUrl} className="button">OpenApp</a>
      </Button>
    );
  } else {
    return (<div></div>);
  }

};

PlayStore.propTypes = {
  visibility: PropTypes.bool.isRequired,
  signout: PropTypes.func.isRequired,
};

export default PlayStore;

