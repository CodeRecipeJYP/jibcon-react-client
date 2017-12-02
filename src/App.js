import React, { Component } from 'react';
import {Button, Grid, Jumbotron} from "react-bootstrap";
import SearchForm from "./component/SearchForm";
import PushList from "./component/PushList";
import FirebaseDatabase from "./firebase/FirebaseDatabase"
import SensorValueList from "./component/SensorValueList";
import SensorValueRepo from "./firebase/repo/SensorValueRepo";

class App extends Component {
  componentDidMount = () => {
    console.log("componentDidMount");
    // this.loadData(true);
    this.initDataListener();
  };

  initDataListener = () => {
    SensorValueRepo.setOnDataChangedListener((results) => this.setState({
      ...this.state,
      sensorValueList: results,
    }));
  };

  loadData = (forceUpdate) => {
    this.loadPushData(forceUpdate);
    this.loadSensorValueData(forceUpdate);
  };

  loadSensorValueData = (forceUpdate) => {
    if (!forceUpdate) {
      if (this.state.sensorValueList.length !== 0) {
        return;
      }
    }

    SensorValueRepo.getSensorValueList((results) => this.setState({
      ...this.state,
      sensorValueList: results,
    }));
  };

  loadPushData = (forceUpdate) => {
    if (!forceUpdate) {
      if (this.state.pushList.length !== 0) {
        return;
      }
    }

    FirebaseDatabase.getPushList((results) => this.setState({
      ...this.state,
      pushList: results,
    }));
  };

  addPush = () => {
    FirebaseDatabase.insertPush()
      .then(new Promise((resolve, reject) => {
        // this.loadPushData(true);
        resolve();
      }));
  };

  addSensorValue = () => {
    const tmp = SensorValueRepo.insertSensorValue("123", 1);
    console.log("App.js", "addSensorValue/", tmp);
    tmp.then(new Promise((resolve, reject) => {
      // this.loadSensorValueData(true);
      resolve();
    }));
  };

  resetSensorValue = () => {
    SensorValueRepo.resetData(() => {});
    console.log("App.js", "resetSensorValue");
  };

  state = {
    pushList: [],
    sensorValueList: [],
  };



  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>

            <SearchForm />
          </Grid>
        </Jumbotron>
        <PushList
          pushList={this.state.pushList}
          addPush={this.addPush}
        />

        <SensorValueList
          sensorValueList={this.state.sensorValueList}
          addSensorValue={this.addSensorValue}
          resetSensorValue={this.resetSensorValue}
        />
      </div>
    );
  }
}

export default App;
