import React, { Component } from "react";
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
    this.setState({ message });
  };

  handleDelete = () => {};

  render() {
    return (
      <React.Fragment>
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

        {this.state.messages.map((m) => (
          <div className="extra">
            <div className="task">
              <div>{m}</div>
              <div onClick={this.handleDelete} className="btn-delete">
                -
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ToDoList;
