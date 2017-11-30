const firebase = require('firebase');

class SensorValue {
  constructor(sensor_id, value) {
    this.sensor_id = sensor_id;
    this.value = value;
    this.createdAt = firebase.database.ServerValue.TIMESTAMP;
  }
}

export default SensorValue;