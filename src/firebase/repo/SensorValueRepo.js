import Firebase from "../Firebase";
import Consts from "../../utils/Consts"
import SensorValue from "../domain/SensorValue";
import ListUtils from "../../utils/ListUtils"

const sensorValueRefName = Consts.sensorValueRefName;
const db = Firebase.database();


const SensorValueRepo = {
  setOnDataChangedListener: (listener) => {
    db.ref(sensorValueRefName).orderByKey().on('value', (snapshot) => {
        console.log("FirebaseDatabse/ snapshot:", snapshot.val());
        let results = ListUtils.snapshotToArray(snapshot);
        results = results.reverse();
        listener(results);
      }
    );
  },

  getSensorValueList: (done) => {
    db.ref(sensorValueRefName).once('value').then(
      (snapshot) => {
        console.log("FirebaseDatabse/ snapshot:", snapshot.val());
        let results = ListUtils.snapshotToArray(snapshot);
        done(results);
      }
    );
  },

  insertSensorValue: (sensor_id, value) => {
    console.log("SensorValueRepo/", "insertSensorValue", "sensor_id", sensor_id, value);
    let key = db.ref(sensorValueRefName).push().key;
    let updates = {};

    updates[key] = new SensorValue(sensor_id, value);

    return db.ref(sensorValueRefName).update(updates);
  },

  resetData: (done) => {
    db.ref(sensorValueRefName).remove(() => {
      done();
    });
  }
};

export default SensorValueRepo;