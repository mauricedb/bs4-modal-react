# bs4-modal-react

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

See the storybook demos [here](https://mauricedb.github.io/bs4-modal-react/)

## Install
```
npm install bs4-modal-react
npm install bootstrap@4.0.0-beta
```

## Usage

Make sure you include the [Boostrap 4](http://getbootstrap.com/) CSS as that is not included in this package.

```jsx
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "bs4-modal-react";

class Demo extends Component {
  state = {
    visible: false
  };

  onShow = () => this.setState({ visible: true });
  onHide = () => this.setState({ visible: false });

  onSave = () => {
    alert("Saving changes");
    this.onHide();
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
            <button type="button" className="btn btn-secondary" onClick={this.onHide}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={this.onSave}>
              Save changes
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
```

[build-badge]: https://img.shields.io/travis/mauricedb/bs4-modal-react/master.png?style=flat-square
[build]: https://travis-ci.org/mauricedb/bs4-modal-react

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/bs4-modal-react

[coveralls-badge]: https://img.shields.io/coveralls/mauricedb/bs4-modal-react/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/mauricedb/bs4-modal-react
