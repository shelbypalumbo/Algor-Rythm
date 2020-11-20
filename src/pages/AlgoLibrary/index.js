import React, { Component } from "react";
import "./style.css";
import Algorithm from "../../components/Algorithm";
import Algorithms from "../../algorithms";
import { CopyToClipboard } from "react-copy-to-clipboard";
import BacktoTopBtn from "../../components/BackToTopBtn";
import SearchBar from "../../components/SearchBar";

class AlgoLibrary extends Component {
  state = {
    Algorithms,
    copied: false,
    value: "",
    search: "",
    filteredAlgorithms: []
  };

  componentDidMount() {
    this.setState({ filteredAlgorithms: this.state.Algorithms });
  }

  findAlgo = () => {
    let filteredAlgos;
    let searched = this.state.search;

    filteredAlgos = this.state.Algorithms.filter(function (algorithm) {
      searched = searched.toLowerCase().charAt(0);
      console.log(searched);
      return searched === algorithm.title.toLowerCase().charAt(0);
    });
    console.log("filtered", filteredAlgos);
    return this.setState({
      filteredAlgorithms: filteredAlgos
    });
  };

  handleInputChange = event => {
    if (event.target.value === "") {
      this.setState({ filteredAlgorithms: this.state.Algorithms });
    } else {
      this.setState({ search: event.target.value }, () => {
        //Take the search input value as an argument for the findEmployee function
        this.findAlgo();
      });
    }
  };

  render() {
    console.log(this.state.filteredAlgorithms);
    return (
      <>
        <SearchBar onChange={this.handleInputChange} />
        <div className="margin_top">
          <BacktoTopBtn />

          {this.state.filteredAlgorithms.map(algor => (
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
      </>
    );
  }
}

export default AlgoLibrary;
