import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Index from "./component/Index";
import Invitation from "./component/Invitation";

const App = () => (
  <BrowserRouter>
    <div className="container">
      {/*<Navbar/>*/}
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/invitation/:invitation_id" component={Invitation} />
        <Route component={Index} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
