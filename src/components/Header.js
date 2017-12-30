import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import {AppBar, CircularProgress} from "material-ui";
import {red500} from "material-ui/styles/colors";

import productinstance_service, {
USERSTATE_LOADING, USERSTATE_SIGNEDIN, USERSTATE_SIGNEDOUT
} from "../firebase/productinstance_service";
import SigningBar from "./SigningBar";
import {auth} from "../firebase/firebase_app";


class Header extends Component {
  componentDidMount() {
    productinstance_service.userState.subscribe(
      (userState) => {
        console.log("Header.js/", "userState=", userState);
        this.setState({ userState: userState, });
      }
    );
  }

  state = {
    userState: USERSTATE_LOADING,
    signingVisibility: false,
    progressVisibility: false,
  };

  signout = () => {
    this.showProgress();
    auth.signOut().then(
      () => {
        this.hideProgress();
      }
    );
  };

  showProgress = () => {
    this.setState({
      progressVisibility: true,
    });
  };

  hideProgress = () => {
    this.setState({
      progressVisibility: false,
    });
  };

  showSigning = () => {
    this.setState({
      signingVisibility: true,
    });
  };

  render() {
    return (
      <div>
        <AppBar
          title="jibcon"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        >
          <div>
            {this.state.userState === USERSTATE_LOADING ? <CircularProgress color={red500}/> : null}
            {this.state.userState === USERSTATE_SIGNEDIN ? <Button onClick={this.signout}>SignOut</Button> : null}
            {this.state.userState === USERSTATE_SIGNEDOUT ? <Button onClick={this.showSigning}>SignIn</Button> : null}
          </div>
        </AppBar>
        {this.state.progressVisibility ? <CircularProgress/> : null}
        {this.state.signingVisibility && this.state.userState === USERSTATE_SIGNEDOUT
          ? <SigningBar /> : null}
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;
