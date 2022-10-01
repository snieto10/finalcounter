import React, { Component } from "react";
import Counter from "./counter";
import AddCounterBtn from "./addCounterBtn";

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

  handleNewCounter = () => {
    let count = [...this.state.count];
    let arrayNumber = count.length;
    count.push({ id: arrayNumber, number: 0 });
    this.setState({ count });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <AddCounterBtn onClick={this.handleNewCounter} />
        </div>
        {this.state.count.map((c) => (
          <div key={c.id}>
            <Counter
              data={c.number}
              onAdd={() => this.handleAdd(c)}
              onDecrease={() => this.handleDecrease(c)}
              onDelete={() => this.handleDelete(c)}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
