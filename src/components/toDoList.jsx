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
    let obj = { id: 0, text: "" };
    let message = this.state.message;
    obj.id = this.state.messages.length;
    obj.text = message;
    messages.push(obj);
    let newMessage = "";
    this.setState({ messages, message: newMessage });
  };

  handleChange = (e) => {
    let message = this.state.message;
    message = e.currentTarget.value;
    this.setState({ message });
  };

  handleDelete = (m) => {
    let messages = this.state.messages.filter((message) => message.id !== m.id);
    this.setState({ messages });
  };

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
          <div key={m.id} className="extra">
            <div className="task">
              <div>{m.text}</div>
              <div onClick={() => this.handleDelete(m)} className="btn-delete">
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
