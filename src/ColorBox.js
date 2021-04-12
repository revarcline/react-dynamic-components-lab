import React, { Component } from "react";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0,
      todos: [],
    };
  }

  render() {
    return (
      <div className="color-box" style={{ opacity: this.state.opacity }}>
        {this.props.opacity >= 0.2 ? (
          <ColorBox opacity={this.props.opacity - 0.1} />
        ) : null}
      </div>
    );
  }
}
