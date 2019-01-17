import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ClearButton } from "./components/ClearButton";
import { ButtonZero } from "./components/ButtonZero";
import { NegativeButton } from "./components/NegativeButton";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = (val) => {
      this.setState({ input: this.state.input + val });
  };

  toggleSign = () => {
    if (this.state.input !== "" ) {
      this.setState({
        input: parseInt(this.state.input, 10) * -1
      });
    }
    else {
      this.setState({
        input: ""
      })
    }
  };

  handleEqual = () => {
    try {
      this.setState({ input: math.eval(this.state.input) });
    }
    catch (e) {
      this.setState ({
        input: ""
      })
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              AC
            </ClearButton>
            <NegativeButton handleClick={this.toggleSign}>+/-</NegativeButton>
            <Button handleClick={this.addToInput}>%</Button>
            <Button handleClick={this.addToInput}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <ButtonZero handleClick={this.addToInput}>0</ButtonZero>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;