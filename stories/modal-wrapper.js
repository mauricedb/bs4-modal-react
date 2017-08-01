import React, { Component } from "react";

export class ModalWrapper extends Component {
  state = {
    visible: false
  };

  onShow = () => {
    this.setState({ visible: true });
  };

  onHide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.onShow}>
          Launch modal
        </button>
        {React.cloneElement(React.Children.only(this.props.children), {
          visible: this.state.visible,
          onHide: this.onHide
        })}
      </div>
    );
  }
}
