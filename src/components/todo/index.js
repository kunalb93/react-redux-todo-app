import React from 'react';
import Header from '../header/';
import TaskBar from '../taskbar/';
import TaskList from '../tasklist/';
import { Link } from 'react-router-dom';

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <Link to='/'>Home</Link>
        </div>
        <TaskBar />
        <TaskList />
      </div>
    );
  }
};
