import React, {Component} from 'react';
import Rx from 'rx-lite';

import {defaultApp} from "./firebase/firebase_app";
import SigningBar from "./components/SigningBar";
import ProductInstanceList from "./components/ProductInstanceList";
import productinstance_service from "./firebase/productinstance_service";



class App extends Component {
  compositeDisposable = null;

  componentDidMount() {
    this.compositeDisposable = new Rx.CompositeDisposable();
    this.compositeDisposable.add(
      productinstance_service.productInstances.subscribe(
        (items) => {
          this.setState({
            productInstances: items,
          });
        }
      )
    );
  }

  state = {
    isSignedIn: false,
    productInstances: {},
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
    defaultApp.auth().signOut()
      .then(() => {
        // console.log("signOutSuccessed");
        this.signOutSuccess();
      });
  };

  render() {
    return (
      <div>
        <SigningBar
          isSignedIn={this.state.isSignedIn}
          signOut={this.signOut}
          signedInSuccess={this.signInSuccess}/>
        <ProductInstanceList
          productInstances={this.state.productInstances}
        />
      </div>
    );
  }
}

export default App;
