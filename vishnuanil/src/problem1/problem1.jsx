import React, { Component } from "react";

class Problem extends Component {
  constructor(props) {
    super(props);
    // State to store the display value
    this.state = {
      display: "",
    };
  }

  // Handle button clicks for numbers and operators
  handleClick = (value) => {
    this.setState({ display: this.state.display + value });
  };

  // Remove last character
  handleBackspace = () => {
    this.setState({ display: this.state.display.slice(0, -1) });
  };

  // Clear display
  handleClear = () => {
    this.setState({ display: "" });
  };

  // Calculate result
  handleEqual = () => {
    try {
      // Using eval to calculate, but be cautious in real apps
      this.setState({ display: eval(this.state.display).toString() });
    } catch {
      this.setState({ display: "Error" });
    }
  };

  render() {
    // Generate numbers 0–9
    let numbers = [];
    for (let i = 0; i <= 9; i++) {
      numbers.push(i);
    }

    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Calculator container */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-64">
          <h3 className="text-xl font-bold mb-4 text-center">Calculator</h3>

          {/* Display */}
          <div className="bg-gray-100 text-right p-3 mb-4 rounded text-lg font-mono h-12 flex items-center justify-end">
            {this.state.display || "0"}
          </div>

          {/* Operation buttons */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              className="bg-gray-200 p-2 rounded text-white"
              onClick={() => this.handleClick("+")}
            >
              +
            </button>
            <button
              className="bg-gray-200 p-2 rounded text-white"
              onClick={() => this.handleClick("-")}
            >
              -
            </button>
            <button
              className="bg-gray-200 p-2 rounded text-white"
              onClick={() => this.handleClick("*")}
            >
              x
            </button>
            <button
              className="bg-gray-200 p-2 rounded text-white"
              onClick={() => this.handleClick("/")}
            >
              ÷
            </button>

            <button
              className="bg-red-300 p-2 rounded col-span-2 text-white"
              onClick={this.handleBackspace}
            >
              Backspace
            </button>
            {/* Clear */}
            <button
              className=" p-2 w-full rounded  text-white"
              onClick={this.handleClear}
            >
              Clear
            </button>
            <button
              className="bg-gray-200 p-2 rounded text-white"
              onClick={this.handleEqual}
            >
              =
            </button>
          </div>

          {/* Numbers */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {numbers.map((i, index) => (
              <button
                key={index}
                className="bg-blue-200 p-2 rounded hover:bg-blue-300 text-white"
                onClick={() => this.handleClick(i)}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Problem;
