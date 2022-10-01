import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    count: [
      { id: 0, number: 0 },
      { id: 1, number: 0 },
    ],
  };

  handleAdd = (c) => {
    let count = [...this.state.count];
    let index = count.indexOf(c);
    count[index].number++;
    this.setState({ count });
  };

  handleDecrease = (c) => {
    let count = [...this.state.count];
    let index = count.indexOf(c);
    count[index].number--;
    this.setState({ count });
  };

  handleDelete = (c) => {
    let count = [...this.state.count];
    let index = count.indexOf(c);
    count[index].number = "delete";
    this.setState({ count });
  };

  handleNewCounter = () => {};
  render() {
    return (
      <React.Fragment>
        <div>
          <button className="btn-add">ADD</button>
        </div>
        {this.state.count.map((c) => (
          <Counter
            key={c.id}
            data={c.number}
            onAdd={() => this.handleAdd(c)}
            onDecrease={() => this.handleDecrease(c)}
            onDelete={() => this.handleDelete(c)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
