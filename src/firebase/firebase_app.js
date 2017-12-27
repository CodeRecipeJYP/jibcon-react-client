import * as firebase from "firebase";

import config from "../keys/firebasekey"



// console.log("firebase_app.js/", "config=", config);

const defaultApp = firebase.initializeApp(config);

export default defaultApp;