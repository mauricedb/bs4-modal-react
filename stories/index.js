import React, { Component } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
);

import "bootstrap/dist/css/bootstrap.css";

import { Modal, ModalHeader } from "../src";
import { ModalWrapper } from "./modal-wrapper";

storiesOf("Modal", module)
  .add("with default props", () =>
    <ModalWrapper>
      <Modal>
        <ModalHeader>
          <h5 className="modal-title">Modal title</h5>
        </ModalHeader>
        <div className="modal-body">Hello Modal</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  )
  .add("No backdrop", () =>
    <ModalWrapper>
      <Modal backdrop={false}>
        <ModalHeader>
          <h5 className="modal-title">Modal title</h5>
        </ModalHeader>
        <div className="modal-body">Hello Modal</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  )
  .add("No animation", () =>
    <ModalWrapper>
      <Modal transition={false}>
        <ModalHeader>
          <h5 className="modal-title">Modal title</h5>
        </ModalHeader>
        <div className="modal-body">Hello Modal</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  )
  .add("No close on escape", () =>
    <ModalWrapper>
      <Modal keyboard={false}>
        <ModalHeader>
          <h5 className="modal-title">Modal title</h5>
        </ModalHeader>
        <div className="modal-body">Hello Modal</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  )
  .add("No close button", () =>
    <ModalWrapper>
      <Modal keyboard={false}>
        <ModalHeader closeButton={false}>
          <h5 className="modal-title">Modal title</h5>
        </ModalHeader>
        <div className="modal-body">Hello Modal</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary">
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  );
