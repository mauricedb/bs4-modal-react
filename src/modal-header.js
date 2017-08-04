import React, { Component } from "react";
import PropTypes from "prop-types";

export class ModalHeader extends Component {
  static propTypes = {
    onHide: PropTypes.func.isRequired,
    closeButton: PropTypes.bool
  };

  static defaultProps = {
    closeButton: true
  };

  getCloseButtonElement() {
    const { closeButton, onHide } = this.props;

    if (!closeButton) {
      return null;
    }

    return (
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={onHide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }
  render() {
    const { children } = this.props;
    const closeButton = this.getCloseButtonElement();

    return (
      <div className="modal-header">
        {children}
        {closeButton}
      </div>
    );
  }
}
