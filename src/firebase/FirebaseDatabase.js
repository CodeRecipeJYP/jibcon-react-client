import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAgBKIdh-aXxPz1D9RJOvOt-gJZFnVvoqM",
  authDomain: "jibcon-smarts.firebaseapp.com",
  databaseURL: "https://jibcon-smarts.firebaseio.com",
  projectId: "jibcon-smarts",
  storageBucket: "jibcon-smarts.appspot.com",
  messagingSenderId: "1048863648409"
};
const firebaseDatabase = firebase.initializeApp(config).database();
const snapshotToArray = (snapshot) => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

const FirebaseDatabase = {
  getPushList: (done) => {
    firebaseDatabase.ref("pushList").once('value').then(
      (snapshot) => {
        console.log("FirebaseDatabse/ snapshot:", snapshot.val());
        done(snapshotToArray(snapshot));
      }
    );

    // setInterval(() => {
    //   done([
    //     {
    //       sender: 'Euijun',
    //       message: 'aaa',
    //       at: 'Mon 27 Nov 11:54',
    //     },
    //   ]);
    // }, 2000);
  },

  insertPush: () => {
    let key = firebaseDatabase.ref("pushList").push().key;
    let updates = {};
    updates[key] = {
      sender: 'Euijun2',
      message: 'aaa',
      at: 'Mon 27 Nov 11:54',
    };

    return firebaseDatabase.ref("pushList").update(updates);
  }
};

// module.exports = FirebaseDatabase;
export default FirebaseDatabase;