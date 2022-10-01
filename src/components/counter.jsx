import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <React.Fragment>
        <div className="counter-block yellow">{this.state.count}</div>
        <div className="counter-block green">+</div>
        <div className="counter-block red">-</div>
        <div className="counter-block">
          <button className="blue">Delete</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
