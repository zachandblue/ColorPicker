import React from "react";

class Color extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.color}>{this.props.color}</label>
        <input
          onChange={this.props.changeHue}
          id={this.props.color}
          className="color"
          type="range"
          name={this.props.color}
          value={this.props.value}
          min="0"
          max="255"
        />
      </div>
    );
  }
}

export default Color;
