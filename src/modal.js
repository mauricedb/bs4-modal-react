import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { ModalHeader } from "./modal-header";

const TRANSITION_DURATION = 300;

const ClassName = {
  MODAL: "modal",
  SCROLLBAR_MEASURER: "modal-scrollbar-measure",
  BACKDROP: "modal-backdrop",
  OPEN: "modal-open",
  FADE: "fade",
  SHOW: "show"
};

const Display = {
  HIDDEN: "hidden",
  SHOWING: "showing",
  VISIBLE: "visible",
  HIDING: "hiding"
};

export class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    backdrop: PropTypes.bool,
    transition: PropTypes.bool
  };

  static defaultProps = {
    backdrop: true,
    transition: true
  };

  state = {
    handle: 0
  };

  clearTimer() {
    if (this.handle) {
      clearTimeout(this.handle);
      this.setState({ handle: 0 });
    }
  }

  getDisplay(props) {
    let display = "";
    const { visible, transition } = props;
    const animating = !!this.state.handle;

    if (visible) {
      if (animating) {
        display = Display.SHOWING;
      } else {
        display = Display.VISIBLE;
      }
    } else {
      if (animating) {
        display = Display.HIDING;
      } else {
        display = Display.HIDDEN;
      }
    }

    return display;
  }

  onClickModal = e => {
    if (e.target.classList.contains(ClassName.MODAL)) {
      this.props.onHide();
    }
  };

  componentWillReceiveProps(nextProps) {
    const display = this.getDisplay(nextProps);
    const { transition } = nextProps;

    switch (display) {
      case Display.HIDDEN:
        if (transition) {
          const handle = setTimeout(() => {
            this.setState({ handle: 0 });
          }, TRANSITION_DURATION);
          this.setState({ handle });
        }
        break;
      case Display.SHOWING:
        break;
      case Display.VISIBLE:
        if (transition) {
          const handle = setTimeout(() => {
            this.setState({ handle: 0 });
          }, TRANSITION_DURATION);
          this.setState({ handle });
        }
        break;
      case Display.HIDING:
        break;
    }
  }

  render() {
    const display = this.getDisplay(this.props);
    const { backdrop, transition, onHide, children } = this.props;

    if (display === Display.HIDDEN) {
      return null;
    }
    let backdropEl = null;

    if (backdrop) {
      backdropEl = (
        <div
          className={classnames(ClassName.BACKDROP, {
            [ClassName.FADE]: transition,
            [ClassName.SHOW]: display === Display.VISIBLE
          })}
        />
      );
    }

    return (
      <div>
        {backdropEl}
        <div
          className={classnames(ClassName.MODAL, {
            [ClassName.FADE]: transition,
            [ClassName.SHOW]: display === Display.VISIBLE
          })}
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          onClick={this.onClickModal}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {React.Children.map(children, child => {
                if (child.type === ModalHeader) {
                  return React.cloneElement(child, { onHide });
                }
                return child;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
