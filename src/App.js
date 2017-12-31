import React, {Component} from 'react';
import Rx from 'rx-lite';
import {MuiThemeProvider} from "material-ui/styles/index";

import ProductInstanceList from "./components/ProductInstanceList/index";
import productinstance_service from "./firebase/productinstance_service";
import Header from "./components/Header";



class App extends Component {
  compositeDisposable = null;

  componentDidMount() {
    this.compositeDisposable = new Rx.CompositeDisposable();
    this.compositeDisposable.add(
      productinstance_service.productInstances.subscribe(
        (items) => {
          this.setState({
            productInstances: items,
          });
        }
      )
    );
  }

  state = {
    productInstances: {},
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <ProductInstanceList
              productInstances={this.state.productInstances}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
