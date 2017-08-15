import React from 'react';
import renderer from 'react-test-renderer';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "../src";

it('renders when invisible', () => {
  const tree = renderer.create(
      <Modal visible={false} onHide={() => {}}>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>Hello Modal</ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </ModalFooter>
      </Modal>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders when visible', () => {
  const tree = renderer.create(
      <Modal visible={true} onHide={() => {}}>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>Hello Modal</ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </ModalFooter>
      </Modal>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});