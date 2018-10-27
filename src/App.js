import React, { Component } from 'react';
import './App.css'
// import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Main />
        </Router>
      </Provider>
    );
  }
}

export default App;