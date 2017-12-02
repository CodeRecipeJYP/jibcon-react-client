import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import { BrowserRouter } from 'react-router-dom';

import InvitationRepo from "../actions/InvitationRepo";
import LoginNav from "./LoginNav";
import HouseInfo from "./HouseInfo";
import HouseRepo from "../actions/HouseRepo";
import UserRepo from "../actions/UserRepo";
import PlayStore from "./PlayStore";

class Invitation extends Component {

  constructor(props) {
    super();
    let invitation_id = props.match.params.invitation_id;
    InvitationRepo.getInvitationById(invitation_id, (result) => {
      console.log("HouseInfo/", "getInvitationById/", result);
      this.setState({
        invitation: result
      });

      HouseRepo.getHouse(result.house_id, (house) => {
        console.log("Invitation/house result", house);

        UserRepo.getUser(house.houseMaster, (user) => {
          this.setState({
            houseUser: user,
          });

        });

        this.setState({
          houseMaster: house.houseMaster.userinfo.full_name,
          houseName: house.houseName,
          houseType: house.houseType,
          houseAddress: house.houseAddress,
        })
      });
    });
  };

  acceptInvitation = () => {
    let user_id = this.state.user_id;
    let house_id = this.state.invitation.house_id;
    console.log("HouseInfo/", "acceptInvitation/", "user_id:", user_id, "house_id:", house_id);
    InvitationRepo.postAddToHouse(user_id, house_id, (result) => {
      console.log("HouseInfo/", "postAddToHouse/", result);
      if (result !== null && result.success === true) {
        this.setAcceptedTrue();
      } else {
        console.log("HouseInfo/", "acceptInvitation fail");
      }
    });
  };

  signout = () => {
    this.setState({
      userinfo: null,
    });
  };

  state = {
    invitation: null,
    isAccepted: false,
    user_id: null,
    userinfo: null,
    houseMaster: "",
    houseName: "",
    houseType: "",
    houseAddress: "",
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

            <LoginNav userinfo={this.state.userinfo} setUserInfo={this.setUserInfo} signout={this.signout}/>

          <HouseInfo
            master={this.state.houseMaster}
            name={this.state.houseName}
            house={this.state.houseType}
            address={this.state.houseAddress}
          />
          {/*<h2>user_id = {this.state.user_id}</h2>*/}
          {/*<h2>house_id = {this.state.invitation.house_id}</h2>*/}
          <Button disabled={!this.state.userinfo || this.state.isAccepted} type="submit" onClick={this.acceptInvitation}>{!this.state.isAccepted ? "Accept" : "Completed"}</Button>
          <PlayStore visibility={this.state.isAccepted} />
        </div>
      );
    }
  };
}

export default Invitation;