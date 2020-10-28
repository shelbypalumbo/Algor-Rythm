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
      <div className="algorithm_mochachai">
        {this.state.Algorithms.map(algor => (
          <div className="algorithm">
            <Algorithm
              key={algor.id}
              title={algor.title}
              subtitle={algor.subtitle}
              algorithm={algor.algorithm}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Publications;
