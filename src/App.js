import React, { Component } from "react";

import "./App.css";
import Color from "./components/Color";

class App extends Component {
  constructor() {
    super();

    this.state = {
      opacity: "0.5",
      red: "226",
      green: "0",
      blue: "146"
    };

    this.updateOpacity = this.updateOpacity.bind(this);
    this.changeRed = this.changeRed.bind(this);
    this.changeGreen = this.changeGreen.bind(this);
    this.changeBlue = this.changeBlue.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  updateOpacity(e) {
    const opacity = e.target.value / 10;
    this.setState({
      opacity: opacity
    });
    this.changeColor();
  }

  changeRed(e) {
    const red = e.target.value;
    this.setState({
      red: red
    });
    this.changeColor();
  }
  changeGreen(e) {
    const green = e.target.value;
    this.setState({
      green: green
    });
    this.changeColor();
  }
  changeBlue(e) {
    const blue = e.target.value;
    this.setState({
      blue: blue
    });
    this.changeColor();
  }

  changeColor() {
    const newColor = `rgba(${this.state.red},${this.state.green},${
      this.state.blue
    }, ${this.state.opacity})`;

    document.documentElement.style.setProperty("--color", newColor);
    document.querySelector(".rgb").innerHTML = newColor || "rbg(0,0,0)";
  }

  componentDidMount() {
    this.changeColor();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="boxContainer">
            <div className="box" />
          </div>
          <div className="controls">
            <label htmlFor="opacity">Opacity</label>
            <input
              onChange={this.updateOpacity}
              id=""
              type="range"
              name="opacity"
              min="0"
              max="10"
              value={this.state.opacity * 10}
            />
            <Color
              color="red"
              changeHue={this.changeRed}
              value={this.state.red}
            />
            <Color
              color="green"
              changeHue={this.changeGreen}
              value={this.state.green}
            />
            <Color
              color="blue"
              changeHue={this.changeBlue}
              value={this.state.blue}
            />
            <h1 className="rgb">rgb(0,0,0)</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
