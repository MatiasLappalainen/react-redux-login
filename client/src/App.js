import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Form from './Blocks/Form'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route path="/" component={Form}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
