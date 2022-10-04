import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="counter">
          <NavLink className="link" to="/counter">
            Counter
          </NavLink>
        </div>
        <div className="todolist">
          <NavLink className="link" to="/todolist">
            To Do List
          </NavLink>
        </div>
        <NavLink className="link" to="/booklist">
          Book List
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
