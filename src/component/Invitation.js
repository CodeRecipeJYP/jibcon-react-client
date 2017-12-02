import React, { Component } from 'react';
import {Button} from "react-bootstrap";


import InvitationRepo from "../actions/InvitationRepo";
import LoginNav from "./LoginNav";

class Invitation extends Component {

  constructor(props) {
    super();
    let invitation_id = props.match.params.invitation_id;
    InvitationRepo.getInvitationById(invitation_id, (result) => {
      console.log("Invitation/", "getInvitationById/", result);
      this.setState({
        invitation: result
      })
    });
  };

  acceptInvitation = () => {
    let user_id = this.state.user_id;
    let house_id = this.state.invitation.house_id;
    console.log("Invitation/", "acceptInvitation/", "user_id:", user_id, "house_id:", house_id);
    InvitationRepo.postAddToHouse(user_id, house_id, (result) => {
      console.log("Invitation/", "postAddToHouse/", result);
      if (result !== null && result.success === true) {
        this.setAcceptedTrue();
      } else {
        console.log("Invitation/", "acceptInvitation fail");
      }
    });
  };

  state = {
    invitation: null,
    isAccepted: false,
    user_id: null,
    userinfo: null,
  };

  setAcceptedTrue = () => {
    this.setState({
      isAccepted: true,
    });
  };

  setUserInfo = (userinfo) => {
    console.log("userinfo", userinfo);
    this.setState({
      userinfo: userinfo,
    });
    this.setUserId(userinfo.id);
  };

  setUserId = (user_id) => {
    this.setState({
      user_id: user_id,
    });
  };


  render() {
    if (this.state.invitation === null) {
      return (
        "progress"
      );
    } else {
      return (
        <div className="invitation">
          <LoginNav userinfo={this.state.userinfo} setUserInfo={this.setUserInfo}/>

          {/*<h2>user_id = {this.state.user_id}</h2>*/}
          {/*<h2>house_id = {this.state.invitation.house_id}</h2>*/}
          <Button disabled={this.state.isAccepted} type="submit" onClick={this.acceptInvitation}>Accept</Button>
        </div>
      );
    }
  };
}

export default Invitation;