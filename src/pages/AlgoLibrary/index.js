import React, { Component } from "react";
import "./style.css";
import Algorithm from "../../components/Algorithm";
import Algorithms from "../../algorithms";
import { CopyToClipboard } from "react-copy-to-clipboard";

class AlgoLibrary extends Component {
  state = {
    Algorithms,
    copied: false,
    value: ""
  };

  render() {
    return (
      <div className="margin_top">
        {this.state.Algorithms.map(algor => (
          <Algorithm
            key={algor.id}
            title={algor.title}
            subtitle={algor.subtitle}
            algorithm={algor.algorithm}
            testcase={algor.testcase}
          >
            <br />
            <CopyToClipboard
              text={algor.algorithm}
              onCopy={() => this.setState({ copied: true })}
            >
              <span className="copyBtn">Copy this Algorithm</span>
            </CopyToClipboard>
          </Algorithm>
        ))}
      </div>
    );
  }
}

export default AlgoLibrary;
