import React from 'react';
import {FirebaseAuth} from 'react-firebaseui';
import * as firebase from 'firebase'
import PropTypes from 'prop-types';
import firebaseui from 'firebaseui'

import {auth} from '../firebase/firebase_app'


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
      signInSuccess: () => false // Avoid redirects after sign-in.
    }
  };

  return (
    <div>
      <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
    </div>
  );
};

SigningBar.propTypes = {
};

export default SigningBar;
