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

const Display = {
  HIDDEN: "hidden",
  SHOWING: "showing",
  VISIBLE: "visible",
  HIDING: "hiding"
};

export class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
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

  componentWillReceiveProps(nextProps) {
    const display = this.getDisplay(nextProps);
    const { transition } = nextProps;

    switch (display) {
      case Display.HIDDEN:
        break;
      case Display.SHOWING:
        break;
      case Display.VISIBLE:
        if (transition) {
          const handle = setTimeout(() => {
            this.setState({ handle: 0 });
          }, 300);
          this.setState({ handle });
        }
        break;
      case Display.HIDING:
        break;
    }
  }

  render() {
    const display = this.getDisplay(this.props);
    const { backdrop, transition } = this.props;

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
