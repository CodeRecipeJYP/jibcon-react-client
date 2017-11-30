import Firebase from "./Firebase";
import Consts from "../utils/Consts"

const pushListRefName = Consts.pushListRefName;

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
    Firebase.database().ref(pushListRefName).once('value').then(
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
    let key = Firebase.database().ref(pushListRefName).push().key;
    let updates = {};
    updates[key] = {
      sender: 'Euijun2',
      message: 'aaa',
      at: 'Mon 27 Nov 11:54',
    };

    return Firebase.database().ref(pushListRefName).update(updates);
  }
};

// module.exports = SensorValueRepo;
export default FirebaseDatabase;