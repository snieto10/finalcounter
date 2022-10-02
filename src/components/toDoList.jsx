import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./toDoList.css";

class ToDoList extends Component {
  state = {
    message: "",
    messages: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let messages = this.state.messages;
    let message = this.state.message;
    let newMessage = "";
    messages.push(message);
    this.setState({ messages, message: newMessage });
  };

  handleChange = (e) => {
    let message = this.state.message;
    message = e.currentTarget.value;
    console.log(message);
    this.setState({ message });
  };

  render() {
    console.log(this.state.messages);
    return (
      <div>
        <h1 className="title">To Do List</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            value={this.state.message}
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
