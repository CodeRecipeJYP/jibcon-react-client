import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import UserRepo from "../actions/UserRepo";
import {Button, Col, Grid, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";


const LoginNav = (props) => {
  const responseFacebook = (response) => {

    let token = response.accessToken;
    console.log(token);
    UserRepo.login("facebook", token, (user_id) => {
      props.setUserInfo(user_id);
    });
  };
  if (!props.userinfo) {
    console.log("props", props.userinfo);
    return (
      <FacebookLogin
        appId="440498979632151"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    )} else {
    return (
      <div>
        <ListGroup>
          <Grid>
            <Row>
              <Col xs={1} md={1}>
                <Image src={props.userinfo.pic_url} circle />
              </Col>
              <Col xs={3} md={2}>
                <ListGroupItem active>{props.userinfo.full_name}</ListGroupItem>
              </Col>
              <Col xs={3} md={2}>
                <ListGroupItem>{props.userinfo.type}</ListGroupItem>
              </Col>
              <Col xs={3} md={2}>
                <Button onClick={props.signout}>Logout</Button>
              </Col>
            </Row>
          </Grid>
        </ListGroup>

        <br />
        <br />
      </div>
    );
  }
};

LoginNav.propTypes = {
  setUserInfo: PropTypes.func.isRequired,
  signout: PropTypes.func.isRequired,
};

export default LoginNav;