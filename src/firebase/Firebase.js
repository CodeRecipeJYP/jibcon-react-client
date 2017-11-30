import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAgBKIdh-aXxPz1D9RJOvOt-gJZFnVvoqM",
  authDomain: "jibcon-smarts.firebaseapp.com",
  databaseURL: "https://jibcon-smarts.firebaseio.com",
  projectId: "jibcon-smarts",
  storageBucket: "jibcon-smarts.appspot.com",
  messagingSenderId: "1048863648409"
};
const Firebase = firebase.initializeApp(config);

export default Firebase;