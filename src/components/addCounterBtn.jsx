import React, { Component } from "react";

class AddCounterBtn extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} className="btn-add">
        ADD
      </button>
    );
  }
}

export default AddCounterBtn;
