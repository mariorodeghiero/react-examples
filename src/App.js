import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './components/Home';
import Changetext from './components/change-text';
import List from './components/array';
import Checkbox from './components/check-box';
import Summary from './components/Summary';
import NotFound from './components/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Summary/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/array" component={List}/>
            <Route path="/checkbox" exact component={Checkbox}/>
            <Route path="/change-text" component={Changetext}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;