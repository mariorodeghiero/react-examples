import React, {Component} from 'react';
import './App.css';
import Changetext from './components/change-text';
import List from './components/array';
import Checkbox from './components/check-box';
import Summary from './components/Summary';

class App extends Component {
  render() {
    return (
      <div>
        <Summary/>
        <div className="show">
          <Changetext/>
          <List/>
          <Checkbox/>
        </div>
      </div>
    );
  }
}

export default App;
