import React, { Component } from "react";
import "./style.css";
import Algorithm from "../../components/Algorithm";
import Algorithms from "../../algorithms";

class Publications extends Component {
  state = {
    Algorithms
  };

  render() {
    return (
      <div>
        {this.state.Algorithms.map(algor => (
          <div>
            <Algorithm
              key={algor.id}
              title={algor.title}
              subtitle={algor.subtitle}
              algorithm={algor.algorithm}
              testcase={algor.testcase}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Publications;
