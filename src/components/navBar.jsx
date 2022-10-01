import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav">
        <div className="counter">Counter</div>
        <div className="todolist">To Do List</div>
      </div>
    );
  }
}

export default NavBar;
