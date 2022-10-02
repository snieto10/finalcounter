import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="counter">
          <Link to="/counter">Counter</Link>
        </div>
        <div className="todolist">
          <Link to="/todolist">To Do List</Link>
        </div>
        <div className="todolist">Books List</div>
      </div>
    );
  }
}

export default NavBar;
