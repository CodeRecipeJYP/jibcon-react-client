import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Index from "./component/Index";

const App = () => (
  <BrowserRouter>
    <div className="container">
      {/*<Navbar/>*/}
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/invitation/:invitation_id" component={Index} />
        <Route component={Index} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
