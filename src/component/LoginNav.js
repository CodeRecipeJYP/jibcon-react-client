import React from 'react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import UserRepo from "../actions/UserRepo";
import {ListGroupItem} from "react-bootstrap";


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
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    )} else {
    return (
      <div>
        <ListGroupItem active>{props.userinfo.full_name}</ListGroupItem>
        <ListGroupItem>{props.userinfo.type}</ListGroupItem>
      </div>
    );
  }
};

LoginNav.propTypes = {
  setUserInfo: PropTypes.func.isRequired,
};

export default LoginNav;