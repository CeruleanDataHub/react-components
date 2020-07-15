import PropTypes from "prop-types";
import React from "react";
import ModalWrapper from "styled-react-modal";

const StyledModal = ModalWrapper.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
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
