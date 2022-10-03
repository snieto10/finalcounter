import React, { Component } from "react";
import Fire from "./fire";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

class BookList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Book List</h1>
          <ul>
            <li>
              <Link to="/booklist/fire">Fire</Link>
            </li>
            <li>
              <Link to="/booklist/Water">Water</Link>
            </li>
            <li>
              <Link to="/booklist/Earth">Earth</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BookList;
