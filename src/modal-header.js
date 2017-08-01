import React, { Component } from "react";
import PropTypes from "prop-types";

export class ModalHeader extends Component {
  static propTypes = {
    onHide: PropTypes.func.isRequired
  };
  render() {
    const { children, onHide } = this.props;

    return (
      <div className="modal-header">
        {children}
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={onHide}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
