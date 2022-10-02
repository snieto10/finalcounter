import React, { Component } from "react";
import { Link } from "react-router-dom";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ul>
          <li>
            <Link to="/todolist/house">HOUSE</Link>
          </li>
          <li>
            <Link to="/todolist/car">CAR</Link>
          </li>
          <li>
            <Link to="/todolist/boat">BOAT</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDoList;
