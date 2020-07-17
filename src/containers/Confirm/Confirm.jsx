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

export const Confirm = ({ title, text, isOpen, onConfirm, onCancel }) => (
  <StyledModal isOpen={isOpen}>
    <Typography fontFamily="openSans">
      <p>{title}</p>
      <p>{text}</p>
      <TextAlignRight>
        <Button color="transparent" onClick={onCancel} as={CancelButton}>
          Cancel
        </Button>
        <Button onClick={onConfirm} as={ConfirmButton}>
          Confirm
        </Button>
      </TextAlignRight>
    </Typography>
  </StyledModal>
);

Confirm.propTypes = {
  /** Confirm modal title */
  title: PropTypes.string,
  /** Confirm modal text */
  text: PropTypes.string,
  /** Is confirm open or not */
  isOpen: PropTypes.bool,
  /** Function for confirmation event */
  onConfirm: PropTypes.func,
  /** Function for cancellation event */
  onCancel: PropTypes.func
};

Confirm.defaultProps = {
  title: "",
  text: "",
  isOpen: false,
  onConfirm: () => null,
  onCancel: () => null
};
