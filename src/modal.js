import React, { Component } from "react";
import PropTypes from "prop-types";

export class Modal extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
      return true;
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {

    if (!this.props.visible) {
        return null;
    }
    const backdrop = <div className={"modal-backdrop show"} />;

    return (
      <div>
        {backdrop}
        <div
          className={"modal show"}
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

Modal.propTypes = {
  visible: PropTypes.bool.isRequired
};

// export default Modal;
