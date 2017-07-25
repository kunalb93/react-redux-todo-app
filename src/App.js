import React, { Component } from 'react';
import Todo from './components/todo/';
import {
  BrowserRouter as Router,
  Route, Switch, Link
} from 'react-router-dom';

const About = () => (<div><h1>Welcome to Todo Application</h1><Link to='/todo'>Start</Link></div>);

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/todo" component={Todo} />
          <Route path="/" component={About} />
        </Switch>
      </Router>

    );
  }
}

export default App;
