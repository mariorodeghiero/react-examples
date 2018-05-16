import React, {Component} from 'react';
import './App.css';
import Changetext from './components/change-text';
import List from './components/array';
import Checkbox from './components/check-box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Changetext/>
        <List/>
        <Checkbox/>
      </div>
    );
  }
}

export default App;
