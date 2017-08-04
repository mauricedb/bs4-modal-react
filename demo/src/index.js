import React, { Component } from "react";
import { render } from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "../../src";

class Demo extends Component {
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
    const { visible } = this.state;
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.onShow}>
          Launch modal
        </button>
        <Modal visible={visible} onHide={this.onHide}>
          <ModalHeader>
            <ModalTitle>Modal title</ModalTitle>
          </ModalHeader>
          <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
          <ModalFooter>
            <button type="button" className="btn btn-secondary">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
