import React, { Component } from "react";
import "./style.css";
import Algorithm from "../../components/Algorithm";
import Algorithms from "../../algorithms";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Publications extends Component {
  state = {
    Algorithms,
    value: "",
    copied: false
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
            >
              <CopyToClipboard
                text={algor.algorithm}
                onCopy={() => this.setState({ copied: true })}
              >
                <span className="copyBtn">Copy this Algorithm</span>
              </CopyToClipboard>
            </Algorithm>
          </div>
        ))}
      </div>
    );
  }
}

export default Publications;
