import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="counter">
          <Link className="link" to="/counter">
            Counter
          </Link>
        </div>
        <div className="todolist">
          <Link className="link" to="/todolist">
            To Do List
          </Link>
        </div>
        <Link className="link" to="/booklist">
          Book List
        </Link>
      </div>
    );
  }
}

export default NavBar;
