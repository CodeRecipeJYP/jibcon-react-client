import * as firebase from "firebase";

import config from "../keys/firebasekey"


export const defaultApp = firebase.initializeApp(config);
export const auth = defaultApp.auth();
export const database = () => defaultApp.database();