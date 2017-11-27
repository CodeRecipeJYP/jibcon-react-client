import React, { Component } from 'react';
import {Button, Grid, Jumbotron} from "react-bootstrap";
import SearchForm from "./component/SearchForm";
import PushList from "./component/PushList";
import FirebaseDatabase from "./firebase/FirebaseDatabase"

class App extends Component {
  componentDidMount = () => {
    console.log("componentDidMount");
    this.loadData(true);
  };


  loadData = (forceUpdate) => {
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
    FirebaseDatabase.insertPush();
  };

  state = {
    pushList: [],
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
      </div>
    );
  }
}

export default App;
