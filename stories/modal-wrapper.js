import React, { Component } from "react";

export class ModalWrapper extends Component {
  state = {
    visible: false
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.setState({ visible: true })}
        >
          Launch modal
        </button>
        {React.cloneElement(
          React.Children.only(this.props.children),
          this.state
        )}
      </div>
    );
  }
}
