import React, { Component } from 'react';
import {Grid, Jumbotron} from "react-bootstrap";
import firebase_app from './firebase/firebase_app'
import SigningBar from "./components/SigningBar";



class App extends Component {
  state = {
    isSignedIn: false,
  };

  signInSuccess = (signinOrOut) => {
    let isSignedIn = !(signinOrOut === false);
    console.log("App.js/", "signInSuccess/", "signinOrOut=", signinOrOut, "isSignedIn=", isSignedIn);
    this.setState({
      isSignedIn: isSignedIn,
    });
    console.log("App.js/", "signInSuccess/", "this.state.isSignedIn=", this.state.isSignedIn);
  };

  signOutSuccess = () => {
    this.signInSuccess(false);
  };

  signOut = () => {
    firebase_app.auth().signOut()
      .then(() => {
        // console.log("signOutSuccessed");
        this.signOutSuccess();
      });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
            <SigningBar
              isSignedIn={this.state.isSignedIn}
              signOut={this.signOut}
              signedInSuccess={this.signInSuccess}/>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
