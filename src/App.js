import React, { Component } from 'react';
import {Grid, Jumbotron} from "react-bootstrap";
import firebase from './firebase/firebase_app'

class App extends Component {
    render() {
      let email = "";
      let password = "";

      console.log("App.js/", "firebase=", firebase);
      firebase.auth()
        .createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log("App.js", error);
        });


        return (
            <div>
              <Jumbotron>
                <Grid>
                  <h1>Search App</h1>
                  <p>This is a simple search app</p>
                </Grid>
              </Jumbotron>
            </div>
        );
    }
}

export default App;
