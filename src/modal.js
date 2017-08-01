import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ClassName = {
  MODAL: "modal",
  SCROLLBAR_MEASURER: "modal-scrollbar-measure",
  BACKDROP: "modal-backdrop",
  OPEN: "modal-open",
  FADE: "fade",
  SHOW: "show"
};

export class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    backdrop: PropTypes.bool
  };

  static defaultProps = {
    backdrop: true
  };

  componentWillReceiveProps(nextProps) {}

  render() {
    const { backdrop } = this.props;

    if (!this.props.visible) {
      return null;
    }
    let backdropEl = null;

    if (backdrop) {
      backdropEl = (
        <div className={classnames(ClassName.BACKDROP, ClassName.SHOW)} />
      );
    }

    return (
      <div>
        {backdropEl}
        <div
          className={classnames(ClassName.MODAL, ClassName.SHOW)}
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
