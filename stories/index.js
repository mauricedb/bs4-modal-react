import React, { Component } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
);

import "bootstrap/dist/css/bootstrap.css";

import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "../src";
import { ModalWrapper } from "./modal-wrapper";

storiesOf("Modal", module)
  .add("with default props", () =>
    <ModalWrapper>
      <Modal>
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
    </ModalWrapper>
  )
  .add("No backdrop", () =>
    <ModalWrapper>
      <Modal backdrop={false}>
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
    </ModalWrapper>
  )
  .add("No animation", () =>
    <ModalWrapper>
      <Modal transition={false}>
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
    </ModalWrapper>
  )
  .add("No close on escape", () =>
    <ModalWrapper>
      <Modal keyboard={false}>
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
    </ModalWrapper>
  )
  .add("No close button", () =>
    <ModalWrapper>
      <Modal keyboard={false}>
        <ModalHeader closeButton={false}>
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
    </ModalWrapper>
  )
  .add("Scrolling long content", () =>
    <ModalWrapper>
      <Modal>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </ModalBody>
        <ModalFooter>
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </ModalFooter>
      </Modal>
    </ModalWrapper>
  );
