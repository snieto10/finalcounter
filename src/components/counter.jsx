import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  render() {
    if (this.props.data === "delete") return null;

    return (
      <React.Fragment>
        <div className="counter-block yellow">{this.props.data}</div>
        <div className="counter-block green" onClick={this.props.onAdd}>
          +
        </div>
        <div className="counter-block red" onClick={this.props.onDecrease}>
          -
        </div>
        <div className="counter-block">
          <button className="blue" onClick={this.props.onDelete}>
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
