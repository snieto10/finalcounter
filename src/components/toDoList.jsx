import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./toDoList.css";

class ToDoList extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
    console.log(account);
  };

  render() {
    return (
      <div>
        <h1 className="title">To Do List</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            value={this.state.account.username}
            onChange={this.handleChange}
            className="inputsize"
            type="text"
            placeholder="Enter Task"
            id="data"
          />
          <button className="btn-submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default ToDoList;
