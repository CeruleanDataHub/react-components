import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import ModalWrapper from "styled-react-modal";

import { Button } from "../Button/Button";
import { Typography } from "../Typography/Typography";

const StyledModal = ModalWrapper.styled`
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 18px -3px rgba(27, 27, 27, 0.8);
  width: 40%;
`;

const TextAlignRight = styled.div`
  text-align: right;

  button {
    margin: 0.2rem;
  }
`;

const ConfirmButton = styled.button`
  background: blue;
  color: white;
  font-weight: bold;
`;

const CancelButton = styled.button`
  color: blue;
  text-decoration: underline;
`;

export const Confirm = ({ title, content, isOpen, onConfirm, onCancel }) => (
  <StyledModal isOpen={isOpen} data-styled-modal-test>
    <Typography fontFamily="openSans">
      <div>{title}</div>

      <div>{content}</div>

      <TextAlignRight>
        <Button
          color="transparent"
          onClick={onCancel}
          as={CancelButton}
          data-cancel-button-test
        >
          Cancel
        </Button>

        <Button onClick={onConfirm} as={ConfirmButton} data-confirm-button-test>
          Confirm
        </Button>
      </TextAlignRight>
    </Typography>
  </StyledModal>
);

Confirm.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  isOpen: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

Confirm.defaultProps = {
  title: "",
  content: "",
  isOpen: false
};
