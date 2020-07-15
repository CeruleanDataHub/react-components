import PropTypes from "prop-types";
import React from "react";
import ModalWrapper from "styled-react-modal";

const StyledModal = ModalWrapper.styled`
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0 0 18px -3px rgba(27, 27, 27, 0.8);
  width: 75%;
`;

export const Modal = ({ children, isOpen, onBackgroundClick }) => (
  <StyledModal isOpen={isOpen} onBackgroundClick={onBackgroundClick}>
    {children}
  </StyledModal>
);

Modal.propTypes = {
  /** Content of the modal */
  children: PropTypes.node,
  /** Is modal open or not */
  isOpen: PropTypes.bool,
  /** Handler function */
  onBackgroundClick: PropTypes.func
};

Modal.defaultProps = {
  children: "",
  isOpen: false,
  onBackgroundClick: () => null
};
