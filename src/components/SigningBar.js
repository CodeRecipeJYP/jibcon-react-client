import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import * as firebase from 'firebase'
import firebase_app from '../firebase/firebase_app'
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';
import firebaseui from 'firebaseui'


const SigningBar = (props) => {
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
      signInSuccess: () => {
        props.signedInSuccess();
        return false; // Avoid redirects after sign-in.
      }
    }
  };
  console.log("SigningBar.js/", "props.isSignedIn=", props.isSignedIn);

  return (
    <div>
      { props.isSignedIn ?
        <Button onClick={props.signOut}>Signout</Button>
        :
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase_app.auth()}/>
          }
    </div>
  );
};

SigningBar.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  signedInSuccess: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default SigningBar;
